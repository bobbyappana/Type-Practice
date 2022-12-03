import React from 'react'
import { Interface } from 'readline'
import TodoStatus from './model'
import TodoCard from './TodoCard'
interface Props {
    todoStatus: TodoStatus[],
    setTodoStatus: React.Dispatch<React.SetStateAction<TodoStatus[]>>
}
const TodoList = ({ todoStatus, setTodoStatus }: Props) => {
    return (
        <div>
            {todoStatus.map((todos, index) => <TodoCard todos={todos}/>)}
        </div>
    )
}

export default TodoList