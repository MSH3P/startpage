import React from 'react';
import './style.css';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const setDate = () => {
  let date = new Date();
  let month = date.getMonth();
  let day = date.getDate();

  month = monthNames[month];
};

const Clock = () => {
  return (
    <div id="Clock">
      <div id="ClockTop"></div>
      <div id="ClockBottom"></div>
    </div>
  );
};

export default Clock;
