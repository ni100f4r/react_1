import React, { Component } from "react";
import style from "./mouseTracker.module.css";
import classNames from "classnames";

export class MouseTracker extends Component {
  render() {
    return (
      <div className={style.mouseTracker}>
        <h2>Mouse Tracker</h2>
        <hr
          style={{
            width: "350px",
          }}
        ></hr>
        {/* <div style={{
            border: '2px solid navy',
            width: '400px',
            height: '400px'
        }}></div> */}
      </div>
    );
  }
}

export default MouseTracker;
