import React from 'react'
import Map from '../components/Map.jsx'
import OpeningHours from '../components/OpeningHours.jsx';
import VisitUs from '../components/VisitUs.jsx';

const Location = () => {
  const position = [51.5155, -0.0939]; // Координати для "10 Old Bailey, London"

  return (
    <section className='page__location location'>
      <div className="location__container">
        <h2 className="location__title title">Location</h2>
        <div className="location__body">
            {/* Карта */}
            <div className="location__map" style={{ height: "391px", borderRadius: "24px", overflow: "hidden", zIndex: "3" }}>
              <Map position={position}/>
            </div>

            {/* Інформація про місцезнаходження */}
            <div className="location__info info-location">
                <VisitUs /> 
                <OpeningHours />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Location
