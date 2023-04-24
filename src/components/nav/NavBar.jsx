import React, { useState } from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';
import Socials from '../socials/Socials';

const NavBar = () => {
  const [active, setActive] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);

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

  return (
    <section className={Style.navBarContainer}>
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
        <li>
          <a
            href='#home'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'home' && Style.active}`
            }
            onClick={() => handleButtonClick('home')}
          >
            <i class='fa-solid fa-house-user'></i>
            <p className={Style.tag}>home</p>
          </a>
        </li>
        <li>
          <a
            href='#about'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'about' && Style.active}`
            }
            onClick={() => handleButtonClick('about')}
          >
            <i class='fa-solid fa-user'></i>
            <p className={Style.tag}>about</p>
          </a>
        </li>
        <li>
          <a
            href='#resume'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'resume' && Style.active}`
            }
            onClick={() => handleButtonClick('resume')}
          >
            <i class='fa-solid fa-briefcase'></i>
            <p className={Style.tag}>resume</p>
          </a>
        </li>
        {/* <li>
          <a
            href='#services'
            className={`${Style.navItem} ${
              active === 'services' && Style.active
            }`}
            onClick={() => handleButtonClick('services')}
          >
            <i class='fa-solid fa-bars-staggered'></i>
          </a>
        </li> */}
        <li>
          <a
            href='#skills'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'skills' && Style.active}`
            }
            onClick={() => handleButtonClick('skills')}
          >
            <i class='fa-solid fa-kitchen-set'></i>
            <p className={Style.tag}>skills</p>
          </a>
        </li>
        <li>
          <a
            href='#portfolio'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'portfolio' && Style.active}`
            }
            onClick={() => handleButtonClick('portfolio')}
          >
            <i class='fa-solid fa-rectangle-list'></i>
            <p className={Style.tag}>porfolio</p>
          </a>
        </li>
        {/* <li>
          <a
            href='#experience'
            className={`${Style.navItem} ${
              active === 'experience' && Style.active
            }`}
            onClick={() => handleButtonClick('experience')}
          >
            <i class='fa-solid fa-shoe-prints '></i>
          </a>
        </li> */}
        <li>
          <a
            href='#form'
            className={
              showSideMenu
                ? `${Style.navItem}`
                : `${Style.navItem} ${active === 'form' && Style.active}`
            }
            onClick={() => handleButtonClick('form')}
          >
            <i class='fa-solid fa-pager '></i>
            <p className={Style.tag}>form</p>
          </a>
        </li>

        <div className={Style.socialContainer}>
          <Socials />
        </div>
      </ul>
    </section>
  );
};

export default NavBar;
