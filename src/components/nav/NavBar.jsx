import React, { useState, useEffect, useRef } from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';
import Socials from '../socials/Socials';
import NavData from './NavBarData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = ({ setActiveIndex }) => {
  // STATES
  const navRef = useRef(null);
  const tlRef = useRef(null);
  const [active, setActive] = useState(null);

  const [showSideMenu, setShowSideMenu] = useState(false);
  const [hoverState, setHoverState] = useState(() => {
    const initialState = {};
    for (let i = 0; i < NavData.length; i++) {
      initialState[i] = false;
    }
    return initialState;
  });

  const handleMouseEnter = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: false }));
  };

  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  // lenis.on('scroll', (e) => {
  //   // console.log(e);
  // });

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
    setShowSideMenu(false);
    lenis.scrollTo(`#${id}`);
    hideMenu();
  };

  // function to show side menu
  const showMenu = () => {
    setShowSideMenu(true);
    if (typeof window != 'undefined' && window.document) {
      window.document.body.style.overflow = 'hidden';
      console.log(lenis);
    }
  };

  // FUNCTION TO HIDE SIDE MENU
  const hideMenu = () => {
    document.body.style.overflow = 'unset';
    setShowSideMenu(false);
  };

  // USE-EFFECTS
  useEffect(() => {
    //timeline for animating the active color of the navigation
    const tl = gsap.timeline({ paused: true });
    tl.to(navRef.current, { '--active-color': 'blue', duration: 0.3 });
    tl.to(navRef.current, { '--active-color': 'red', duration: 0.3 });
    tlRef.current = tl;

    // Add ScrollTrigger to each section in the navigation
    const sections = navRef.current.querySelectorAll('section');
    sections.forEach((section, index) => {
      ScrollTigger.create({
        trigger: section,
        start: 'top center',
        onEnter: () => {
          setActiveIndex(index);
          tlRef.current.restart();
        },
      });
    });
  }, []);

  return (
    <div className={Style.navBarContainer} ref={navRef}>
      <button
        onClick={showSideMenu ? hideMenu : showMenu}
        className={Style.menuBtn}
      >
        {showSideMenu ? (
          <i class='fa-solid fa-xmark'></i>
        ) : (
          <i class='fa-solid fa-bars'></i>
        )}
      </button>

      {/* OVERLAY */}
      {showSideMenu && (
        <div onClick={hideMenu} className={Style.sideMenuOverlay}></div>
      )}

      {/* LIST */}
      <ul
        className={
          showSideMenu
            ? Style.mainNavList
            : `${Style.mainNavList} ${Style.hidden}`
        }
      >
        {NavData.map((li, index) => (
          <a
            href={`#${li.tag}`}
            key={index}
            // className={
            //   showSideMenu
            //     ? `${Style.navItem}`
            //     : `${Style.navItem}
            //     ${active === li.tag && Style.active}`
            // }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className={Style.navItem}
            onClick={() => handleButtonClick(li.tag)}
          >
            <i
              style={{
                '--active-color': 'transparent',
                background: `var(--active-color)`,
              }}
              class={li.i}
            ></i>
            <p className={Style.tag}>{li.tag}</p>
            <p
              className={Style.feed}
              style={{
                opacity: hoverState[index] ? 1 : 0,
                visibility: hoverState[index] ? 'visible' : 'hidden',
              }}
            >
              {li.tag}
            </p>
          </a>
        ))}

        <div className={Style.socialContainer}>
          <Socials />
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
