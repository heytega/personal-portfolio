import React from 'react';
import PageTag from '../pageTag/PageTag';
import Style from './Skills.module.css';
import MUI from '../../assets/material-ui.svg';
import RQ from '../../assets/reactquery.svg';
import vite from '../../assets/vite.svg';
import Electron from '../../assets/electron.svg';
import Bootstrap from '../../assets/Bootstrap.svg';
import GreenSock from '../../assets/greensock.svg';

const Skills = ({ activeIndex }) => {
  return (
    <section className={Style.skillsContainer} id='skills'>
      <PageTag tag='skills' icon='fa-kitchen-set' />

      <h1 className={`animateHeader`}>
        My <span>Advantages</span>
      </h1>

      <div className={Style.skills}>
        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <i class='fa-brands fa-square-js'></i>
            {/* <h2 className={Style.percent}>80%</h2> */}
          </div>
          <p className={Style.name}>Javascript</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <i class='fa-brands fa-react'></i>
            {/* <h2 className={Style.percent}>85%</h2> */}
          </div>
          <p className={Style.name}>React</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={MUI} alt='mui' />
            {/* <h2 className={Style.percent}>80%</h2> */}
          </div>
          <p className={Style.name}>Material UI</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={RQ} alt='Tanstack Query' />
            {/* <h2 className={Style.percent}>70%</h2> */}
          </div>
          <p className={Style.name}>Tanstack Query</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={vite} alt='Vitejs' />
            {/* <h2 className={Style.percent}>65%</h2> */}
          </div>
          <p className={Style.name}>Vitejs</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={Electron} alt='Electron' />
            {/* <h2 className={Style.percent}>50%</h2> */}
          </div>
          <p className={Style.name}>Electron</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={Bootstrap} alt='bootstrap' />
            {/* <h2 className={Style.percent}>80%</h2> */}
          </div>
          <p className={Style.name}>Bootstrap</p>
        </div>

        <div className={Style.skill}>
          <div className={Style.skillInner}>
            <img className={Style.icon} src={GreenSock} alt='GSAP' />
            {/* <h2 className={Style.percent}>60%</h2> */}
          </div>
          <p className={Style.name}>GSAP</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
