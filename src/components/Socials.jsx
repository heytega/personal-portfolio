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
        <a
          href='#'
          onMouseOver={() => setChangeColor({ ...changeColor, twitter: true })}
          onMouseOut={() => setChangeColor({ ...changeColor, twitter: false })}
          className={Style.handle}
        >
          <LineIcon
            name='twitter-original'
            style={{
              color: changeColor.twitter ? '#28e98c' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a
          href='#'
          onMouseOver={() => setChangeColor({ ...changeColor, linkedin: true })}
          onMouseOut={() => setChangeColor({ ...changeColor, linkedin: false })}
          className={Style.handle}
        >
          <LineIcon
            name='linkedin-original'
            style={{
              color: changeColor.linkedin ? '#28e98c' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a
          href='#'
          onMouseOver={() =>
            setChangeColor({ ...changeColor, instagram: true })
          }
          onMouseOut={() =>
            setChangeColor({ ...changeColor, instagram: false })
          }
          className={Style.handle}
        >
          <LineIcon
            name='instagram'
            style={{
              color: changeColor.instagram ? '#28e98c' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
      <li>
        <a
          href='#'
          onMouseOver={() => setChangeColor({ ...changeColor, github: true })}
          onMouseOut={() => setChangeColor({ ...changeColor, github: false })}
          className={Style.handle}
        >
          <LineIcon
            name='github-original'
            style={{
              color: changeColor.github ? '#28e98c' : '#565656',
              transition: '0.3s',
            }}
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
