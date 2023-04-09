import React from 'react';
import Style from './Socials.module.css';
import github from '../assets/github-original.svg';
import instagram from '../assets/instagram-original.svg';
import linkedin from '../assets/linkedin-original.svg';
import twitter from '../assets/twitter-fill.svg';
import LineIcon from 'react-lineicons';

const Socials = () => {
  return (
    <ul className={Style.socials}>
      <li className={Style.handle}>
        <a href='#'>
          <LineIcon name='twitter-original' style={{ color: '#565656' }} />
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <LineIcon name='linkedin-original' style={{ color: '#565656' }} />
          {/* <img className={Style.icon} src={linkedin} alt='linkedin' /> */}
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <LineIcon name='instagram' style={{ color: '#565656' }} />

          {/* <img className={Style.icon} src={instagram} alt='instagram' /> */}
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <LineIcon name='github-original' style={{ color: '#565656' }} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
