import React, { Component } from 'react';
import style from './ToDoList.module.css'
import className from 'classnames'


class TodoListItem extends Component {
    componentDidMount() {
        this.props.onEdit('niloofar');
    }

    render() {
                return(


                    
            <li style={{display: "flex", flexDirection : "row", flexWrap: "wrap", alignContent: "space-around", width: "300px"}}>
                <div>
                    <button className={className(style.eddit_btn, {testClass : false})} onClick={this.props.onToggle} style={{marginRight : "5px"}}>
                        {this.props.done ? 'Done' : 'Un-Done'}
     </button>
                        <button className={style.eddit_btn} style={{marginRight : "5px"}}>Edit</button>
                        <button className={style.eddit_btn} onClick={this.props.onDelete} style={{marginRight : "5px"}}>Delete</button>
                </div>
                <div style={{marginLeft: "auto", textDecoration: this.props.done ? 'none' : 'line-through'}}>{this.props.name}</div>
            </li>
        )
    }
}

export default TodoListItem;

