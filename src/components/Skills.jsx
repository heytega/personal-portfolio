import React from 'react';
import PageTag from './PageTag';
import Style from './Skills.module.css';
import MUI from '../assets/material-ui.svg';
import RQ from '../assets/react-query.svg';
import vite from '../assets/vite.svg';

const Skills = () => {
  return (
    <section className={Style.skillsContainer} id='skills'>
      <PageTag tag='skills' icon='fa-kitchen-set' />
      <h1 className={Style.header}>
        My <span>Advantages</span>
      </h1>
      <div className={Style.skills}>
        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <i class='fa-brands fa-square-js'></i>
            <h1 className={Style.percent}>80%</h1>
          </div>
          <p className={Style.name}>Javascript</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <i class='fa-brands fa-react fa-spin fa-spin-reverse'></i>
            <h1 className={Style.percent}>85%</h1>
          </div>
          <p className={Style.name}>React</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={MUI} alt='mui' />
            <h1 className={Style.percent}>80%</h1>
          </div>
          <p className={Style.name}>Material UI</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={RQ} alt='mui' />
            <h1 className={Style.percent}>70%</h1>
          </div>
          <p className={Style.name}>Tanstack Query</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={vite} alt='mui' />
            <h1 className={Style.percent}>65%</h1>
          </div>
          <p className={Style.name}>Vitejs</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
