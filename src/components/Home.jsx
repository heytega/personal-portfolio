import React from 'react';
import Style from './Home.module.css';
import PageTag from './PageTag';

const Home = () => {
  return (
    <section className={Style.homeContainer}>
      <PageTag tag='introduce' icon='fa-house-user' />
      <h1 className={Style.mainHeading}>
        Hello I'm <span className={Style.green}>Tega</span>, A Web Developer and
        Computer Scientist
      </h1>
    </section>
  );
};

export default Home;
