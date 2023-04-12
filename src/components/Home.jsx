import React from 'react';
import Style from './Home.module.css';
import PageTag from './PageTag';
import PortFolio from '../assets/round-text.png';

const Home = () => {
  return (
    <section className={Style.homeContainer}>
      <PageTag tag='introduce' icon='fa-house-user' />
      <h1 className={Style.mainHeading}>
        Hello I'm <span className={Style.green}>Tega</span>, A Web Developer and
        Computer Scientist
      </h1>
      <p className={Style.mainParagraph}>
        My goal is to empower your brand with modern and intuitive interfaces,
        <br />
        bringing your ideas to life, one pixel at a time.
      </p>
      <a href='#' className={Style.portfolioLink}>
        <img src={PortFolio} alt='link to see my project' />
      </a>
    </section>
  );
};

export default Home;
