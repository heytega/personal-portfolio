import React from 'react';
import Style from './PageTag.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const PageTag = ({ icon, tag }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = window.document.querySelectorAll('.animate');
    const Array = gsap.utils.toArray(sections);
    console.log(Array);
    console.log(sections);
    Array.forEach((c) =>
      gsap.to(c, {
        // yPercent: 100,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: c,
          start: 'bottom bottom',
          end: 'top center',
          toggleActions: 'restart, pause, reverse, reset',
          scrub: 1,
        },
      })
    );
  });

  return (
    <div className={`${Style.pageTagContainer} animate`}>
      <i class={`fa-solid ${icon}`}></i>
      <p className={Style.tag}>{tag}</p>
    </div>
  );
};

export default PageTag;
