import React, {useState} from "react";
import './Form.css'
import { postData } from "../apiCalls";

const Form = ({addRes}) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')

  const submitHandler = (event) => {
    event.preventDefault(event)
    if(!validateForm()) return

    const postObj = {
      id: Date.now(), // remove when posting
      name,
      date,
      time,
      number: +guests
    }
    // postData(postObj)
    addRes(postObj)
    clearInputs()
  }

  const validateForm = () => {
    if(!name || !date || !time || !guests) {
      return false
    }
    return true
  }

  const clearInputs = () => {
    setName('')
    setDate('')
    setTime('')
    setGuests('')
  }

  return (
    <form className='form' onSubmit={event => submitHandler(event)}>
      <input className='name' value={name} placeholder='Name' onChange={event => setName(event.target.value)}></input>
      <input className='date' value={date} placeholder='Date (mm/dd)' onChange={event => setDate(event.target.value)}></input>
      <input className='time' value={time} placeholder='Time' onChange={event => setTime(event.target.value)}></input>
      <input className='guests' value={guests} placeholder='Number of Guests' onChange={event => setGuests(event.target.value)}></input>
      <button className="submitButton">Make a Reservation</button>
    </form>
  )
}

export default Form