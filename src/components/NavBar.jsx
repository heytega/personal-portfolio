import React, { useState, useRef } from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';
import { useInView } from 'react-intersection-observer';

const NavBar = () => {
  const [active, setActive] = useState(null);
  const buttonRefs = useRef([]);

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
    const targetElement = document.getElementById(id);
    console.log(targetElement);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonRef = (ref, index) => {
    buttonRefs.current[index] = ref;
    console.log(buttonRefs.current);
  };

  const handleIntersection = (sectionId, inView) => {
    if (inView) {
      setActiveButtonId(sectionId);
    }
  };

  const homeRef = useRef(null);
  const [homeIntersection, homeInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('home', homeInView);

  const aboutRef = useRef(null);
  const [aboutIntersection, aboutInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('about', aboutInView);

  const resumeRef = useRef(null);
  const [resumeIntersection, resumeInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('resume', resumeInView);

  const servicesRef = useRef(null);
  const [servicesIntersection, servicesInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('services', servicesInView);

  const skillsRef = useRef(null);
  const [skillsIntersection, skillsInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('skills', skillsInView);

  const portfolioRef = useRef(null);
  const [portfolioIntersection, portfolioInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('portfolio', portfolioInView);

  const experienceRef = useRef(null);
  const [experienceIntersection, experienceInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('experience', experienceInView);

  const formRef = useRef(null);
  const [formIntersection, formInView] = useInView({
    threshold: 0.5,
    rootMargin: '-100px',
    triggerOnce: true,
  });
  handleIntersection('form', formInView);

  // useIntersectionObserver(handleIntersection, options, [
  //   document.getElementById('home'),
  //   document.getElementById('about'),
  //   document.getElementById('resume'),
  //   document.getElementById('services'),
  //   document.getElementById('skills'),
  //   document.getElementById('portfolio'),
  //   document.getElementById('experience'),
  //   document.getElementById('contact'),
  // ]);

  // FUNCTIONALITY OF TOGGLE NAVBUTTONS

  // const handleButtonClick = (section) => {
  //   setActive(section);
  //   lenis.scrollTo(`#${section}`);
  // };

  return (
    <section className={Style.navBarContainer}>
      <ul className={Style.mainNavList}>
        <li>
          <a
            href='#home'
            ref={(ref) => handleButtonRef(ref, 0)}
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
