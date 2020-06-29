import React, { Component, useState } from 'react';
import style from './Timer.module.css'

// class Timer extends Component {
//     state = {
//         value: 0,
//     }

//     //=============================================================================
//     intervalID = null;
//     // componentDidMount() {
//     //     this.interval = setInterval(()=>{
//     //         this.setState(
//     //             {
//     //                 value: this.state.value + 1,
//     //             }
//     //         );
//     //     },1000);
//     // }
    
//     // componentWillUnmount() {
//     //     clearInterval(this.interval);
//     // }
//     //=============================================================================

//     start = event => {
//         if(!this.intervalID) {
//             this.intervalID = setInterval(() => {
//                 this.setState(prevState=>{
//                     return {
//                         value : prevState.value + 1
//                     }
//                 });
//             }, 1000);
//         }
//     }

//     pause = event => {
//         if(this.intervalID) {
//             clearInterval(this.intervalID);
//             this.intervalID = null;
//         }
//     }

//     reset = event => {
//         this.pause();
//         this.setState (
//             {
//                 value : 0,
//             }
//         );
//     }

//     render() {
//         return(
//             <div className={style.Timer}>
//                 <h2>Timer</h2>
//                 <hr></hr>
//                 <p>{this.state.value}</p>
//                 <button onClick={this.start} className={style.btn_style}>Start</button>
//                 <button onClick={this.pause} className={style.btn_style}>Pause</button>
//                 <button onClick={this.reset} className={style.btn_style}>Reset</button>
//             </div>
//         );
//     }
// }

let intervalID = null;
function Timer() {
    let [value, setValue] = useState(0);

    let start = () => {
        if(!intervalID) {
            intervalID = setInterval(() => {
                setValue( prevValue => prevValue + 1 );
            }, 1000);
        }
    };

    let pause = () => {
        if(intervalID) {
            clearInterval(intervalID);
            intervalID = null;
        }
    }

    let reset = () => {
        pause();
        setValue (0);
    }

    return(
        <div className={style.Timer}>
            <h2>Timer</h2>
            <hr></hr>
            <p>{value}</p>
            <button onClick={start} className={style.btn_style}>Start</button>
            <button onClick={pause} className={style.btn_style}>Pause</button>
            <button onClick={reset} className={style.btn_style}>Reset</button>
        </div>
    );
}

export default Timer;