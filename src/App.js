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
            <div className="structure">
            <div className="line"/>
                  {Object.keys(this.data).map(key => (
                      <div key={key} className="content">
                            <div className="circle-container">
                              <div className="circle"> {key} </div> 
                            </div>
                          <div className="text"> {this.data[key]} </div>
                      </div>
                    ))
                  }
            </div>
        <style jsx>{`
  
        .title{
          margin: 50px 10px 10px 10px;
          color: rgb(56, 71, 128);
          text-decoration: underline;
          font-size: 40px;
        }

        .structure {
            display: flex;
            flex-direction: column;
            height: 100vh;
            margin: 10px;
            top: 200px;
          }

         .structure ,.line{
          position: absolute;
         } 

          .content {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

         .line {
          border-right: 5px solid blue;
          box-sizing: border-box;
          height: 100%;
          width: 24px;
          top:6px;
        } 

        .text{
          margin-left: 10px;
          border-radius: 10px;
          box-shadow: 5px  5px  10px rgba(0,0,0,0.5);
          padding: 10px;
          background-color:  rgb(220, 223, 235);
          color: rgb(56, 71, 128);
        }

        .circle-container{
          display: flex;
          align-items: center;
          justify-content: center;
        }
       
        .circle {
            margin: 0 10px 10px 0;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 3px  3px  10px rgba(0,0,0,0.5);
            height: 40px;
            width: 40px;
            border-radius: 50px;
            color: rgb(56, 71, 128);
            background-color: rgb(160, 175, 233);
          }

        `
        }
        </style>
      </div>
    );
  }
}

export default App;
