import React from 'react'
import TodoStatus from './model'

const TodoCard = ({ todos }: any) => {
    const handleDelete = (id: number): any => {
        if (todos.id !== id){
            
        }
    }
    return (
        <div className='d-flex'>
            <span>{todos.todo}</span><br />
            <span>{todos.id}</span>
            <button onClick={handleDelete(todos.id)}>Delete</button>
        </div>
    )
}

export default TodoCard