import React from 'react';
import PageTag from './PageTag';
import Style from './Form.module.css';

const Form = () => {
  return (
    <section className={Style.formContainer} id='form'>
      <PageTag tag='contact' icon='fa-pager' />
      <h1 className={Style.header}>
        Let's Work <span>Together!</span>
      </h1>
    </section>
  );
};

export default Form;
