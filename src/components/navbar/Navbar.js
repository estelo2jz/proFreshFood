import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import './navbar.scss';
import { IconContext } from 'react-icons';

import Logo from '../../images/logo.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="navbar__content-container">
            <div className="navbar__content-socials">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>  
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/"  target="_blank">
                    {/* <ion-icon name="logo-facebook"></ion-icon>   */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en"  target="_blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en"  target="_blank">
                    {/* <ion-icon name="logo-twitter"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/tags/flicker/"  target="_blank">
                    <ion-icon name="logo-flickr"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/tags/flicker/"  target="_blank">
                    {/* <ion-icon name="logo-flickr"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    {/* <ion-icon name="logo-youtube"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/feed/" target="_blank">
                    {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/feed/" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <div>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </div>
              );
            })}
            <div className="navbar__active-logo">
              <img src={Logo} alt="logo" />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;