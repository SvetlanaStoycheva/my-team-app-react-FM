import React, { useState } from 'react';
import img01 from '../assets/bg-pattern-about-2-contact-1.svg';
import img02 from '../assets/bg-pattern-home-4-about-3.svg';
import { directors } from '../utils';
import { FaPlus, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const MeetDirectorsAboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleInfo = (index) => {
    //set active on the clicked icon and remove it from the other icons
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
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
              {/* not clicked */}
              {activeIndex !== index && (
                <div className='toggle-part'>
                  <img
                    src={img}
                    alt='director photo'
                    className='director-img'
                  />
                  <h4>{name}</h4>
                  <p>{position}</p>
                </div>
              )}
              {/* clicked */}
              {activeIndex === index && (
                <div className='toggle-part'>
                  <h4>{name}</h4>
                  <p className='text-clicked-director'>{info}</p>
                  <div className='toggle-part-social-icons'>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedin />
                    </span>
                  </div>
                </div>
              )}
              <span
                className='director-icon-plus'
                onClick={() => toggleInfo(index)}
              >
                {activeIndex === index ? <IoMdClose /> : <FaPlus />}
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
