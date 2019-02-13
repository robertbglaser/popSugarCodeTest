import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      suggestedDelay:100,
      numOfChairs:100,
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div> 
              <p className="headLine">The 100 Chair Problem</p>
                <p className="bodyCopy">This simulation represents a modified version of the Josephus problem. 
                    Given the inputs of chairs and a timer value, it visualizes the elimination of the participants using 
                    a timer as the delay between eliminations. Additionally you may step through the simulations manually 
                    by using the remove chair button. 
                </p>
              </div> 

            <div>
              <input type="text" onChange="handleChairs()" id="chairCount" placeholder="100" value="100"/>
              <label className="labelCopy">Chairs</label>
            </div>
   
      
      <div >
        <button className="runBtn"onClick="runSimulation()">Run simulation </button>
        <input type="text"  id="delay" onChange="handleDelay()"placeholder="100" value="100"/>
          <label className="labelCopy">Ms</label>
      </div>
      <div>
            <button  onClick="singleStep()">Single Step</button>
            <button className="removeBtn" onClick="reset()">Reset</button>
      </div>

          
        </header>
      </div>
    );
  }
}

export default App;
