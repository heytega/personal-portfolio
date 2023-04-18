import React from 'react';
import PageTag from './PageTag';
import Style from './Form.module.css';

const Form = () => {
  return (
    <section className={Style.formContainer} id='form'>
      <PageTag tag='contact' icon='fa-pager' />
    </section>
  );
};

export default Form;
