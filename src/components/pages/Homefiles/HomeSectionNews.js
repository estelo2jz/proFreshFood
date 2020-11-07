import React, { Component } from 'react';
import BG2 from '../../../images/BG.png';

export default class HomeSectionNews extends Component {
  render() {
    return (
      <div className="home__section-news-container">
        <div className="home__section-news-header">
          <h1>NEWS FROM AGROAMERICA</h1>
        </div>
        <div className="home__section-news-inner">
          <div className="home__section-news-bx">
            <div className="home__section-news-p">
              <p>
                AGROAMÉRICA JOINS THE INTERNATIONAL DAY FOR THE PRESERVATION OF THE OZONE LAYER.
              </p>
            </div>
            <div className="home__section-news-image">
              <img src="https://picsum.photos/500?random=8" />
            </div>
          </div>
          <div className="home__section-news-bx">
            <div className="home__section-news-p">
              <p>
              AGROAMERICA CONTRIBUTES ONCE AGAIN TO THE DEVELOPMENT OF THE CENTRAL AMERICAN REGION
              </p>
            </div>
            <div className="home__section-news-image">
              <img src="https://picsum.photos/500?random=9" />
            </div>
          </div>
          <div className="home__section-news-bx">
            <div className="home__section-news-p">
              <p>
              AGROAMERICA PRESENTS CORPORATE SUSTAINABILITY REPORT
              </p>
            </div>
            <div className="home__section-news-image">
              <img src="https://picsum.photos/500?random=10" />
            </div>
          </div>
          <div className="home__section-news-bx">
            <div className="home__section-news-p">
              <p>
              AGROAMERICA AND THE MINISTRY OF AGRICULTURE, LIVESTOCK, AND FOOD -MAGA- SIGN AN AGREEMENT THAT WILL CONTRIBUTE TO FOOD AND NUTRITIONAL
              </p>
            </div>
            <div className="home__section-news-image">
              <img src="https://picsum.photos/500?random=11" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
