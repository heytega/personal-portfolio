import React from 'react';
import Style from './Socials.module.css';
import LineIcon from 'react-lineicons';
import { useState } from 'react';

const Socials = () => {
  const [changeColor, setChangeColor] = useState({
    twitter: false,
    linkedin: false,
    instagram: false,
    github: false,
  });
  return (
    <ul className={Style.socials}>
      <li>
        <a href='#' className={Style.handle}>
          <i class='fa-brands fa-twitter'></i>
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <i class='fa-brands fa-linkedin'></i>
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <i class='fa-brands fa-instagram'></i>
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <i class='fa-brands fa-github'></i>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
