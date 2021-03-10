import React, { useState, useEffect } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../services/todosService';
import './Todos.css';
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, [])
    function createItem(newItem) {
        newItem.completed = false;
        createTodo(newItem).then((data) => {
            setTodos([...todos, data]);
        });
    }
    function toggleItem(id) {
        const todo = todos.find((t) => t.id === id);
        const newTodo = { ...todo, completed: !todo.completed };
        updateTodo(newTodo).then(() => {
            setTodos(todos.map((todo) =>
                todo.id !== id ? todo : newTodo
            ));
        });
    }
    function deleteItem(id) {
        deleteTodo(id);
        setTodos(todos.filter((item) => item.id !== id));
    }
    return (
       <>
           <h1>My Todos</h1>
           <TodoList todos={todos} onToggle={toggleItem} onDelete={deleteItem} />
           <TodoForm onSave={createItem}/>
       </>
    );
}

export default Todos;
