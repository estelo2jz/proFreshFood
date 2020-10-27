import React, { Component } from 'react'

export default class HomeSection2 extends Component {
  render() {
    return (
      <div className="home__section-two-container">
        <div className="home__section-two-top-container">
          <div className="home__section-two-top-desc">
            <h1>
              We grow and ship sustainable
              tropical fruits and vegetable oils   
            </h1>
            <p>
              All our products are of the highest quality, environmentally-friendly and sustainable.
            </p>
          </div>
        </div>
        <div className="home__section-two-bottom-container">
          <div className="home__section-two-bottom-desc">
            <h1>
              We transport quality
            </h1>
            <p>
              We have our own logistics and transportation company.  We have an in-house academy to train our drivers in all aspects of safety and environmental concerns. We have strict controls in place to ensure the safety of our drivers and the quality and freshness of our products.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
