import React from 'react';
import Style from './Home.module.css';
import PageTag from './PageTag';
import Projects from '../assets/round-text.png';
import Lenis from '@studio-freight/lenis';

const Home = () => {
  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleCircleClick = (section) => {
    lenis.scrollTo(`#${section}`);
  };

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
      <a
        href='#porfolio'
        className={Style.portfolioLink}
        onClick={() => handleCircleClick('portfolio')}
      >
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
