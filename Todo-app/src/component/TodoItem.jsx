import React from 'react'
import '../Styles/TodoItem.css'


const TodoItem = ({ todo, handleToggleTodo}) => {

return (
    <>
        <div className='todoItem'>

            <input type="checkbox" checked={todo.status} onChange={handleToggleTodo} />

            <p style={{ textDecoration: todo.status ? 'line-through' : 'none' }}> {todo.title} </p> 

        </div>

    </>
)
}

export default TodoItem