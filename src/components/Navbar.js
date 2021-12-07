import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    isSidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };
  return (
    <>
      <nav className='nav-container'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <img className='logo-img' src={logo} alt='logo' />
            </Link>
          </div>
          <button type='button' className='nav-toggle' onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div>
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
            <button>
              <Link to='/contact'>contact us</Link>
            </button>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <ul className='sidebar-links'>
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
        <button className='btn' onClick={() => setSidebarOpen(false)}>
          <Link className='btn' to='/contact'>
            contact us
          </Link>
        </button>
      </aside>
    </>
  );
};

export default Navbar;
