import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import WorkedWith from './components/WorkedWith';
import Form from './components/Form';

const App = () => {
  return (
    <div className='main-container'>
      <div className='contact-card'>
        <Contact />
      </div>
      <div className='home'>
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Portfolio />
        <WorkedWith />
        <Form />
      </div>
    </div>
  );
};

export default App;
