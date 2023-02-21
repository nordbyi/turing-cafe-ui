import React from "react";
import classes from './Card.module.css'

const Card = ({reservation}) => {
  return (
    <div className={classes.card}>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of Guests: {reservation.number}</p>
      <button className={classes.button}>Cancel</button>
    </div>

  )
}

export default Card