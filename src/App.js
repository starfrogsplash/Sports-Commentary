import React, { Component } from 'react';
import './App.css';

class App extends Component {

   data = {
      '12' : "Dier goes into the books with his first yellow card",
      '14' : "Kane is desperate to catch liverpool's sala as he runs away from him",
      '18' : "Now Ali gets a booking and the opposing team have a free kick",
      '21' : "First goal is scored by Manchester United, shots fired!"
   }
   
  render() {
 
    return (
      <div className="App">
        <p className="App-intro"> Live Commentary </p>
        {Object.keys(this.data).map(key => (
          <div>
            <div> time: {key} </div> 
            <div> : {this.data[key]} </div>
          </div>
        ))
        }
      </div>
    );
  }
}

export default App;
