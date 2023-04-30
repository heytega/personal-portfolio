import React from 'react';
import Style from './Button.module.css';

const Button = ({ hireMe }) => {
  return (
    <div className={Style.btnContainer}>
      <a href='#form' onClick={() => hireMe()} className={Style.contactBtn}>
        <i class='fa-regular fa-envelope fa-lg'></i>
        <p className={Style.caption}>Hire me!</p>
      </a>
    </div>
  );
};

export default Button;
