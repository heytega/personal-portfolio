import React from 'react';
import style from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
// import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Form from './components/Form';
import NavBar from './components/NavBar';
import video from './assets/video.mp4';
import { useState } from 'react';
import { useEffect } from 'react';
// import Experience from './components/Experience';
// import Testimonial from './components/Testimonial';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const addLoader = () => setLoading(true);
    const removeLoader = () => setLoading(false);
    window.addEventListener('DOMContentLoaded', addLoader);
    window.removeEventListener('DOMContentLoaded', addLoader);
    window.addEventListener('load', removeLoader);
    window.removeEventListener('load', removeLoader);
  }, []);

  if (loading) {
    return <div className={style.loading}>Loading</div>;
  }
  return (
    <div className={style.mainContainer}>
      <video
        className={style.video}
        src={video}
        muted
        autoPlay
        loop
        type='video/mp4'
      />
      <div className={style.contactContainer}>
        <Contact />
      </div>
      <div className={style.timeline}>
        <Home />
        <About />
        <Resume />
        {/* <Services /> */}
        <Skills />
        <Portfolio />
        {/* <Testimonial/> */}
        {/* <Experience /> */}
        <Form />
      </div>
      <NavBar />
    </div>
  );
};

export default App;
