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
        <p className={Style.date}> DEC 2022 - Present</p>

        <h2 className={Style.jobTitle}>Front-End Web Developer</h2>
        <p className={Style.company}>Opspad</p>
      </div>
      <div className={Style.resumeTimeline}>
        <p className={Style.date}>OCT - DEC 2022</p>
        <h2 className={Style.jobTitle}>Front-End Web Developer Intern</h2>
      </div>
      <div className={Style.resumeTimeline}>
        <p className={Style.date}>SEP 2018 - MAY 2021</p>
        <h2 className={Style.jobTitle}>
          Higher National Diploma in Computer Science
        </h2>
        <p className={Style.company}>Federal Polytechnic Auchi</p>
        <h2 className={Style.jobTitle}>National Diploma in Computer Science</h2>
        <p className={Style.company}>Federal Polytechnic Auchi</p>
      </div>
    </section>
  );
};

export default Resume;
