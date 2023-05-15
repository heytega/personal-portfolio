import React from 'react';
import PageTag from '../pageTag/PageTag';
import Style from './Resume.module.css';
import ResumeData from './ResumeData';

const Resume = () => {
  return (
    <section className={Style.resumeContainer} id='resume'>
      <PageTag tag='resume' icon='fa-briefcase' animateClass='animate-resume' />
      <h1 className={`animateHeader`}>
        Education & <span>Experience</span>
      </h1>
      {ResumeData.map((tml) => (
        <div className={Style.resumeTimeline}>
          <p className={Style.date}>{tml.date}</p>

          <h2 className={Style.jobTitle}>{tml.title1}</h2>
          <p className={Style.company}>{tml.company1}</p>

          <h2 className={Style.jobTitle}>{tml.title2}</h2>
          <p className={Style.company}>{tml.company2}</p>
        </div>
      ))}
    </section>
  );
};

export default Resume;
