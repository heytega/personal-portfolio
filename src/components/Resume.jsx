import React from 'react';
import PageTag from './PageTag';
import Style from './Resume.module.css';

const Resume = () => {
  return (
    <section className={Style.resumeContainer} id='resume'>
      <PageTag tag='resume' icon='fa-briefcase' />
    </section>
  );
};

export default Resume;
