import React, { useState, useEffect } from 'react';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';
import getData from '../apiCalls.js';
import './App.css';

const App = () => {
    const [reservations, setReservations] = useState([])

    useEffect(() => {
      getData(setReservations)
    }, [])

    const addReservation = (newReservation) => {
      setReservations([...reservations, newReservation])
    }

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservs={reservations}/>
        </div>
      </div>
    )
}

export default App;
