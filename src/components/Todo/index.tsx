import React, { useState } from 'react'
import TextField from './TextField'
import TodoStatus from './model'
import TodoList from './TodoList'

const ToDO = () => {
  const [todo, setTodo] = useState<string>('')
  const [todoStatus, setTodoStatus] = useState<TodoStatus[]>([])
  console.log("todo", todoStatus);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodoStatus([...todoStatus, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  return (
    <div>
      <TextField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todoStatus={todoStatus} setTodoStatus={setTodoStatus}/>
    </div>
  )
}

export default ToDO