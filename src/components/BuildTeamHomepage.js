import React from 'react';
import img from '../assets/bg-pattern-home-3.svg';
import { buildTeam } from '../utils';

const BuildTeamHomepage = () => {
  return (
    <section className='build-team-container'>
      <div className='build-team-main'>
        <div className='build-team-title-container'>
          <div className='line build-team-line'> </div>
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
        <div className='build-team-points-container'>
          {buildTeam.map((item, index) => {
            const { icon, title, text } = item;
            return (
              <article className='build-team-single-point' key={index}>
                <span className='build-team-point-icon'>{icon}</span>
                <div className='build-team-single-point-text'>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className='build-team-img-container'>
        <img src={img} alt='' />
      </div>
    </section>
  );
};

export default BuildTeamHomepage;
