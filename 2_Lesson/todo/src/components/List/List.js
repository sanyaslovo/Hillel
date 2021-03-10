import React, {Component} from 'react';
import './List.css';
import Task from "../Task/Task";

class Todos extends Component {
    render() {
        return (
           <>
               <h1>My Todo Todos</h1>
               <ul className="List">
                   { this.props.list.map((todo, key) => <Task key={key} todo={todo} />) }
               </ul>
           </>
        );
    }
}

export default List;
