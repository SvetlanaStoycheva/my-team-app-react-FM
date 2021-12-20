import React from 'react';
import img1 from '../assets/bg-pattern-home-1.svg';
import img2 from '../assets/bg-pattern-home-2.svg';

const FindTalentHomepage = () => {
  return (
    <section className='find-talent-container'>
      <img src={img1} alt='bg-img' className='find-talent-image1' />
      <div className='find-talent-main'>
        <h1>
          Find the best <span>talent </span>{' '}
        </h1>
        <div className='find-talent-info-container'>
          <div className='find-talend-line line'></div>

          <p className='find-talent-info'>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <div className='find-talent-image2-container'>
        <img src={img2} alt='bg-img' className='find-talent-image2' />
      </div>
    </section>
  );
};

export default FindTalentHomepage;
