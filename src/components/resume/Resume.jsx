import React from 'react';
import PageTag from '../pageTag/PageTag';
import Style from './Resume.module.css';

const Resume = () => {
  return (
    <section className={Style.resumeContainer} id='resume'>
      <PageTag tag='resume' icon='fa-briefcase' />
      <h1>
        Education & <span>Experience</span>
      </h1>
      <div className={Style.resumeTimeline}>
        <p className={Style.date}>2020 - Present</p>
        <h2 className={Style.jobTitle}>Framer Designer & Developer</h2>
        <p className={Style.company}>Brunodee Agency</p>
        <h2 className={Style.jobTitle}>Front-End WordPres Developer</h2>
        <p className={Style.company}>Envato Market</p>
      </div>
      <div className={Style.resumeTimeline}>
        <p className={Style.date}>2020 - Present</p>
        <h2 className={Style.jobTitle}>Framer Designer & Developer</h2>
        <p className={Style.company}>Brunodee Agency</p>
        <h2 className={Style.jobTitle}>Front-End WordPres Developer</h2>
        <p className={Style.company}>Envato Market</p>
      </div>
      <div className={Style.resumeTimeline}>
        <p className={Style.date}>2020 - Present</p>
        <h2 className={Style.jobTitle}>Framer Designer & Developer</h2>
        <p className={Style.company}>Brunodee Agency</p>
        <h2 className={Style.jobTitle}>Front-End WordPres Developer</h2>
        <p className={Style.company}>Envato Market</p>
      </div>
    </section>
  );
};

export default Resume;
