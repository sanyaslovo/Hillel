import React, {Component} from 'react';
import './List.css';
import Task from "../Task/Task";

class List extends Component {
    render() {
        return (
           <>
               <h1>My Todo List</h1>
               <ul className="List">

                   { this.props.list.map((todo, key) => <Task key={key} todo={todo} />) }
               </ul>
           </>
        );
    }
}

export default List;
