import React from 'react'
import TodoItem from '../TodoItem'
import '../../Styles/Completed.css'
import { MdOutlineDelete} from "react-icons/md";
import { myTodoContext } from '../../Context/TodoContext';
import { useContext } from 'react';


const CompletedTask = () => {

// create and empty array to collect the completed todos
const completedTodo = []

// get the list of todos from context using useContext hook;
const {todos, toggleTodo, removeTodo} = useContext(myTodoContext);

// loop through the todos list and push the completed todos to the completedTodo empty array
for (let i = 0; i < todos.length; i++) {
    const currentTodo = todos[i];
    if (currentTodo.status === true) {
        completedTodo.push(currentTodo);
    }
    
}

return (

    <>
        <div>

            <div className="completed_container">

                {completedTodo.length == 0 ? <h1 className='noTask'> Your have no completed task </h1> :

                    completedTodo.map((todo) => (

                        todo.status ?

                        <div className="completed_checkbox" key={todo.id}>

                            <TodoItem  todo={todo} handleToggleTodo={() =>toggleTodo(todo.id)}></TodoItem>

                            <MdOutlineDelete onClick={() => removeTodo(todo.id)} className='icon'></MdOutlineDelete>

                        </div> : null
                        
                    ))
                }

            </div>

        </div>
    </>
)
}

export default CompletedTask