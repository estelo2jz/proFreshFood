import React from 'react';

import BG1 from '../../../images/BG.jpeg';

const HomeSection = () => {
  return (
    <div className="home__section-container">
      <div className="home__section-inner-container">
        <div className="home__section-box">
          <div className="home__section-header">
            <h1>Our People</h1>
            <p>
              We care about the welfare of our workers and their families.
            </p>
          </div>
          <img src={BG1} />
        </div>
        <div className="home__section-box">
          <div className="home__section-header">
            <h1>Comminity Development</h1>
            <p>
              We strive to improve the quality of life of nearby communities.
            </p>
          </div>
          <img src={BG1} />
        </div>
        <div className="home__section-box">
          <div className="home__section-header">
            <h1>Environment</h1>
            <p>
              We care about conserving the environment.
            </p>
          </div>

          <img src={BG1} />
        </div>
        <div className="home__section-box">
          <div className="home__section-header">
            <h1>Sustianability</h1>
            <p>
              We strive to operate in a responsible and sustainable manner.
            </p>
          </div>
          <img src={BG1} />
        </div>
      </div>
    </div>
  )
}

export default HomeSection;