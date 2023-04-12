import React from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';

const NavBar = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <section className={Style.navBarContainer}>
      <ul className={Style.mainNavList}>
        <li>
          <a
            href='#home'
            className={Style.navItem}
            onClick={(e) => lenis.scrollTo('#home')}
          >
            <i class='fa-solid fa-house-user'></i>
          </a>
        </li>
        <li>
          <a
            href='#about'
            className={Style.navItem}
            onClick={(e) => lenis.scrollTo('#about')}
          >
            <i class='fa-solid fa-briefcase'></i>
          </a>
        </li>
        <li>
          <a href='#' className={Style.navItem}>
            <i class='fa-solid fa-bars-staggered'></i>
          </a>
        </li>
        <li>
          <a href='#' className={Style.navItem}>
            <i class='fa-solid fa-kitchen-set'></i>
          </a>
        </li>
        <li>
          <a href='#' className={Style.navItem}>
            <i class='fa-solid fa-rectangle-list'></i>
          </a>
        </li>
        <li>
          <a href='#' className={Style.navItem}>
            <i class='fa-solid fa-shoe-prints'></i>
          </a>
        </li>
        <li>
          <a href='#' className={Style.navItem}>
            <i class='fa-solid fa-pager'></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
