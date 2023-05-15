import React from 'react';
import PageTag from '../pageTag/PageTag';
import Style from './Portfolio.module.css';
import Devops from '../../assets/devops.png';
import HNG from '../../assets/HNG.png';
import rest from '../../assets/rest.png';
import metabnb from '../../assets/metabnb.png';
import { useState } from 'react';

const Portfolio = ({ activeIndex }) => {
  const [goTo, setGoTo] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  // FUNCTION TO CHANGE STRINGED VALUE TO UNSTRINGED
  const unstringValue = (value) => {
    if (value === 'true') {
      return true;
    } else {
      return false;
    }
  };

  // FUNCTION TO HANDLE CLICK ON EACH PORTFOLIO PROJECTS
  const toggleGoto = (prop_key) => {
    const property = {
      first: 'false',
      second: 'false',
      third: 'false',
      fourth: 'false',
    };

    // company the values of identical key for both property and the goTo state
    // proceed to replace the value of the property obj key with the inverse of the goTo state value for same key.
    if (goTo[prop_key] === false) {
      property[`${prop_key}`] = property[`${prop_key}`].replace(
        'false',
        'true'
      );
    }

    // NB: If goTo[prop_key] === true, the if statement to replace with an inverse becomes unnecessary as all values of property obj is set to false.

    // console.log(property);

    // Proceed to unstring the property obj boolean in order to make them valid and pass them as the new goTo state
    const unstringObj = {};

    for (let key in property) {
      if (property.hasOwnProperty(key)) {
        unstringObj[key] = unstringValue(property[key]);
      }
    }
    console.log(unstringObj);
    setGoTo(unstringObj);
  };

  return (
    <section className={Style.portfolioContainer} id='portfolio'>
      <PageTag tag='portfolio' icon='fa-rectangle-list' />
      <h1 className={`animateHeader`}>
        Featured <span>Projects</span>
      </h1>
      <div className={Style.portfolioItems}>
        <div
          className={Style.portfolioItem}
          onClick={() => toggleGoto('first')}
        >
          <div className={Style.project}>
            <img className={Style.projectImage} src={Devops} alt='' />
            <ul className={Style.projectTools}>
              <li>
                <p className={Style.projectTool}>material UI</p>
              </li>
              <li>
                <p className={Style.projectTool}>React</p>
              </li>
            </ul>
            <a
              href='https://opspad.dev'
              target='_blank'
              className={Style.projectOverlay}
              style={{ top: goTo.first && '0px' }}
              onClick={() => toggleGoto('first')}
            >
              <i class='fa-solid fa-arrow-up-right-dots'></i>
              <p>Click to go live</p>
            </a>
          </div>
          <h2 className={Style.projectDes}>Opspad - Official Website</h2>
        </div>

        <div className={Style.middleWrapper}>
          <div
            className={Style.innerPortfolioItem}
            onClick={() => toggleGoto('second')}
          >
            <div className={Style.project}>
              <img
                className={Style.projectImage}
                src={HNG}
                alt='devops notepad'
              />
              <ul className={Style.projectTools}>
                <li>
                  <p className={Style.projectTool} href='#'>
                    Electron
                  </p>
                </li>
                <li>
                  <p className={Style.projectTool} href='#'>
                    React
                  </p>
                </li>
                <li>
                  <p className={Style.projectTool} href='#'>
                    Material UI
                  </p>
                </li>
              </ul>
              <a
                href='https://opspad.dev/download'
                target='blank'
                className={Style.projectOverlay}
                style={{ top: goTo.second ? '0px' : '410px' }}
                onClick={() => toggleGoto('second')}
              >
                <i class='fa-solid fa-arrow-up-right-dots'></i>
                <p>Click to go live</p>
              </a>
            </div>
            <h2 className={Style.projectDes}>Opspad - Desktop Application</h2>
          </div>
          <div
            className={Style.innerPortfolioItem}
            onClick={() => toggleGoto('third')}
          >
            <div className={Style.project}>
              <img className={Style.projectImage} src={rest} alt='' />
              <ul className={Style.projectTools}>
                <li>
                  <p className={Style.projectTool}>material ui</p>
                </li>
                <li>
                  <p className={Style.projectTool}>React</p>
                </li>
              </ul>
              <a
                href='https://restcountryapi.vercel.app/'
                target='_blank'
                className={Style.projectOverlay}
                style={{ top: goTo.third && '0px' }}
                onClick={() => toggleGoto('third')}
              >
                <i class='fa-solid fa-arrow-up-right-dots'></i>
                <p>Click to go live</p>
              </a>
            </div>
            <h2 className={Style.projectDes}>Restcountries - Country API</h2>
          </div>
        </div>
        <div
          className={Style.portfolioItem}
          onClick={() => toggleGoto('fourth')}
        >
          <div className={Style.project}>
            <img className={Style.projectImage} src={metabnb} alt='' />
            <ul className={Style.projectTools}>
              <li>
                <p className={Style.projectTool}>React</p>
              </li>
              <li>
                <p className={Style.projectTool}>Framer Motion</p>
              </li>
              <li>
                <p className={Style.projectTool}>AOS</p>
              </li>
            </ul>
            <a
              href='https://hng-metabnb.vercel.app/'
              target='_blank'
              className={Style.projectOverlay}
              style={{ top: goTo.fourth && '0px' }}
              onClick={() => toggleGoto('fourth')}
            >
              <i class='fa-solid fa-arrow-up-right-dots'></i>
              <p>Click to go live</p>
            </a>
          </div>
          <h2 className={Style.projectDes}>Metabnb - Metaverse Rental</h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
