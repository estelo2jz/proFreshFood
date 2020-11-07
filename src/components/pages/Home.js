import React from 'react';
import BG from '../../images/BG.png';
import {Link} from 'react-router-dom'
import HomeSection from './Homefiles/HomeSection';
import HomeSection2 from './Homefiles/HomeSection2';
import HomeSectionNews from './Homefiles/HomeSectionNews';

function Home() {
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <div className="home-header">
          <h1>
            Beyond just planting a seed…
            we contribute to a better future<br />
            FOR OUR PEOPLE AND THE ENVIRONMENT
          </h1>
        </div>
        <div className="home-desc-flex">
          <div className="home-desc-box">
            <div className="home-desc-summary">
              <p>
                AgroAmerica grows, ships and distributes bananas and vegetable oil. We strive to be a sustainable agriculture business committed to improving the lives of our employees while protecting the environment. This commitment to sustainable agriculture and responsible business practices is a core element in all our operations in Central and South America, the United States, UK and Europe.
              </p>
            </div>

            <div className="home-desc-image">
              <img src="https://picsum.photos/500?random=1" alt='logo' />
            </div>
          </div>
          <div className="home-desc-box">
            <div className="home-desc-image">
              <img src="https://picsum.photos/500?random=2" alt='logo' />
            </div>
            <div className="home-desc-summary">
              <p>
                Since our inception in 1958 we’ve become a leading sustainable agriculture business in Central and South America. We’ve grown from one small banana plantation to an international agribusiness corporation.  As a sustainable agriculture business we’re committed to the development of the countries where we operate, as well as to the protection and conservation of the environment.
              </p>
            </div>
          </div>
          <div className="home-desc-box">
            <div  className="home-desc-summary">
              <p>
                Our goals are not just focused on the production of bananas and sustainable tropical oil in Guatemala, Panama, Costa Rica, Ecuador and Peru. We’re also deeply committed to the welfare and development of the people we employ, their families and the communities near our operations.
              </p>
            </div>
            <div className="home-desc-image">
              <img src="https://picsum.photos/500?random=3" alt='logo' />
            </div>
          </div>
        </div>
        <div className="home-bottom-summary">
          <p>
          Besides being a competitive agribusiness corporation, through our commitment to responsible farming and protection of the environment we’re also known as an advocate for sustainable agriculture. We’re actively involved in improving the welfare of our employees, the communities around our operations and conservation of the environment and have many social programs that assist our people and the communities close to our operations. AgroAmerica is a member of the Better Banana Project (BBP) and we are certified by the Rainforest Alliance, Global Gap, SCS Sustainably Grown and BASC.
          </p>
        </div>
        <div>
          <HomeSection />
          <HomeSection2 />
          <HomeSectionNews />
        </div>
      </div>
    </div>
  )
}

export default Home;
