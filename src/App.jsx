import React, { useState, useEffect, useLayoutEffect } from 'react';
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
import animateHeaders from './animations/animateHeaders';
import animateParagraph from './animations/animateParagraph';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    animateHeaders();
    animateParagraph();
  });

  useLayoutEffect(() => {
    const images = document.getElementsByTagName('img');
    const videos = document.getElementsByTagName('video');
    const icons = document.getElementsByTagName('i');
    const spans = document.getElementsByTagName('span');
    const promises = [];

    // An array of promises for all images and videos
    for (let i = 0; i < images.length; i++) {
      const promiseWrapper = {
        promise: new Promise((resolve) => {
          images[i].onload = resolve;
        }),
        cancel: () => {
          images[i].onload = null;
        },
      };
      promises.push(promiseWrapper);
    }

    for (let i = 0; i < videos.length; i++) {
      const promiseWrapper = {
        promise: new Promise((resolve) => {
          videos[i].onloadeddata = resolve;
        }),
        cancel: () => {
          videos[i].onloadeddata = null;
        },
      };
      promises.push(promiseWrapper);
    }

    for (let i = 0; i < icons.length; i++) {
      const promiseWrapper = {
        promise: new Promise((resolve) => {
          icons[i].onload = resolve;
        }),
        cancel: () => {
          icons[i].onload = null;
        },
      };
      promises.push(promiseWrapper);
    }

    for (let i = 0; i < spans.length; i++) {
      const promiseWrapper = {
        promise: new Promise((resolve) => {
          spans[i].onload = resolve;
        }),
        cancel: () => {
          spans[i].onload = null;
        },
      };
      promises.push(promiseWrapper);
    }

    // wait for all promises to resolve before setting isLoading to false
    Promise.all(promises).then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    );

    // Cancel promises if component unmounts before they resolve
    return () => promises.forEach((promise) => promise.cancel());
  });

  if (loading) {
    return (
      <div className={style.loading}>
        <p>
          <i class='fa-solid fa-circle-notch fa-spin'></i>
        </p>
      </div>
    );
  }
  return (
    <div className={style.mainContainer}>
      <video
        className={style.video}
        controls={false}
        src={newVideo}
        muted
        // autoStart
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
