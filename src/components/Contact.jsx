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
          <h4 className={Style.title}>
            Frontend <br /> Developer
          </h4>
        </div>
        <div className={Style.imgContainer}>
          <img className={Style.img} src={img} alt='my image' />
        </div>
        <h1 className={Style.address}>anthony@gmail.com</h1>
        <h1 className={`${Style.address} ${Style.mb20}`}>
          Base in Ogun State <br /> Nigeria
        </h1>
        <p className={Style.copyright}>
          &copy; 2023 Fortae. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
