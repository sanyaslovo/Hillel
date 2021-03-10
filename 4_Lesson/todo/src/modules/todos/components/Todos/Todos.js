import React from 'react';
import './Todos.css';
import ListItem from "../ListItem/ListItem";

function List({ list }) {
    return (
       <>
           <h1>My Todo List</h1>
           <ul className="List">
               { list.map((todo, key) => <ListItem key={key} todo={todo} />) }
           </ul>
       </>
    );
}

export default List;
