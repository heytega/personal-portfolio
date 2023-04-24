import React from 'react';
import Style from './Contact.module.css';
import logo from '../../assets/Logo.svg';
import img from '../../assets/imagee.jpg';
import Socials from '../socials/Socials';
import Button from '../button/Button';
import Lenis from '@studio-freight/lenis';

const Contact = () => {
  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const hireMe = () => {
    lenis.scrollTo('#form');
  };

  return (
    <section className={Style.cardContainer}>
      <div className={Style.card}>
        <div className={Style.header}>
          <img className={Style.logo} src={logo} alt='logos' />
          <h4 className={Style.title}>
            Frontend <br /> Web Developer
          </h4>
        </div>
        <div className={Style.imgContainer}>
          <img className={Style.img} src={img} alt='my image' />
        </div>
        {/* <h2 className={Style.address}>akpovbiyoranthony@gmail.com</h2> */}
        <h2 className={`${Style.address} ${Style.mb20}`}>
          Base in Ogun State Nigeria
        </h2>
        <p className={Style.copyright}>
          &copy; 2023 Fortae. All Rights Reserved
        </p>
        <Socials />
      </div>
      <Button hireMe={hireMe} />
    </section>
  );
};

export default Contact;
