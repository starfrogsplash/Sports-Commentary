import React, { Component } from 'react';

class App extends Component {

   data = {
      '12' : "Dier goes into the books with his first yellow card",
      '14' : "Kane is desperate to catch liverpool's sala as he runs away from him",
      '18' : `Now John gets a booking and the opposing team have a free kick
            but Mike tackled him aggressively
            Now John takes the penalty`,
      '21' : "First goal is scored by Manchester United, shots fired!",
      '27' : "2nd goal is scored by Liverpool Fc, shots fired!",
      '30' : "Dier goes into the books with his first yellow card",
   }
   
  render() {
    return (
      <div >
          <h2 className= "title"> Live Commentary </h2>
          <div className= "container">
            <div className = "line" />
                  {Object.keys(this.data).map(key => (
                      <div key={key} className="data-container" >
                              <div className= "circle"> {key} </div> 
                          <div className="text"> {this.data[key]} </div>
                      </div>
                    ))
                  }
            </div>

        <style jsx>{`

        .title{
          margin: 50px 10px 50px 20px;
          color: rgb(56, 71, 128);
          text-decoration: underline;
          font-size: 40px;
        }

          .container {
            display: flex;
            flex-direction: column;
            height: 400px;
            width: 400px;
            margin: 0 10px 0 10px;
        }
          .data-container{
            display: flex;
            align-items: center;
            margin: 0 0 20px 0;
          }

          .text {
            box-shadow: 5px  5px  10px rgba(0,0,0,0.5);
            background-color:  rgb(220, 223, 235);
            color: rgb(56, 71, 128);
            padding: 10px;
            border-radius: 5px;
          }

          .circle{
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 0 0 30px; /* flex-grow, flex-shrink, flex-basis force it to go to specific space based on parent */
            border-radius: 50%;
            height: 30px;
            box-shadow: 3px  3px  10px rgba(0,0,0,0.5);
            margin-right: 10px;
            font-size: 13px;
            color: rgb(56, 71, 128);
            background-color: rgb(160, 175, 233);
          }

          .line {
            margin-top: 10px;
            position: absolute; /* force it to go to specific space based on parent */
            z-index: -1;
            box-sizing: border-box; /* this behavier never allows, bp to be more than width*/
            width: 18px;
            border-right: solid 4px blue;
            height: 100%;
          }
       
        `
        }
        </style>
      </div>
    );
  }
}

export default App;
