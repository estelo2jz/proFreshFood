import React, { Component } from 'react';
import HistoryLogo from './logos/history.svg';

export default class AboutHistory extends Component {
  render() {
    return (
      <div className="about__history-container">
        <div className="about__history-inner">
          <h2>AGROAMERICA HISTORY</h2>
        </div>
        <div className="about__history-bio">
          <p>
            Founded in 1958 AgroAmerica has grown into a multinational agri-business corporation that employs 13,000+ people and operates in the United States, Europe, Ecuador, Costa Rica, Panama, Mexico and Guatemala. We grow, ship and distribute bananas, pineapples and vegetable oils using sustainable farming methods.
          </p>
        </div>
        <div className="about__history-box-container">
          <div class="about__history-main-container">
            <div class="card">
              <div class="imgBx"  data-text="1958">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>1958</h3>
                  <p>
                  The AgroAmerica history started when we commenced  operations in Guatemala with one small banana plantation. For several years we tried out different types of crops.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="1976">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>1976</h3>
                  <p>
                  AgroAmerica takes the important step of dedicating our activity to the production, marketing and export of bananas.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="1998">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>1998</h3>
                  <p>
                  Hurricane Mitch had a significant effect on the AgroAmerica history. As a result of damage caused by the hurricane we decided to abandon some banana plantations and start the tropical oil business.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2001">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2001</h3>
                  <p>
                  The company expanded their operations to include distribution of pineapples grown in Costa Rica.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2002">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2002</h3>
                  <p>
                  We consolidated our position as one of the biggest and most efficient banana and pineapple producers in the world and we were recognized as a reliable producer of sustainable tropical oil in the region.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2009">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2009</h3>
                  <p>
                  AgroAmerica earned the Raninforest Alliance, Global Gap and BASC certifications. A CDM project was approved by the United Nations. The Corporate Social Responsibility program was consolidated and focused on workers, families and communities. Some of these CSR projects have won awards.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2014">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2014</h3>
                  <p>
                  The AgroAmerica history took an important turn when we expanded operations to Panama, Equador and Peru.  One of our companies became the fourth tropical oil company in the world to earn the RSPO Identity Preserved Certification.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2015">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2015</h3>
                  <p>
                  Two of AgroAmerica’s palm oil mills were certified OK Kosher- Pareve/Passover.  They are the only tropical oil companies in America that have this certification.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx"  data-text="2016">
                <img src={HistoryLogo} />
              </div>
              <div class="content">
                <div>
                  <h3>2016</h3>
                  <p>
                  In 2016 we were SCS certified. SCS Global Services recognizes companies for their sustainability accomplishments through trusted third-party certification and auditing services. SCS-certified brands are recognized for their environmental stewardship and social responsibility achievements, backed by third-party credibility and transparency
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
