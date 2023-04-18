import React from 'react';
import PageTag from './PageTag';
import Style from './Portfolio.module.css';
import Devops from '../assets/devops.png';
import HNG from '../assets/HNG.png';
import rest from '../assets/rest.png';
import metabnb from '../assets/metabnb.png';

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
            <ul className={Style.projectTools}>
              <li>
                <a className={Style.projectTool} href='#'>
                  material UI
                </a>
              </li>
              <li>
                <a className={Style.projectTool} href='#'>
                  React
                </a>
              </li>
            </ul>
          </div>
          <h2 className={Style.projectDes}>Opspad - Official Website</h2>
        </div>

        <div className={Style.middleWrapper}>
          <div className={Style.portfolioItem}>
            <div className={Style.project}>
              <img className={Style.projectImage} src={HNG} alt='' />
              <ul className={Style.projectTools}>
                <li>
                  <a className={Style.projectTool} href='#'>
                    Electron
                  </a>
                </li>
                <li>
                  <a className={Style.projectTool} href='#'>
                    React
                  </a>
                </li>
                <li>
                  <a className={Style.projectTool} href='#'>
                    Material UI
                  </a>
                </li>
              </ul>
            </div>
            <h2 className={Style.projectDes}>Opspad - Desktop Application</h2>
          </div>
          <div className={Style.portfolioItem}>
            <div className={Style.project}>
              <img className={Style.projectImage} src={rest} alt='' />
              <ul className={Style.projectTools}>
                <li>
                  <a className={Style.projectTool} href='#'>
                    material ui
                  </a>
                </li>
                <li>
                  <a className={Style.projectTool} href='#'>
                    React
                  </a>
                </li>
              </ul>
            </div>
            <h2 className={Style.projectDes}>Restcountries - Country API</h2>
          </div>
        </div>
        <div className={Style.portfolioItem}>
          <div className={Style.project}>
            <img className={Style.projectImage} src={metabnb} alt='' />
            <ul className={Style.projectTools}>
              <li>
                <a className={Style.projectTool} href='#'>
                  React
                </a>
              </li>
              <li>
                <a className={Style.projectTool} href='#'>
                  Framer Motion
                </a>
              </li>
              <li>
                <a className={Style.projectTool} href='#'>
                  AOS
                </a>
              </li>
            </ul>
          </div>
          <h2 className={Style.projectDes}>Metabnb - Metaverse Rental</h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
