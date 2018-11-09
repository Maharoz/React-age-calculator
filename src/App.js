import React, { Component } from 'react';
import './App.css';
import DatePicker from './containers/DatePicker';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
    
      <div className="App">
        <div class="center">
      <img src={logo} className="App-logo" alt="logo"/>
    </div>
         <DatePicker />
      </div>
    );
  }
}

export default App;
