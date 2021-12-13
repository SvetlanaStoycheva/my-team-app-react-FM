import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-logo-links-adress'>
        <div className='footer-logo-links'>
          <img className='footer-logo' src={logo} alt='logo' />
          <div className='footer-links'>
            <li className='footer-link'>
              <Link className='single-footer-link' to='./'>
                home
              </Link>
            </li>
            <li className='footer-link'>
              <Link className='single-footer-link' to='./about'>
                about
              </Link>
            </li>
          </div>
        </div>
        <div className='footer-address'>
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us: 949-833-7432</p>
        </div>
      </div>
      <div className='footer-social-media-link-container'>
        <div className='footer-social-media-links'>
          <span className='footer-social-media-icon'>
            <FaFacebook />
          </span>
          <span className='footer-social-media-icon'>
            <FaPinterest />
          </span>
          <span className='footer-social-media-icon'>
            <FaTwitter />
          </span>
        </div>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
