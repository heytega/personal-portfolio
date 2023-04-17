import React from 'react';
import PageTag from './PageTag';
import Style from './Portfolio.module.css';
import Devops from '../assets/devops.png';

const Portfolio = () => {
  return (
    <section className={Style.portfolioContainer} id='portfolio'>
      <PageTag tag='portfolio' icon='fa-rectangle-list' />
      <h1 className={Style.header}>
        Featured <span>Projects</span>
      </h1>
      <div className={Style.portfolioItems}>
        <div className={Style.portfolioItem}>
          <div className={Style.project}>
            <img className={Style.projectImage} src={Devops} alt='' />
          </div>
          <h2 className={Style.projectDes}>Opspad (Devops Notepad)</h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
