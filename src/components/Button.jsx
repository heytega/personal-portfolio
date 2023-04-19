import React from 'react';
import Style from './Button.module.css';
import Lenis from '@studio-freight/lenis';

const Button = () => {
  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <section className={Style.btnContainer}>
      <a
        href='#form'
        onClick={() => lenis.ScrollTo('#form')}
        className={Style.contactBtn}
      >
        <i class='fa-regular fa-envelope fa-lg'></i>
        <p className={Style.caption}>Hire me!</p>
      </a>
    </section>
  );
};

export default Button;
