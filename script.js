gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false
});
function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  gsap.to(loader, { opacity: 0, duration: 0.8, delay: 0.2, onComplete: () => loader.remove() });
});

gsap.from('.brand, .nav nav a', { y: -20, opacity: 0, duration: 1, stagger: 0.08, ease: 'power3.out' });
gsap.from('.hero .eyebrow, .hero h1, .hero .sub, .hero .btn, .scroll-indicator', {
  y: 30, opacity: 0, duration: 1, stagger: 0.12, delay: 0.15, ease: 'power3.out'
});

gsap.to('.hero__bg', {
  scale: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

gsap.from('.story__inner', {
  y: 80,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: { trigger: '.story', start: 'top 70%' }
});

gsap.from('.section-head', {
  y: 40,
  opacity: 0,
  duration: 1,
  scrollTrigger: { trigger: '.gallery', start: 'top 70%' }
});

gsap.utils.toArray('.card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%'
    },
    delay: i * 0.05
  });

  gsap.to(card.querySelector('img'), {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: card,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});

gsap.from('.cta', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: { trigger: '.cta', start: 'top 80%' }
});
