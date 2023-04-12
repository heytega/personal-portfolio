import React from 'react';
import Style from './Home.module.css';
import PageTag from './PageTag';
import Projects from '../assets/round-text.png';

const Home = () => {
  return (
    <section className={Style.homeContainer} id='home'>
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
        <img
          className={Style.circle}
          src={Projects}
          alt='link to see my projects'
        />
        <i
          class='fa-solid fa-arrow-down-long fa-lg'
          style={{
            color: '#fff',
            position: 'absolute',
            fontSize: '40px',
            display: 'block',
          }}
        ></i>
      </a>
    </section>
  );
};

export default Home;
