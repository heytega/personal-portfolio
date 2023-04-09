import React from 'react';
import Style from './Socials.module.css';
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
        </a>
      </li>
      <li className={Style.handle}>
        <a href='#'>
          <LineIcon name='instagram' style={{ color: '#565656' }} />
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
