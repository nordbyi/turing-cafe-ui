import React from "react";
import './Card.css'

const Card = ({reservation}) => {
  return (
    <div id={reservation.id} className='card'>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of Guests: {reservation.number}</p>
      <button className='button'>Cancel</button>
    </div>

  )
}

export default Card