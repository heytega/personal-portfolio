import React from 'react';
import style from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import WorkedWith from './components/WorkedWith';
import Form from './components/Form';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.contactContainer}>
        <Contact />
      </div>
      <div className={style.home}>
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Portfolio />
        <WorkedWith />
        <Form />
      </div>
      <NavBar />
    </div>
  );
};

export default App;
