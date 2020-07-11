import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import ToDoList from './ToDoList';
import Counter from './counter';
import HookExample from './testHooks';
import MouseTracker from './mouseTracker';

class App extends Component {
  state = {
    showTimer : false,
    value : 0
  }

  componentDidMount() {
    //==========================================================================
    // setTimeout(()=>{
    //   this.setState(
    //     {
    //       showTimer : true,
    //     }
    //   )
    // },3000);
    //==========================================================================
    // setInterval(() => {
    //   this.setState(
    //     {
    //       showTimer : !this.state.showTimer,
    //     }
    //   )
    // }, 5000);
    //==========================================================================
  }

  render() {
    return(
      <div className="App">
      <ToDoList buttonName="Add Todos List"></ToDoList>
      {/* {this.state.showTimer ? <Timer></Timer>: null} */}
      <Timer></Timer>
       <Counter min={12} max={20}></Counter>
       <HookExample></HookExample>
       <MouseTracker></MouseTracker>
     </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <ToDoList buttonName="Add Todos List"></ToDoList>
//       <Timer></Timer>
//       <Counter></Counter>
//     </div>
//   );
// }

export default App;
