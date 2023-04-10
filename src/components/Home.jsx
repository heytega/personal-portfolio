import React from 'react';
import Style from './Home.module.css';
import PageTag from './PageTag';

const Home = () => {
  return (
    <section className={Style.homeContainer}>
      <PageTag tag='introduce' icon='fa-house-user' />
    </section>
  );
};

export default Home;
