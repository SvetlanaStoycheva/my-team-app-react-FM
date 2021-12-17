import React, { useState } from 'react';
import img01 from '../assets/bg-pattern-about-2-contact-1.svg';
import img02 from '../assets/bg-pattern-about-1-mobile-nav-1.svg';
import { contactPoints } from '../utils';

const ContactPage = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentMail, setCurrentMail] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='contact-page-container'>
      <img src={img01} alt='bg-image' className='contact-bg-image-01' />
      <article className='contact-container'>
        <h2>Contact</h2>
        <h3>Ask us about</h3>
        <div className='contact-points-container'>
          {contactPoints.map((item, index) => {
            const { icon, title } = item;
            return (
              <div className='single-contact-point'>
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
            className='form-input'
            placeholder='Name'
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
          />
          <input
            type='email'
            className='form-input'
            placeholder='Email Address'
            value={currentMail}
            onChange={(e) => setCurrentMail(e.target.value)}
          />
          <input
            type='text'
            className='form-input'
            placeholder='Company Name'
          />
          <input type='text' className='form-input' placeholder='Title' />
          <textarea
            type='text'
            className='form-input input-message'
            placeholder='Message'
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          >
            Enter text here...
          </textarea>
          <div className='contact-submit-btn-container'>
            <button className='btn submit-btn'>submit</button>
          </div>
        </form>
      </article>
      <img src={img02} alt='bg-image' className='contact-bg-image-02' />
    </section>
  );
};

export default ContactPage;
