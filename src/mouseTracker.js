import React, { Component } from "react";
import style from "./mouseTracker.module.css";
import classNames from "classnames";

export class MouseTracker extends Component {
  // square = null;
  square = React.createRef();
  state = {
    mouseX: 0,
    mouseY: 0,
    squareX: 0,
    squareY: 0,
    isMouseDowne: false,
    dots: [],
  };

  componentDidMount() {
    // let {offsetLeft, offsetTop} = this.square.current
    this.setState({
      /////////////////////////////////
      // mouseX: offsetLeft,
      // mouseY: offsetTop,
      // squareX: offsetLeft,
      // squareY: offsetTop,
      /////////////////////////////////
      // mouseX: this.square.offsetLeft,
      // mouseY: this.square.offsetTop,
      // squareX: this.square.offsetLeft,
      // squareY: this.square.offsetTop,
      ///////////////////////////////
      mouseX: this.square.current.offsetLeft,
      mouseY: this.square.current.offsetTop,
      squareX: this.square.current.offsetLeft,
      squareY: this.square.current.offsetTop,
    });
  }

  handleMouseMove = (event) => {
    this.setState(
      {
        // پیج به اسکرول وابسته نیست!
        mouseX: event.pageX,
        mouseY: event.pageY,
      },
      () => {
        if (this.state.isMouseDowne) {
          this.addDot(
            this.state.mouseX - this.state.squareX,
            this.state.mouseY - this.state.squareY
          );
        }
      }
    );
  };

  handleMouseDowne = (event) => {
    this.setState({
      isMouseDowne: true,
    });
  };

  handleMouseUp = (event) => {
    this.setState({
      isMouseDowne: false,
    });
  };

  handleMouseLeave = (event) => {
    this.setState({
      isMouseDowne: false,
    });
  };

  handleMouseEnter = (event) => {
    if (event.buttons === 1) {
      this.setState({
        isMouseDowne: true,
      });
    }
  };

  addDot = (x, y) => {
    this.setState((prevState) => {
      return {
        dots: [...prevState.dots, { x, y }],
      };
    });
  };

  render() {
    return (
      <div className={style.mouseTracker}>
        <h2>Mouse Tracker</h2>
        <hr
          style={{
            width: "350px",
          }}
        ></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ marginRight: "30px" }}>
            X: {this.state.mouseX - this.state.squareX}
          </p>
          <p>Y: {this.state.mouseY - this.state.squareY}</p>
        </div>
        <div
          // ref={(square) => (this.square = square)}
          ref={this.square}
          className={style.tracker}
          onMouseMove={this.handleMouseMove}
          onMouseDown={this.handleMouseDowne}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
        >
          {this.state.dots.map((dot) => (
            <div
              className={style.draw}
              style={{
                left: dot.x-3,
                top: dot.y-3,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default MouseTracker;

// رنگ
// سایز
// کلیک شد بکشه
