import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      suggestedDelay:100,
      numOfChairs:100,
      baseDelay:100,
      delayAmt:100,
      baseChairs:100
    }
  }

  handleChairs =(event) =>{
    
    this.setState({numOfChairs: event.target.value})
    console.log("in handleChairs " , this.state.numOfChairs)
   
    };

    runSimulation =(event) =>{
      console.log("in runSimulation")
     
      };

    handleDelay =(event) =>{
      this.setState({delayAmt: event.target.value})
      console.log("in handledelay " , this.state.delayAmt)
      };

  
    handleSingleStep =(event) =>{
      console.log("in singlestep")
      };

      handleReset =(event) =>{
        this.setState({delayAmt: this.state.baseDelay} )
        this.setState({numOfChairs: this.state.baseChairs} )
        console.log("in reset")
        };
  
  
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
              <input type="text" onChange={this.handleChairs} id="chairCount" value={this.state.numOfChairs}/>
              <label className="labelCopy">Chairs</label>
            </div>
   
      
      <div >
        <button className="runBtn"onClick={this.runSimulation}>Run simulation </button>
        <input type="text"  id="delay" onChange={this.handleDelay} value={this.state.delayAmt}/>
          <label className="labelCopy">Ms</label>
      </div>
      <div>
            <button  onClick={this.handleSingleStep}>Single Step</button>
            <button className="removeBtn" onClick={this.handleReset}>Reset</button>
      </div>

          
        </header>
      </div>
    );
  }
}

export default App;
