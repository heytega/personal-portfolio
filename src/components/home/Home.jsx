import React from 'react';
import Style from './Home.module.css';
import PageTag from '../pageTag/PageTag';
import Projects from '../../assets/round-text.png';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Home = ({ activeIndex }) => {
  gsap.registerPlugin(ScrollTrigger);
  // LENIS IMPLEMENTATION
  const lenis = new Lenis();

  // lenis.on('scroll', (e) => {
  //   //
  // });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleCircleClick = (section) => {
    lenis.scrollTo(`#${section}`);
  };

  return (
    <section
      className={
        activeIndex === 0
          ? `${Style.homeContainer} ${Style.visible}`
          : `${Style.homeContainer} ${Style.hidden}`
      }
      id='home'
    >
      <PageTag
        tag='introduce'
        icon='fa-house-user'
        animateClass='animate-home'
      />

      <h1 className={`${Style.mainHeading} animateHeader`}>
        Hello I'm <span className={Style.green}>Tega</span>, A Frontend Web
        Developer
        {/* and
        Computer Scientist */}
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
        <span
          class='material-symbols-outlined'
          style={{
            color: '#fff',
            position: 'absolute',
            fontSize: '55px',
            display: 'block',
          }}
        >
          south
        </span>
      </a>
      <div className={Style.stats}>
        <div className={Style.stat}>
          <h2 className={Style.number}>1+</h2>
          <p className={Style.p}>
            Years of <br /> Experience
          </p>
        </div>

        <div className={Style.stat}>
          <h2 className={Style.number}>6+</h2>
          <p className={Style.p}>
            Projects <br /> completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
