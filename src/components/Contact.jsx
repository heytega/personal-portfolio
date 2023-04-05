import React from 'react';
import Style from './Contact.module.css';
import logo from '../assets/Logo.svg';
import img from '../assets/me.jpg';

const Contact = () => {
  return (
    <section className={Style.cardContainer}>
      <div className={Style.card}>
        <div className={Style.header}>
          <img className={Style.logo} src={logo} alt='logos' />
          <h4>
            Frontend <br /> Developer
          </h4>
        </div>
        <div className={Style.imgContainer}>
          <img className={Style.img} src={img} alt='my image' />
        </div>
        <h1 className={Style.address}>anthony@gmail.com</h1>
      </div>
    </section>
  );
};

export default Contact;
