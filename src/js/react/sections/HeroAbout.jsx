import React from 'react'
import aboutImage from '../../../img/about-main.png';

const HeroAbout = () => {
  return (
    <section className='page__about about'>
      <div className="about__container">
        <div className="about__wrapper">
          <div className="about__picture">
            <img src={aboutImage} className='ibg' alt="Image"/>
          </div>
          <div className="about__content">
            <div className="about__descr">
              <p>
                We are a young, passionate team with a love for fresh, wholesome food and a deep respect for the environment. We bring a modern twist to traditional Vietnamese cuisine, creating nourishing bowls packed with vibrant    flavors and sustainable ingredients. 
              </p>
              <p>
                Come visit us!
              </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
