import React from 'react'

import styles from './Features.module.css';
import calendar from '../img/icon-calendar.svg';
import reminders from '../img/icon-reminders.svg';
import todo from '../img/icon-todo.svg';
import planning from '../img/icon-planning.svg';
const Features = () => {
  return (
    <div className={styles.container}>
        <ul>
            <li> <img src={todo} alt="" />  Todo List</li>
            <li> <img src={calendar} alt="" />Calendar</li>
            <li> <img src={reminders} alt="" />Reminders</li>
            <li> <img src={planning} alt="" />Planning</li>
        </ul>
    </div>
  )
}

export default Features