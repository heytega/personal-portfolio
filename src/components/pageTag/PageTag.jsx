import React from 'react';
import Style from './PageTag.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import animatePageTag from '../../animations/animatePageTag';

const PageTag = ({ icon, tag }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    animatePageTag();
  });

  return (
    <div className={`${Style.pageTagContainer} animateTag`}>
      <i class={`fa-solid ${icon}`}></i>
      <p className={Style.tag}>{tag}</p>
    </div>
  );
};

export default PageTag;
