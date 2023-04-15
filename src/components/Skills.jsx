import React from 'react';
import PageTag from './PageTag';
import Style from './Skills.module.css';

const Skills = () => {
  return (
    <section className='skillsContainer' id='skills'>
      <PageTag tag='skills' icon='fa-kitchen-set' />
      <h1 className={Style.header}>
        My <span>Advantages</span>
      </h1>
    </section>
  );
};

export default Skills;
