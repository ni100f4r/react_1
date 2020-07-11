import React, { Component } from "react";
import style from "./ToDoList.module.css";
import className from "classnames";

class TodoListItem extends Component {
  state = {
    editing: false,
    inputValue: "",
  };

  handeldEditPressed = () => {
    this.setState({
      inputValue: this.props.name,
      editing: true,
    });
  };

  handeleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handeldSaveEdit = () => {
    this.props.onEdit(this.state.inputValue);
    this.setState({
      editing: false,
    });
  };

  handeldCancelEdit = () => {
    this.setState({
      editing: false,
      inputValue: "",
    });
  };

  render() {
    return (
      <li
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-around",
          width: "300px",
        }}
      >
        {this.state.editing ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "10px 0px",
            }}
          >
            <button
              className={style.eddit_btn}
              onClick={this.handeldCancelEdit}
            >
              Cancel
            </button>
            <button className={style.eddit_btn} onClick={this.handeldSaveEdit}>
              Save
            </button>
            <input
              className={style.input_style}
              value={this.state.inputValue}
              onChange={this.handeleInputChange}
              type="text"
            ></input>
          </div>
        ) : (
          <>
            <div>
              <button
                className={className(style.eddit_btn, { testClass: false })}
                onClick={this.props.onToggle}
                style={{ marginRight: "5px" }}
              >
                {this.props.done ? "Done" : "Un-Done"}
              </button>
              <button
                className={style.eddit_btn}
                onClick={this.handeldEditPressed}
                style={{ marginRight: "5px" }}
              >
                Edit
              </button>
              <button
                className={style.eddit_btn}
                onClick={this.props.onDelete}
                style={{ marginRight: "5px" }}
              >
                Delete
              </button>
            </div>
            <div
              style={{
                marginLeft: "auto",
                textDecoration: this.props.done ? "none" : "line-through",
              }}
            >
              {this.props.name}
            </div>
          </>
        )}
      </li>
    );
  }
}

export default TodoListItem;
