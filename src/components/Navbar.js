import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import picture from '../assets/bg-pattern-about-1-mobile-nav-1.svg';
import { useGlobalContext } from '../context';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const {
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    setSidebarOpen,
  } = useGlobalContext();

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <img className='logo-img' src={logo} alt='logo' />
            </Link>
          </div>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            {<FaBars />}
          </button>
        </div>
        <div className='nav-links-container'>
          <ul className='nav-links'>
            <li className='nav-link'>
              <Link className='single-nav-link' to='./'>
                home
              </Link>
            </li>
            <li className='nav-link'>
              <Link className='single-nav-link' to='./about'>
                about
              </Link>
            </li>
          </ul>
          <div className='nav-btn-container'>
            <Link className='nav-contact-btn-link btn' to='/contact'>
              contact us
            </Link>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <aside className='sidebar-container'>
        <div
          className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
        >
          <div className='sidebar-inner-container'>
            <button
              type='button'
              className='nav-toggle nav-close-btn'
              onClick={closeSidebar}
            >
              {<FaTimes />}
            </button>
            <ul className='sidebar-links' onClick={closeSidebar}>
              <li className='sidebar-link'>
                <Link className='single-sidebar-link' to='./'>
                  home
                </Link>
              </li>
              <li className='sidebar-link'>
                <Link className='single-sidebar-link' to='./about'>
                  about
                </Link>
              </li>
            </ul>
            <Link
              className='sidebar-contact-btn btn'
              to='/contact'
              onClick={() => setSidebarOpen(false)}
            >
              contact us
            </Link>
            <img className='sidebar-img' src={picture} alt='picture' />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
