import React, { useState } from 'react';
import PageTag from './PageTag';
import Style from './Form.module.css';
import { motion } from 'framer-motion';
import useFirebase from '../custom-hooks/useFirebase';

// FRAMER MOTION ANIMATION FOR HELPER TEXT
const helperVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Form = () => {
  // HELPER STATE
  const [showHelper, setShowHelper] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  // FORM TAG STATE
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // CHECKBOX STATE
  const [checked, setChecked] = useState(false);
  // console.log(active);

  // FUNCTION TO TOGGLE CHECKBOX STATE

  const handleCheck = () => {
    setChecked(!checked);
  };

  // USESTATE FUNCTION MANAGEMENT
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  // FUNCTION FOR HELPER TEXTS
  const showHelperText = (e) => {
    const tag = e.target.name;
    if (tag === 'firstName') {
      setShowHelper({
        lastName: false,
        email: false,
        message: false,
        [tag]: true,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }

    if (tag === 'lastName') {
      setShowHelper({
        [tag]: true,
        firstName: false,
        email: false,
        message: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }

    if (tag === 'email') {
      setShowHelper({
        [tag]: true,
        firstName: false,
        lastName: false,
        message: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }
    if (tag === 'message') {
      setShowHelper({
        [tag]: true,
        firstName: false,
        email: false,
        lastName: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 5000);
    }
  };

  // FUNCTION FOR FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    console.date;
    useFirebase(person);
    setPerson({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={Style.formContainer} id='form'>
      <PageTag tag='contact' icon='fa-pager' />
      <h1>
        Let's Work <span>Together!</span>
      </h1>
      {/* <h3>Contact Me</h3> */}
      <p className={Style.p}>
        Hi there, contact me to ask about anything you have in mind.
      </p>

      <form className={Style.form} onSubmit={handleSubmit} autoComplete='on'>
        <div className={Style.formFlexContainer}>
          <div className={Style.formControl}>
            <label htmlFor='firstName'>First name</label>
            <input
              onClick={showHelperText}
              required
              autoComplete='off'
              type='text'
              id='first_name'
              className={Style.first_name}
              name='firstName'
              placeholder='Enter your first name'
              value={person.firstName}
              onChange={handleChange}
            />
            {showHelper.firstName && (
              <motion.span
                className={Style.helperText}
                variants={helperVariant}
                initial='hidden'
                animate='visible'
              >
                Hint: What you would like us to call you
              </motion.span>
            )}
          </div>
          <div className={`${Style.formControl} ${Style.controlLast}`}>
            <div>
              <label htmlFor='lastName'>Last name</label>
              <input
                onClick={showHelperText}
                required
                autoComplete='off'
                type='text'
                id='last_name'
                className={Style.last_name}
                name='lastName'
                placeholder='Enter your last name'
                value={person.lastName}
                onChange={handleChange}
              />
              {showHelper.lastName && (
                <motion.span
                  className={Style.helperText}
                  variants={helperVariant}
                  initial='hidden'
                  animate='visible'
                >
                  Hint: Perferably your surname
                </motion.span>
              )}
            </div>
          </div>
        </div>
        <div className={Style.formControl}>
          <label htmlFor='email'>Email</label>
          <input
            onClick={showHelperText}
            required
            autoComplete='off'
            type='email'
            id='email'
            className={Style.email}
            name='email'
            placeholder='Yourname@email.com'
            value={person.email}
            onChange={handleChange}
          />
          {showHelper.email && (
            <motion.span
              className={Style.helperText}
              variants={helperVariant}
              initial='hidden'
              animate='visible'
            >
              Hint: An email readily accessible to you
            </motion.span>
          )}
        </div>

        <div className={Style.formControl}>
          <label htmlFor='message'>Message</label>
          <textarea
            required
            onClick={showHelperText}
            name='message'
            id='message'
            placeholder="Send me a message and I'll reply as soon as possible..."
            value={person.message}
            onChange={handleChange}
          ></textarea>
          {showHelper.message && (
            <motion.span
              className={Style.helperText}
              variants={helperVariant}
              initial='hidden'
              animate='visible'
            >
              Hint: Keep it concise and straight to the point.
            </motion.span>
          )}
        </div>

        <div className={Style.formControl}>
          <label className={Style.checkboxContainer}>
            You agree to providing your data to <span>Tega</span> who may
            contact you
            <input onChange={handleCheck} type='checkbox' />
            <span className={Style.checkmark}></span>
          </label>
        </div>
        <div className={Style.formControl}>
          {/* <button className={Style.btn} id='btn__submit' type='submit'>
            Send message
          </button> */}
          <button
            disabled={checked ? false : true}
            className={Style.contactBtn}
            style={{ opacity: checked ? '1' : '0.2' }}
            id='btn__submit'
            type='submit'
          >
            <i class='fa-regular fa-envelope fa-lg'></i>
            <p className={Style.caption}>Send Message</p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
