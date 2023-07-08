import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { myTodoContext } from '../../Context/TodoContext'
import TodoItem from '../TodoItem'
import { BsPencilSquare} from "react-icons/bs";
import '../../Styles/Active.css'

const Alltask = () => {

const iconStyle = {
    color: "#BDBDBD",
    fontSize: "22px",
    cursor: "pointer"
}

// get the list of todos from context using useContext hook;
const {todos, toggleTodo, addTodo, handleEditChange} = useContext(myTodoContext)

const [title, setTitle] = useState('')

const handleTitleChange = (e) => {
    setTitle(e.target.value)
}

// define a function to addTodo

const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo ={
    id: nanoid(),
    title: title,
    status: false,
    }

    addTodo(newTodo)
    setTitle('')
}

// define state of editTodo object;

const [editTodo, setEditTodo] = useState(null);

const startEdit = (id) => {setEditTodo(id)};

const finishEdit = () => {setEditTodo(null)};

return (

    <>
        <div className='AllTaskcontainer'>

            <form onSubmit={handleAddTodo}>

                <div className="taskdetails">

                    <input type='text' value={title} onChange={handleTitleChange} placeholder='add new task' maxLength={25} required/> 
                    <button> Add </button> <br></br>

                </div>

            </form>

            <div  className="checkbox">

                { todos.length == 0 ? <h1 className='noTask'> Task list is empty </h1> :

                    todos.map((todo) => (

                    <div className='container' key={todo.id} >

                        <div className='todoItem'>

                            <input type="checkbox" checked={todo.status} onChange={() => toggleTodo(todo.id)} />

                            {editTodo === todo.id ? 

                                <form onSubmit={finishEdit}>

                                    <input type="text" value={todo.title} onChange={(e) => handleEditChange(e, todo.id)} required/>
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

export default Alltask