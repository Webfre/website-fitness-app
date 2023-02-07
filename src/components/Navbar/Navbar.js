import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

import { links } from '../../data';

import './navbar.scss';

function Navbar() {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <nav>
      <div className='container nav__container'>
        <Link to='/' className='logo' onClick={() => setIsNavShow(false)}>
          <div style={{ fontWeight: 800, color: '#4b0062', fontSize: 24 }}>BGym</div>
        </Link>
        <ul className={`nav__links ${isNavShow ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShow(prev => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
        <button className='nav__toggle-btn' onClick={() => setIsNavShow(prev => !prev)}>
          {
            isNavShow ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div >
    </nav >
  );
}

export default Navbar;