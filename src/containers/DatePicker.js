import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
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
    const month =diffDuration.months();
    const days = diffDuration.days();
    const hours = diffDuration.hours();
    const minutes = diffDuration.minutes();
    const seconds = diffDuration.seconds();
    return (
      <div>

        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <h3>Choose a day</h3>}
        <div className="Result">

        <DayPickerInput onDayChange={this.handleDayChange} />
        </div>
        
        <h3 className="Result">Type your birthday in YYYY-MM-DD format</h3>
        <h1 className="Result">Your Age is {year} years {month} months {days} days  {hours} hours  {minutes} minutes {seconds} seconds </h1>

   <div class="footer Result">
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <p>
                    Developed with love by <a target="_blank" href="https://sites.google.com/view/porfoliomaharoz/home">Maharoz Alam</a> (<a target="_blank" href="https://sites.google.com/view/porfoliomaharoz/home">Mugdho)</a>
                </p>
                <p>
                    <a target="_blank" href="https://github.com/Maharoz/React-age-calculator">Get Source Code</a>
                </p>
            </div>
            <div class="col-md-6 text-right">
                {/* <p>
                    <a target="_blank" href="https://github.com/Maharoz/React-age-calculator">Get Source Code</a>
                </p> */}
            </div>
        </div>
    </div>
</div>
      </div>
    );
  }
}
export default DatePicker;