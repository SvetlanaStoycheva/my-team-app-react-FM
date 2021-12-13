import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/bg-pattern-home-6-about-5.svg';

export const ReadyToStartHomepage = () => {
  return (
    <section className='ready-to-start-container'>
      <img className='ready-to-start-bg-image' src={img} alt='image' />
      <div className='ready-to-start-main'>
        <h2>Ready to get started?</h2>
        <Link className='btn ready-to-start-btn' to='/contact'>
          contact us
        </Link>
      </div>
    </section>
  );
};

export default ReadyToStartHomepage;
