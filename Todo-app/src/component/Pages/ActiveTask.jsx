import React from 'react'
import { useContext } from 'react'
import { myTodoContext } from '../../Context/TodoContext'
import { useState } from 'react'
import { BsPencilSquare} from "react-icons/bs";
import '../../Styles/Active.css'

const ActiveTask = () => {

const iconStyle = {
    color: "#BDBDBD",
    fontSize: "22px",
    cursor: "pointer"
}

// create and empty array to collect the active todos
const activeTodos = []

// get the list of todos from context using useContext hook;

const {todos, toggleTodo, handleEditChange} = useContext(myTodoContext)

// loop through the todos list and push the active todos to the activeTodos empty array

for (let i= 0; i < todos.length; i++) {
    const currentTodo = todos[i];
    if (currentTodo.status === false) {
        activeTodos.push(currentTodo)
    }
}

// define state of editTodo object;

const [editTodo, setEditTodo] = useState(null);

const startEdit = (id) => {setEditTodo(id)};

const finishEdit = () => {setEditTodo(null)};

return (

<>
    <div className='AllTaskcontainer' >

        <div  className="activeContainer">

            { activeTodos.length == 0 ? <h1 className='noTask'> There are no active tasks </h1> :

                activeTodos.map((todo) =>  ( 

                    todo.status ? null :

                    <div className='container' key={todo.id} >

                        <div className='todoItem'>

                            <input type="checkbox" checked={todo.status} onChange={() => toggleTodo(todo.id)} />

                            {editTodo === todo.id ? 

                                <form onSubmit={finishEdit}>

                                    <input type="text" value={todo.title} onChange={(e) => handleEditChange(e, todo.id)} required />
                                    <button> Save </button>

                                </form>

                            :
                                <p style={{ textDecoration: todo.status ? 'line-through' : 'none' }}> {todo.title} </p> 
                            }

                        </div>

                        <BsPencilSquare onClick={() => startEdit(todo.id)} style={iconStyle}></BsPencilSquare> 

                    </div>

                ))
            }

        </div>

    </div>

</>

)

}

export default ActiveTask