import React, { useState } from 'react';
import img01 from '../assets/bg-pattern-about-2-contact-1.svg';
import img02 from '../assets/bg-pattern-about-1-mobile-nav-1.svg';
import { contactPoints } from '../utils';

const ContactPage = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentMail, setCurrentMail] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  //
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [currentNameFlag, setCurrentNameFlag] = useState(true);
  const [currentMailFlag, setCurrentMailFlag] = useState(true);
  const [currentMessageFlag, setCurrentMessageFlag] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    //if obligatory fields are filled => show thank you message for 3sec
    if (currentMail && currentMessage && currentName) {
      setReadyToSubmit(true);
      const timeout = setTimeout(() => {
        setReadyToSubmit(false);
        //clear the fields
        setCurrentMail('');
        setCurrentTitle('');
        setCurrentCompany('');
        setCurrentMessage('');
        setCurrentName('');
        //clear the alarm css
        setCurrentMailFlag(true);
        setCurrentNameFlag(true);
        setCurrentMessageFlag(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
    //if any of the obligatory fields are empty
    if (!currentMail) {
      setCurrentMailFlag(false);
    }
    if (!currentName) {
      setCurrentNameFlag(false);
    }
    if (!currentMessage) {
      setCurrentMessageFlag(false);
    }
    //if one of the requared fields is filled
    if (currentMail) {
      setCurrentMailFlag(true);
    }
    if (currentName) {
      setCurrentNameFlag(true);
    }
    if (currentMessage) {
      setCurrentMessageFlag(true);
    }

    // setCurrentMail('');
    // setCurrentTitle('');
    // setCurrentCompany('');
    // setCurrentMessage('');
    // setCurrentName('');
    // console.log(e.currentTarget, e.target);
  };

  return (
    <section className='contact-page-container'>
      <img src={img01} alt='bg-img' className='contact-bg-image-01' />
      <article className='contact-container'>
        <h2>Contact</h2>
        <h3>Ask us about</h3>
        <div className='contact-points-container'>
          {contactPoints.map((item, index) => {
            const { icon, title } = item;
            return (
              <div className='single-contact-point' key={index}>
                <span className='build-team-point-icon contact-points-icon'>
                  {icon}
                </span>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </article>
      {/* Contact Form */}
      <article className='contact-form-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            className={`${
              currentNameFlag ? 'form-input' : 'form-input alarm-form-input'
            }`}
            placeholder='*Name'
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
          />
          {!currentNameFlag && (
            <p className='input-alarm-text'>This field is required</p>
          )}
          <input
            type='email'
            className={`${
              currentMailFlag ? 'form-input' : 'form-input alarm-form-input'
            }`}
            placeholder='*Email Address'
            value={currentMail}
            onChange={(e) => setCurrentMail(e.target.value)}
          />
          {!currentMailFlag && (
            <p className='input-alarm-text'>This field is required</p>
          )}
          <input
            type='text'
            className='form-input'
            placeholder='Company Name'
            onChange={(e) => setCurrentCompany(e.target.value)}
          />
          <input
            type='text'
            className='form-input'
            placeholder='Title'
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
          <textarea
            type='text'
            className={`${
              currentMessageFlag
                ? 'form-input input-message'
                : 'form-input input-message alarm-form-input'
            }`}
            placeholder='*Message'
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          >
            Enter text here...
          </textarea>
          {!currentMessageFlag && (
            <p className='input-alarm-text'>This field is required</p>
          )}
          <div className='contact-submit-btn-container'>
            <button className='btn submit-btn'>submit</button>
          </div>
          {readyToSubmit && (
            <div className='contact-thank-you'>
              <p>Thank you for your interest! We will be in touch soon.</p>
            </div>
          )}
        </form>
      </article>
      <img src={img02} alt='bg-img' className='contact-bg-image-02' />
    </section>
  );
};

export default ContactPage;
