import React from 'react';
import Style from './PageTag.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const PageTag = ({ icon, tag }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = window.document.querySelectorAll('.animateTag');
    const Array = gsap.utils.toArray(sections);
    console.log(Array);
    console.log(sections);
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
  });

  return (
    <div className={`${Style.pageTagContainer} animateTag`}>
      <i class={`fa-solid ${icon}`}></i>
      <p className={Style.tag}>{tag}</p>
    </div>
  );
};

export default PageTag;
