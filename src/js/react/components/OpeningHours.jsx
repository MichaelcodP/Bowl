import React from 'react'

const OpeningHours = () => {
    const schedule = [
        { day: 'Monday', time: '11:00 am - 2:30 pm' },
        { day: 'Tuesday', time: '11:00 am - 2:30 pm' },
        { day: 'Wednesday', time: '11:00 am - 2:30 pm' },
        { day: 'Thursday', time: '11:00 am - 2:30 pm' },
        { day: 'Friday', time: '11:00 am - 2:30 pm' },
        { day: 'Saturday', time: 'Closed' },
        { day: 'Sunday', time: 'Closed' },
    ];

  return (
    <div className="info-location__opening-hours opening-hours">
        <h4 className="opening-hours__title">Opening hours</h4>
        <div className="opening-hours__shedule">
            <ul className="opening-hours__days">
                { schedule.map((item, index) => 
                    <li key={index} className="opening-hours__item opening-hours__item--days">{item.day}</li>
                )}
            </ul>
            <ul className="opening-hours__clock">
                { schedule.map((item, index) => 
                    <li key={index} className="opening-hours__item opening-hours__item--clock">{item.time}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default OpeningHours
