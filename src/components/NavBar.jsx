import React from 'react';
import Style from './NavBar.module.css';

const NavBar = () => {
  return (
    <section className={Style.navBarContainer}>
      <div className={Style.mainNav}>
        <ul className={Style.mainNavList}>
          <li>
            <a href='#' className={Style.navItem}>
              <i class='fa-solid fa-house-user'></i>
            </a>
          </li>
          <li>
            <a href='#' className={Style.navItem}>
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
      </div>
    </section>
  );
};

export default NavBar;
