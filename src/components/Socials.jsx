import React from 'react';
import Style from './Socials.module.css';
import LineIcon from 'react-lineicons';
import { useState } from 'react';

const Socials = () => {
  const [changeColor, setChangeColor] = useState(false);
  return (
    <ul className={Style.socials}>
      <li>
        <a
          href='#'
          onMouseOver={() => setChangeColor(true)}
          onMouseOut={() => setChangeColor(false)}
          className={Style.handle}
        >
          <LineIcon
            name='twitter-original'
            style={{
              color: changeColor ? '#0a58ca' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <LineIcon
            name='linkedin-original'
            style={{
              color: changeColor ? '#0a58ca' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <LineIcon
            name='instagram'
            style={{
              color: changeColor ? '#0a58ca' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a href='#' className={Style.handle}>
          <LineIcon
            name='github-original'
            style={{
              color: changeColor ? '#0a58ca' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
