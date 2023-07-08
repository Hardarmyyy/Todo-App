import React from 'react'
import { createContext } from "react";
import { useState } from 'react';

export const myTodoContext = createContext();

const TodoContext = ({children}) => {

const [todos, setTodos ] = useState([])


const toggleTodo = (id) => {
    const newSetTodos = todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo)
    setTodos(newSetTodos);
};

const addTodo = (newTodo) => {
    setTodos((todos) => { return[...todos, newTodo ]})
}

const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
}

const handleEditChange = (e, id) => {
    const updatedTodo = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                title: e.target.value,
            };
        }
        return todo;
    });
    setTodos(updatedTodo);
};

// store all of the function in a value variable 

const value = {todos, toggleTodo, addTodo, removeTodo, handleEditChange}


return (

    <myTodoContext.Provider value={value}>
        {children}
    </myTodoContext.Provider>
)
}

export default TodoContext