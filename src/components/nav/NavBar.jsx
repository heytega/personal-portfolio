import React, { useState } from 'react';
import Style from './NavBar.module.css';
import Lenis from '@studio-freight/lenis';
import Socials from '../socials/Socials';
import NavData from './NavBarData';

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
        {NavData.map((li) => (
          <a
            href={`#${li.tag}`}
            key={li.id}
            // className={
            //   showSideMenu
            //     ? `${Style.navItem}`
            //     : `${Style.navItem}
            //     ${active === li.tag && Style.active}`
            // }
            className={Style.navItem}
            onClick={() => handleButtonClick(li.tag)}
          >
            <i class={li.i}></i>
            <p className={Style.tag}>{li.tag}</p>
          </a>
        ))}

        <div className={Style.socialContainer}>
          <Socials />
        </div>
      </ul>
    </section>
  );
};

export default NavBar;
