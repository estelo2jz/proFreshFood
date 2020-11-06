import React, { Component } from 'react';
import AboutSection from './AboutSection';
import AboutValues from './AboutValues';

export default class AboutMain extends Component {
  render() {
    return (
      <div className="about__main-container">
        <AboutSection />
        <AboutValues />
      </div>
    )
  }
}
