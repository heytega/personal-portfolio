import React from 'react';
import Style from './Button.module.css';

const Button = ({ hireMe }) => {
  return (
    <section className={Style.btnContainer}>
      <a href='#form' onClick={() => hireMe()} className={Style.contactBtn}>
        <i class='fa-regular fa-envelope fa-lg'></i>
        <p className={Style.caption}>Hire me!</p>
      </a>
    </section>
  );
};

export default Button;
