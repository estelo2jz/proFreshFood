import React, { Component } from 'react';
import Logo1 from '../images/logos/logo1.jpg';
import Logo2 from '../images/logos/logo2.jpg';
import Logo3 from '../images/logos/logo3.png';
import Logo4 from '../images/logos/logo4.jpg';
import Logo5 from '../images/logos/logo45.jpg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        {/* <div className="footer-certi">
          <div className="footer-header">
            <p>Cerifications</p>
          </div>
          <div  className="footer-flex">
            <div className="footer-logo-container">
              <div className="footer-logo">
              <img src={Logo2} /> 
              </div>
            </div>
            <div className="footer-logo-container">
              <div className="footer-logo">
              <img src={Logo5} />
              </div>
            </div>
            <div className="footer-logo-container">
              <div className="footer-logo">
                <img src={Logo1} />
              </div>
            </div>
            <div className="footer-logo-container">
              <div className="footer-logo">
              <img src={Logo4} />
              </div>
            </div>
            <div className="footer-logo-container">
              <div className="footer-logo">
              <img src={Logo3} />
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-inner-container">
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
    )
  }
}
