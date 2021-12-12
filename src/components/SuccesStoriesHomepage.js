import React from 'react';
import imgMain1 from '../assets/bg-pattern-home-4-about-3.svg';
import imgMain2 from '../assets/bg-pattern-home-5.svg';
import quotes from '../assets/icon-quotes.svg';
import { successStories } from '../utils';

const SuccesStoriesHomepage = () => {
  return (
    <section className='success-stories-container'>
      <img src={imgMain1} alt='image' />
      <div className='success-stories-main'>
        <h2>
          Delivering real results for top companies. Some of our{' '}
          <span>success stories.</span>
        </h2>
        <div className='single-stories-container'>
          {successStories.map((item, index) => {
            return (
              <article className='single-story' key={index}>
                <img src={quotes} alt='quotes' />
                <p>{item.text}</p>
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
                <img
                  src={item.img}
                  alt='person'
                  className='single-story-photo'
                />
              </article>
            );
          })}
        </div>
      </div>
      <img src={imgMain2} alt='image' className='success-stories-bg-img-2' />
    </section>
  );
};

export default SuccesStoriesHomepage;
