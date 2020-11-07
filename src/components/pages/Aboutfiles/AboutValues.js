import React from 'react';
import PerserveranceLogo from './logos/goal.svg';
import GenerorityLogo from './logos/generosity.svg';
import GlobalLogo from './logos/global-network.svg';
import NoteLogo from './logos/notepad.svg';
import ResLogo from './logos/responsibility.svg';
import SolutionLogo from './logos/solution.svg';

export default function AboutValues() {
  return (
    <div className="about__values-container">
      <div className="about__values-inner">
        <h2>Our Values</h2>
      </div>
      {/* <div className="about__values-inner">
        <h2>Our Values</h2>
      </div>
      <div className="about__values-flexbox">
        <div className="about__values-card">
          <img src={PerserveranceLogo} alt="image" />
          <p>
            <span>Perseverance</span>
          </p>
          <p>
            We are known for achieving what we set out to do. Our goals are high, as is our desire to achieve them through hard work and dedication.
          </p>
        </div>
        <div className="about__values-card">
          <img src={GenerorityLogo} alt="image" />
          <p>
          <span>Generosity</span>
          </p>
          <p>
          We strive to help and improve the communities where we work and live.
          </p>
        </div>
        <div className="about__values-card">
          <img src={GlobalLogo} alt="image" />
          <p>
          <span>Teamwork</span>
          </p>
          <p>
          Our organization is focused on commitment, leadership, responsibility, creativity, organization, harmony, friendship and cooperation among all our partners and collaborators.
          </p>
        </div>
        <div className="about__values-card">
          <img src={NoteLogo} alt="image" />
          <p>
          <span>Integrity</span>
          </p>
          <p>
          Authenticity, reliability and loyalty are all attributes found in our organization. We employ the highest ethical standards, demonstrating honesty and fairness in every action that we take.
          </p>
        </div>
        <div className="about__values-card">
          <img src={} alt="image" />
          <p>
          <span>Responsibility</span>
          </p>
          <p>
          We are dedicated to satisfying our customers’ needs and honoring the commitments we have made to them by going that extra mile.
          </p>
        </div>
        <div className="about__values-card">
          <img src={SolutionLogo} alt="image" />
          <p>
          <span>Diligence</span>
          </p>
          <p>
          We show pride, enthusiasm and dedication in everything that we do. We are committed to producing and delivering high quality products and services.
          </p>
        </div>
      </div> */}


      <div className="container">
        <div className="box">
          <div className="content">
            <img src={PerserveranceLogo} />
            <h3>
            <span>Perseverance</span>
            </h3>
            <p>
              We are known for achieving what we set out to do. Our goals are high, as is our desire to achieve them through hard work and dedication.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={GenerorityLogo} />
            <h3>
            <span>Generosity</span>
            </h3>
            <p>
              We strive to help and improve the communities where we work and live.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={GlobalLogo} />
            <h3>
            <span>Teamwork</span>
            </h3>
            <p>
              Our organization is focused on commitment, leadership, responsibility, creativity, organization, harmony, friendship and cooperation among all our partners and collaborators.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={NoteLogo} />
            <h3>
            <span>Integrity</span>
            </h3>
            <p>
              Authenticity, reliability and loyalty are all attributes found in our organization. We employ the highest ethical standards, demonstrating honesty and fairness in every action that we take.
             </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={ResLogo} />
            <h3>
            <span>Responsibility</span>
            </h3>
            <p>
              We are dedicated to satisfying our customers’ needs and honoring the commitments we have made to them by going that extra mile.
             </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={SolutionLogo} />
            <h3>
            <span>Diligence</span>
            </h3>
            <p>
              We show pride, enthusiasm and dedication in everything that we do. We are committed to producing and delivering high quality products and services.
            </p>
          </div>
        </div>
      </div>



    {/* <div className="about__values-container">
      <div className="about__values-flex">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={PerserveranceLogo} />
              <h3>Perseverance</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We are known for achieving what we set out to do. Our goals are high, as is our desire to achieve them through hard work and dedication.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={GenerorityLogo} />
              <h3>Generosity</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We strive to help and improve the communities where we work and live.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={GlobalLogo} />
              <h3>Teamwork</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Our organization is focused on commitment, leadership, responsibility, creativity, organization, harmony, friendship and cooperation among all our partners and collaborators.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={NoteLogo} />
              <h3>Integrity</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Authenticity, reliability and loyalty are all attributes found in our organization. We employ the highest ethical standards, demonstrating honesty and fairness in every action that we take.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={ResLogo}/>
              <h3>Responsibility</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
              We are dedicated to satisfying our customers’ needs and honoring the commitments we have made to them by going that extra mile.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={SolutionLogo} />
              <h3>Diligence</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We show pride, enthusiasm and dedication in everything that we do. We are committed to producing and delivering high quality products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  )
}
