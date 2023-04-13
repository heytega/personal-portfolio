import React, { useState } from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';

const NavBar = () => {
  const [active, setActive] = useState(null);

  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // USE INTERSECTION OBSERVER API TO DETECT WHEN A SECTION IS IN VIEW
  const handleButtonClick = (id) => {
    setActive(id);
    // const targetElement = document.getElementById(id);
    // console.log(targetElement);
    lenis.scrollTo(`#${id}`);
  };

  return (
    <section className={Style.navBarContainer}>
      <ul className={Style.mainNavList}>
        <li>
          <a
            href='#home'
            className={`${Style.navItem} ${active === 'home' && Style.active}`}
            onClick={() => handleButtonClick('home')}
          >
            <i class='fa-solid fa-house-user'></i>
          </a>
        </li>
        <li>
          <a
            href='#about'
            className={`${Style.navItem} ${active === 'about' && Style.active}`}
            onClick={() => handleButtonClick('about')}
          >
            <i class='fa-solid fa-user'></i>
          </a>
        </li>
        <li>
          <a
            href='#resume'
            className={`${Style.navItem} ${
              active === 'resume' && Style.active
            }`}
            onClick={() => handleButtonClick('resume')}
          >
            <i class='fa-solid fa-briefcase'></i>
          </a>
        </li>
        <li>
          <a
            href='#services'
            className={`${Style.navItem} ${
              active === 'services' && Style.active
            }`}
            onClick={() => handleButtonClick('services')}
          >
            <i class='fa-solid fa-bars-staggered'></i>
          </a>
        </li>
        <li>
          <a
            href='#skills'
            className={`${Style.navItem} ${
              active === 'skills' && Style.active
            }`}
            onClick={() => handleButtonClick('skills')}
          >
            <i class='fa-solid fa-kitchen-set'></i>
          </a>
        </li>
        <li>
          <a
            href='#portfolio'
            className={`${Style.navItem} ${
              active === 'portfolio' && Style.active
            }`}
            onClick={() => handleButtonClick('portfolio')}
          >
            <i class='fa-solid fa-rectangle-list'></i>
          </a>
        </li>
        <li>
          <a
            href='#experience'
            className={`${Style.navItem} ${
              active === 'experience' && Style.active
            }`}
            onClick={() => handleButtonClick('experience')}
          >
            <i class='fa-solid fa-shoe-prints '></i>
          </a>
        </li>
        <li>
          <a
            href='#form'
            className={`${Style.navItem} ${active === 'form' && Style.active}`}
            onClick={() => handleButtonClick('form')}
          >
            <i class='fa-solid fa-pager '></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
