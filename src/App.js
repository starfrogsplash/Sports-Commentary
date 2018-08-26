import React, { Component } from 'react';

class App extends Component {

   data = {
      '12' : "Dier goes into the books with his first yellow card",
      '14' : "Kane is desperate to catch liverpool's sala as he runs away from him",
      '18' : "Now Ali gets a booking and the opposing team have a free kick",
      '21' : "First goal is scored by Manchester United, shots fired!"
   }
   
  render() {
 
    return (
      <div >
        <p className="App-intro"> Live Commentary </p>
        <div className="structure">
              {Object.keys(this.data).map(key => (
                  <div key={key} className="content">
                    <div className="circle"> {key} </div> 
                    <div className="text"> {this.data[key]} </div>
                  </div>
                ))
              }
            <div className="line"/>
        </div>
        <style jsx>{`
        .structure {
            display: flex;
            flex-direction: column;
          }

         .line {
          background-color: blue;
          height: 300px;
          width: 30px;
        }

        .content {
          display: flex;
          justify-content: space-between;
        }
        
        .circle {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 50px;
            border: 3px solid;
          }
        
        `
        }

        </style>
      </div>
    );
  }
}

export default App;
