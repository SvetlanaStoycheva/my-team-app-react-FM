import React from 'react';
import img from '../assets/bg-pattern-about-4.svg';
import logo1 from '../assets/logo-gadgets-now.png';
import logo2 from '../assets/logo-jakarta-post.png';
import logo3 from '../assets/logo-tech-radar.png';
import logo4 from '../assets/logo-the-guardian.png';
import logo5 from '../assets/logo-the-verge.png';

const ClientsAboutPage = () => {
  return (
    <section className='some-clients-container'>
      <img src={img} alt='bg-img' className='bg-image-some-clients' />
      <h2>Some of our clients</h2>
      <div className='clients-logo-container'>
        <img src={logo1} alt='client-logo' className='clients-logo' />
        <img src={logo2} alt='client-logo' className='clients-logo' />
        <img src={logo3} alt='client-logo' className='clients-logo' />
        <img src={logo4} alt='client-logo' className='clients-logo' />
        <img src={logo5} alt='client-logo' className='clients-logo' />
      </div>
    </section>
  );
};

export default ClientsAboutPage;
