import React from "react";
import Card from "../Card/Card";
import classes from './Reservations.module.css'

const Reservations = ({reservs}) => {
  const cards = reservs.map(reserv => {
    return <Card key={reserv.id} reservation={reserv}/>
  })

  return (
    <div className={classes.container}>
      {cards}
    </div>
  )
}

export default Reservations