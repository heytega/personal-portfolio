import React from 'react';
import Style from './Socials.module.css';
import github from '../assets/github-original.svg';
import instagram from '../assets/instagram-original.svg';
import linkedin from '../assets/linkedin-original.svg';
import twitter from '../assets/twitter-fill.svg';

const Socials = () => {
  return (
    <ul className={Style.socials}>
      <li className={Style.handle}>
        <img src={twitter} alt='' />
      </li>
      <li className={Style.handle}>
        <img src={linkedin} alt='' />
      </li>
      <li className={Style.handle}>
        <img src={instagram} alt='' />
      </li>
      <li className={Style.handle}>
        <img src={github} alt='' />
      </li>
    </ul>
  );
};

export default Socials;
