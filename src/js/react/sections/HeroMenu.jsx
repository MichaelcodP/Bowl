import React from 'react'
import { NavLink } from 'react-router-dom'; // Додаємо NavLink
import menuImage from '../../../img/menu-main.png';

const HeroMenu = () => {
  return (
    <section className='page__menu menu'>
      <div className="menu__container">
        <div className="menu__wrapper">
          <div className="menu__picture">
            <img src={menuImage} className='ibg' alt="Image"/>
          </div>
          <div className="menu__content">
            <h1 className="menu__title title title--main">Our Menu</h1>
            <div className="menu__descr">
              <p>
                Pick from one of our Chef-inspired combinations or create your own. Only the freshest ingredients and flavors. Choose your base, protein, and sauce. All proteins, vegetables, and toppings are gluten-free.
              </p>
            </div>
            <NavLink to="/" className="menu__button button">
              <span>Order Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="#1A4D2E"/>
                </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMenu
