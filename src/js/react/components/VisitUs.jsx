import React from 'react'

const VisitUs = () => {
  return (
    <div className="info-location__visit-us visit-us">
        <h4 className="visit-us__title">Visit us</h4>
        <ul className="visit-us__list">
            <li className="visit-us__item">10 Old Bailey</li>
            <li className="visit-us__item">City of London, London </li>
            <li className="visit-us__item">EC4M 7NG</li>
            <li className="visit-us__item"><a className='visit-us__link' href="tel:+440723456789">+44 0723456789</a></li>
            <li className="visit-us__item"><a className='visit-us__link' href="mailto:info@buddhabowl.com">info@buddhabowl.com</a></li>
        </ul>
        <a href="#" className="visit-us__direction">Get directions</a>
    </div>
  )
}

export default VisitUs
