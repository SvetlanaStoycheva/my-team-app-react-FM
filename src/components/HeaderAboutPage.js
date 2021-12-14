import React from 'react';
import img from '../assets/bg-pattern-about-1-mobile-nav-1.svg';

const HeaderAboutPage = () => {
  return (
    <section className='header-about-container'>
      <h1>About</h1>
      <div className='header-about-info-container'>
        <div className='line build-team-line header-about-line'></div>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
        <img src={img} alt='bg-image' className='header-about-bg-image' />
      </div>
    </section>
  );
};
export default HeaderAboutPage;
