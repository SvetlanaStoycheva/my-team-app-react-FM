import React, { useState } from 'react';
import img01 from '../assets/bg-pattern-about-2-contact-1.svg';
import img02 from '../assets/bg-pattern-home-4-about-3.svg';
import { directors } from '../utils';
import { FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io';

const MeetDirectorsAboutPage = () => {
  const [infoState, setInfoState] = useState(false);
  const toggleInfo = (e) => {
    console.log(e.currentTarget);
  };

  return (
    <section className='meet-directors-container'>
      <img src={img01} alt='bg-image' className='directors-bg-image01' />
      <h2>Meet the directors</h2>
      <div className='directors-container'>
        {directors.map((item, index) => {
          const { img, name, position, info } = item;

          return (
            <article key={index} className='single-director' id={index}>
              <img src={img} alt='director photo' className='director-img' />
              <h4>{name}</h4>
              <p>{position}</p>
              <span className='director-icon-plus' onClick={toggleInfo}>
                <FaPlus />
              </span>
            </article>
          );
        })}
        <img src={img02} alt='bg-image' className='directors-bg-image02' />
      </div>
    </section>
  );
};

export default MeetDirectorsAboutPage;
