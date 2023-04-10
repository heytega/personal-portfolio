import React from 'react';
import Style from './Button.module.css';
import LineIcon from 'react-lineicons';

const Button = () => {
  return (
    <a href='#' className={Style.contactBtn}>
      <i class='fa-regular fa-envelope fa-lg'></i>
      <p className={Style.caption}>Hire me!</p>
    </a>
  );
};

export default Button;
