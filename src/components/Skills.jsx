import React from 'react';
import PageTag from './PageTag';
import Style from './Skills.module.css';

const Skills = () => {
  return (
    <section className={Style.skillsContainer} id='skills'>
      <PageTag tag='skills' icon='fa-kitchen-set' />
      <h1 className={Style.header}>
        My <span>Advantages</span>
      </h1>
      <div className={Style.skills}>
        <div className={Style.skill}>
          <img className={Style.icon} src='' alt='figma' />
          <h1 className={Style.percent}>93%</h1>
        </div>
        <p className={Style.name}>React</p>
      </div>
    </section>
  );
};

export default Skills;
