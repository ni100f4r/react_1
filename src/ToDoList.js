import React, {Component} from 'react';
import style from './ToDoList.module.css'
import className from 'classnames'


export class ToDoList extends Component {
    state = {
        todos : [],
        inputValue : '',
        filter : 'All'
    }

    setFilter = (filterName) => {
        this.setState({
            filter: filterName,
        }
        );
    }

    getTodos = () => {
        switch(this.state.filter) {
            case 'All':
                return this.state.todos;
            case 'Dones':
                return this.state.todos.filter(t => t.done);
            case 'Un-Dones':
                return this.state.todos.filter(t => !t.done);
            default:
                return this.state.todos;
        }
    }

    add = taskName => {
        this.setState(prevState => {
            return {
            todos : [...prevState.todos, {name : taskName, done: "false"}]
            }
        });
    }

    handeleAddtoPress = () => {
        if(this.state.inputValue) {
            this.add(this.state.inputValue);
            this.setState(
                {
                    inputValue : ''
                }
            );
        }
    }

    handeleInputChange = event => {
        this.setState(
            {
                inputValue : event.target.value,
            }
        );
    }

    delete = index => {
        this.setState(prevState => {
            return {
            todos : [...prevState.todos.slice(0,index),...prevState.todos.slice(index+1)]
            }
        });
    }

    toggle = index => {
        this.setState(prevState => {
            return {
                todos : prevState.todos.map((task,i) => {
                    if( i== index) return {...task, done : !task.done}
                    else return task
                })
            }
        });
    }

    render() {
        return(
            <div className={style.ToDoList}>
                <h2>To Do List</h2>
                <hr></hr>
                <ul className={style.list_style}>
                    {
                    this.getTodos().map((task, index) => (
                    <li style={{display: "flex", flexDirection : "row", flexWrap: "wrap", alignContent: "space-around", width: "300px"}}>
                        <div>
                        <button className={className(style.eddit_btn, {testClass : false})} onClick={() => this.toggle(index)} style={{marginRight : "5px"}}>
                            {task.done ? 'Done' : 'Un-Done'} 
                        </button>
                        <button className={style.eddit_btn} style={{marginRight : "5px"}}>Edit</button>
                        <button className={style.eddit_btn} onClick={() => this.delete(index)} style={{marginRight : "5px"}}>Delete</button>
                        </div>
                        <div style={{marginLeft: "auto", textDecoration: task.done ? 'none' : 'line-through'}}>{task.name}</div>
                    </li>
                    )
                    )
                    }
                </ul>
                <button onClick={this.handeleAddtoPress} className={style.add_btn}>{this.props.buttonName}</button>
                <input className={style.input_style} value={this.state.inputValue} onChange={this.handeleInputChange} type="text"></input>
                <div className={style.btn_group}>
                    <p style={{marginBottom: "8px", marginTop: "35px", fontSize: "small", color: "rgb(56, 41, 56);"}}>Filters</p>
                    <button onClick={() => this.setFilter('All')} className={style.filter_btn} style={{borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px"}}>All</button>
                    <button onClick={() => this.setFilter('Dones')} className={style.filter_btn}>Dones</button>
                    <button onClick={() => this.setFilter('Un-Dones')} className={style.filter_btn} style={{borderTopRightRadius: "4px", borderBottomRightRadius: "4px"}}>Un-Dones</button>
                </div>
            </div>
        );
    }
}

export default ToDoList;