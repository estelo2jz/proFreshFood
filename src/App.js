import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Logo from './images/logo.png';
import Footer from './components/Footer';

import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Fruits from "./components/pages/Fruits";
import MediaGallary from "./components/pages/MediaGallary";
import News from "./components/pages/News";
import Services from "./components/pages/Services";
import Sustainability from "./components/pages/Sustainability";
import Tropical from "./components/pages/TropicalOil";


import './styles/main.scss';

function LogoHeader() {
  return (
    <div className="logo-header">
      <div>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Router>
        <div className="app-nav-container">
          <Navbar />
        </div>
        <LogoHeader />
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/blog"  component={Blog}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/fruits"  component={Fruits}/>
          <Route path="/mediaGallary"  component={MediaGallary}/>
          <Route path="/news"  component={News}/>
          <Route path="/services"  component={Services}/>
          <Route path="/sustainability"  component={Sustainability}/>
          <Route path="/tropicalOil"  component={Tropical}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
