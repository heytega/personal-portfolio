import React from 'react';
import PageTag from './PageTag';
import Style from './Skills.module.css';
import MUI from '../assets/material-ui.svg';
import RQ from '../assets/react-query.svg';

const Skills = () => {
  return (
    <section className={Style.skillsContainer} id='skills'>
      <PageTag tag='skills' icon='fa-kitchen-set' />
      <h1 className={Style.header}>
        My <span>Advantages</span>
      </h1>

      <div className={Style.skills}>
        <div className={Style.skill}>
          <i class='fa-brands fa-square-js'></i>
          <h1 className={Style.percent}>70%</h1>
        </div>
        <p className={Style.name}>Javascript</p>
      </div>

      <div className={Style.skills}>
        <div className={Style.skill}>
          <i class='fa-brands fa-react fa-spin fa-spin-reverse'></i>
          <h1 className={Style.percent}>93%</h1>
        </div>
        <p className={Style.name}>React</p>
      </div>

      <div className={Style.skills}>
        <div className={Style.skill}>
          <img className={Style.icon} src={MUI} alt='mui' />
          <h1 className={Style.percent}>80%</h1>
        </div>
        <p className={Style.name}>Material UI</p>
      </div>

      <div className={Style.skills}>
        <div className={Style.skill}>
          <img className={Style.icon} src={RQ} alt='mui' />
          <h1 className={Style.percent}>80%</h1>
        </div>
        <p className={Style.name}>Tanstack Query</p>
      </div>
    </section>
  );
};

export default Skills;
