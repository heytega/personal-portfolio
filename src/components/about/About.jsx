import React from 'react';
import PageTag from '../pageTag/PageTag';
import Style from './About.module.css';

const About = () => {
  return (
    <section className={Style.aboutContainer} id='about'>
      <PageTag tag='about' icon='fa-user' />
      <h1>
        {/* Every great design begin with an even{' '}
        <span className={Style.green}>better story</span> */}
        My Tech Odyssey: Navigating
        <span> Inno</span>vation, <span>Crea</span>tivity, and
        <span> Gro</span>wth
      </h1>
      <p className={Style.p}>
        My journey in tech began with a passion for developing web and desktop
        applications that streamline workflows and meet the needs of users. As a
        frontend developer, my focus has always been on delivering a seamless
        user experience that incorporates innovative ideas and the latest
        technologies.
      </p>
      <p className={Style.p}>
        {' '}
        During my time as a Frontend ReactJS Developer Intern with HNG/Zuri, I
        gained valuable experience building web and desktop applications. This
        experience, coupled with my ability to work collaboratively in an agile
        environment and my attention to detail, has prepared me for new
        challenges in the tech industry.
      </p>
      <p className={Style.p}>
        I am excited to take on new opportunities and work with dynamic and
        fast-growing companies. I am committed to delivering pixel-perfect
        design implementation and user-friendly experiences, and I believe my
        passion for innovation and my fast learning ability make me an excellent
        candidate for any tech role.
      </p>
    </section>
  );
};

export default About;
