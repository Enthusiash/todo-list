import React, { useState } from 'react'

import '../Style/Todo.css'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const Todo = () => {
    const [dateTime, setDateTime] = useState('');

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
    };

    const locales = {
        // "en-US": require('date-fns/locale/en-US')
      }
      const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
      })
      const events = [
        {
          title: "Test 1",
          start: new Date(2023, 4, 0),
          end: new Date(2023, 4, 0) 
        },
      ]
  return (
    <div className="authform-container">

      <div>
      <h2>To-Do List React</h2>
      </div>

        <div className="calendarDiv">
        <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, width: 700, margin: "50px", display: "flex", border: "1px solid black", }}
      />
        </div>

      <div className="todoDiv">
      <form>
      <input type="text" className="name" id="" placeholder='Enter To-Do' required />

      <input type="datetime-local" id="datetime" name="datetime" value={dateTime} onChange={handleDateTimeChange} required />

      <button id="button">Add</button>
      </form>
      </div>
      </div>
  )
}

export default Todo
