import React from 'react';

import BG1 from '../../../images/BG.png';

const HomeSection = () => {
  return (
    <div className="home__section-container">
      <div className="home__section-inner-container">
        <div className="home__section-box">

            <h1>Our People</h1>
            <p>
              We care about the welfare of our workers and their families.
            </p>
            <img src="https://picsum.photos/500?random=4" />
        </div>
        <div className="home__section-box">
            <h1>Comminity Development</h1>
            <p>
              We strive to improve the quality of life of nearby communities.
            </p>
            <img src="https://picsum.photos/500?random=5" />

        </div>
        <div className="home__section-box">

            <h1>Environment</h1>
            <p>
              We care about conserving the environment.
            </p>
            <img src="https://picsum.photos/500?random=6" />

        </div>
        <div className="home__section-box">
            <h1>Sustianability</h1>
            <p>
              We strive to operate in a responsible and sustainable manner.
            </p>
            <img src="https://picsum.photos/500?random=7" />

        </div>
      </div>
    </div>
  )
}

export default HomeSection;