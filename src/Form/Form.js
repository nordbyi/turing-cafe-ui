import React, {useState} from "react";

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

    addRes(postObj)
    clearInputs()
  }

  const validateForm = () => {
    if(!name || !date || !time || !guests) {
      // error state change?
      return false
    }
    return true
  }

  const clearInputs() => {
    setName('')
    setDate('')
    setTime('')
    setGuests('')
  }

  return (
    <form onSubmit={event => submitHandler(event)}>
      <input value={name} placeholder='Name' onChange={event => setName(event.target.value)}></input>
      <input value={date} placeholder='Date (mm/dd)' onChange={event => setDate(event.target.value)}></input>
      <input value={time} placeholder='Time' onChange={event => setTime(event.target.value)}></input>
      <input value={guests} placeholder='Number of Guests' onChange={event => setGuests(event.target.value)}></input>
      <button>Make a Reservation</button>
    </form>
  )
}

export default Form