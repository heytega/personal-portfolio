import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const contentSwipeUp = () => {
  const sections = window.document.querySelectorAll('.animateParagraph');
  const Array = gsap.utils.toArray(sections);
  Array.forEach((c) =>
    gsap.fromTo(
      c,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        // delay: 1.5,

        // duration: 2.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: c,
          start: 'top 92%',
          end: '+=50',
          toggleActions: 'restart, none, reverse, pause',
          scrub: 1,
          // markers: true,
        },
      }
    )
  );
};

export default function animateParagraph() {
  return contentSwipeUp();
}
