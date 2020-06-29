import React, { Component, useState } from 'react';
import style from './counter.module.css'

// class Counter extends Component {
//     state = {
//         value : 0,
//     };

//     static defaultProps = {
//         min: -Infinity,
//         max: Infinity,
//     }

//     // ***************************************************************************
//     // static getDerivedStateFromProps(nextProps, state) {
//     //     if(state.value < nextProps.min) {
//     //         return {
//     //             value : nextProps.min,
//     //         };
//     //     } else if(state.value > nextProps.max) {
//     //         return {
//     //             value : nextProps.max,
//     //         };
//     //     } else {
//     //         return null;
//     //     }
//     // }
//     // ***************************************************************************
 

//     //اگر استیتی که میخواهیم ست کنیم به حالت قلب وابسته باشد، به ست استیت تابع ورودی می دهیم و از پرواستیت استفاده می کنیم.
//     increment = () => {
//         this.setState( prevState => {
//             return { 
//                     value : Math.min( this.props.max, prevState.value + 1)
//                 };
//             }
//         );
//     }

//     decrement = () => {
//         this.setState( prevState => {
//             return {
//                 value : Math.max( this.props.min, prevState.value - 1)
//             };
//         });
//     }

//     render() {
//         return(
//             <div className={style.counter}>
//             <h2>Counter</h2>
//             <hr></hr>
//             <p className="style.number">{this.state.value}</p>
//             <button onClick={this.increment} className={style.button}>Increment</button>
//             <button onClick={this.decrement} className={style.button}>Decrement</button>
//             </div>
//         );
//     }
// }

// export default Counter;

function Counter(props) {
    let [value, setValue] = useState(0);
    let increment = () => {
        setValue(value + 1);
    }
    
    let decrement = () => {
        setValue(value - 1);
        }
    if(props.min > value) {
        setValue(props.min);
    } else if(props.max < value){
        setValue(props.max);
    }

    return(
        <div className={style.counter}>
            <h2>Counter</h2>
            <hr></hr>
            <p className="style.number">{value}</p>
            <button onClick={increment} className={style.button}>Increment</button>
            <button onClick={decrement} className={style.button}>Decrement</button>
        </div>
    );
}

export default Counter;
