import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';

 class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
    // console.log(day.getTime());
  }
  render() {
    const { selectedDay } = this.state;
    const startDate = moment(this.state.selectedDay);
    const timeEnd =moment();
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);
    // console.log("Total Duration in millis:", diffDuration.asMilliseconds());
    // console.log("Years:", diffDuration.years());
    // console.log("Days:", diffDuration.days());
    // console.log("Hours:", diffDuration.hours());
    // console.log("Minutes:", diffDuration.minutes());
    // console.log("Seconds:", diffDuration.seconds());
    const year =diffDuration.years();
    const days = diffDuration.days();
    const hours = diffDuration.hours();
    const minutes = diffDuration.minutes();
    const seconds = diffDuration.seconds();
    return (
      <div>

        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
        <p>Type your birthday in YYYY-MM-DD format</p>
        <h1>Your Age is {year} years  {days} days  {hours} hours  {minutes} minutes {seconds} seconds </h1>
      </div>
    );
  }
}
export default DatePicker;