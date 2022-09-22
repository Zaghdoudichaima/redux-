import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleDone } from '../redux/actions/todoActions'
import Edittodo from './Edittodo'

function Task({todo}) {
    const dispatch=useDispatch();
    const handleDelete=()=>{
        if(window.confirm('Are you sure!')){
            dispatch(deleteTodo(todo.id))
        }
    }
  return (
    <div style={{display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"50%",
    margin:"50px auto"
    }}>
        <p style={{textDecoration:todo.isDone ? "line-through" : "none"}}>{todo.text}</p>
        <Edittodo todo={todo}/>
        <Button variant='success' onClick={()=>dispatch(toggleDone(todo.id))}>Done</Button>
        <Button variant='danger' onClick={handleDelete}>Delete</Button>
    </div>
  )
}

export default Task