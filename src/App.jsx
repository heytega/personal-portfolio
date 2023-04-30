import React from 'react';
import style from './App.module.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
// import Services from './components/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Form from './components/form/Form';
import NavBar from './components/nav/NavBar';
import newVideo from './assets/video.mp4';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (loading) {
    return <div className={style.loading}>Loading</div>;
  }
  return (
    <div className={style.mainContainer}>
      <video
        className={style.video}
        controls={false}
        src={newVideo}
        muted
        autoStart
        autoPlay
        loop
        type='video/mp4'
        playsInline
      />

      <div className={style.contactContainer}>
        <Contact />
      </div>
      <div className={style.timeline}>
        <Home activeIndex={activeIndex} />
        <About activeIndex={activeIndex} />
        <Resume activeIndex={activeIndex} />
        {/* <Services /> */}
        <Skills activeIndex={activeIndex} />
        <Portfolio activeIndex={activeIndex} />
        {/* <Testimonial/> */}
        {/* <Experience /> */}
        <Form activeIndex={activeIndex} />
      </div>
      <NavBar setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default App;
