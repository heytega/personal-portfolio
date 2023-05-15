import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const animateTag = () => {
  let sections = window.document.querySelectorAll('.animateTag');
  const Array = gsap.utils.toArray(sections);
  Array.forEach((c) =>
    gsap.fromTo(
      c,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        // duration: 1.5,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: c,
          start: 'top 95%',
          end: '+=50',
          toggleActions: 'restart, none, reverse, pause',
          scrub: 1,
          // markers: true,
        },
      }
    )
  );
};

export default function animatePageTag() {
  return animateTag();
}
