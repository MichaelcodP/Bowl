import React from 'react'
import heroImage from '../../../img/hero-main.png';

const Hero = () => {
  return (
    <section className='page__hero hero'>
      <div className="hero__container">
        <div className="hero__body">
            <h1 className="hero__title title title--main">Healthy & Authentic Vietnamese Bowls</h1>
            <div className="hero__text">Fresh ingredients, delicious flavours.</div>
            <picture className="hero__picture">
                <img src={heroImage} alt="Hero image" />
            </picture>
        </div>
      </div>
    </section>
  )
}

export default Hero
