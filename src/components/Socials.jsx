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
        <a href='#'>
          <img className={Style.icon} src={twitter} alt='twitter' />
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <svg>{Style.icon}</svg>
          {/* <img className={Style.icon} src={linkedin} alt='linkedin' /> */}
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <img className={Style.icon} src={instagram} alt='instagram' />
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <img className={Style.icon} src={github} alt='github' />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
