import React, { Component } from "react";
import style from "./ToDoList.module.css";
import TodoListItem from "./TodoListItem";
import classNames from "classnames";

// var classNames = require('classnames');
let id = 0;
export class ToDoList extends Component {
  state = {
    todos: [],
    inputValue: "",
    filter: "All",
  };

  setFilter = (filterName) => {
    this.setState({
      filter: filterName,
    });
  };

  getTodos = () => {
    switch (this.state.filter) {
      case "All":
        return this.state.todos;
      case "Dones":
        return this.state.todos.filter((t) => t.done);
      case "Un-Dones":
        return this.state.todos.filter((t) => !t.done);
      default:
        return this.state.todos;
    }
  };

  add = (taskName) => {
    // id++;
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, { name: taskName, done: "false", id: id }],
      };
    });
  };

  handeleAddtoPress = () => {
    if (this.state.inputValue) {
      this.add(this.state.inputValue);
      id++;
      this.setState({
        inputValue: "",
      });
    }
  };

  handeleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  delete = (index) => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos.slice(0, index),
          ...prevState.todos.slice(index + 1),
        ],
      };
    });
  };

  toggle = (index) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((task, i) => {
          if (i === index) return { ...task, done: !task.done };
          else return task;
        }),
      };
    });
  };

  edit = (newName, index) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((task, i) => {
          if (i === index) return { ...task, name: newName };
          else return task;
        }),
      };
    });
  };

  render() {
    return (
      <div className={style.ToDoList}>
        <h2>To Do List</h2>
        <hr></hr>
        <ul className={style.list_style}>
          {this.getTodos().map((task, index) => (
            <TodoListItem
              {...task}
              key={task.id}
              onToggle={() => this.toggle(index)}
              onDelete={() => this.delete(index)}
              onEdit={(newName) => this.edit(newName, index)}
            ></TodoListItem>
          ))}
        </ul>
        <button onClick={this.handeleAddtoPress} className={style.add_btn}>
          {this.props.buttonName}
        </button>
        <input
          className={style.input_style}
          value={this.state.inputValue}
          onChange={this.handeleInputChange}
          type="text"
        ></input>
        <div className={style.btn_group}>
          <p
            style={{
              marginBottom: "8px",
              marginTop: "35px",
              fontSize: "small",
              color: "rgb(56, 41, 56);",
            }}
          >
            Filters
          </p>
          <button
            onClick={() => this.setFilter("All")}
            className={classNames(style.filter_btn, {
              [style.active_btn]: this.state.filter === "All",
            })}
            style={{
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          >
            All
          </button>
          <button
            onClick={() => this.setFilter("Dones")}
            className={classNames(style.filter_btn, {
              [style.active_btn]: this.state.filter === "Dones",
            })}
          >
            Dones
          </button>
          <button
            onClick={() => this.setFilter("Un-Dones")}
            className={classNames(style.filter_btn, {
              [style.active_btn]: this.state.filter === "Un-Dones",
            })}
            style={{
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          >
            Un-Dones
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
