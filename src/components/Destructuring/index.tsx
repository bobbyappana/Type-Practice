import React, { useState } from 'react'

const AddTodo = () => {

    const [todo, setTodo] = useState < {}[] > ([])
    console.log(todo)
    const onsubmit = () => {
        // setTodo([...todo , { text: "name", age: 23 }])
        setTodo(prevState => [prevState, { text: "name", age: 23 }])
    }
    return (
        <div>
            <button onClick={onsubmit}>Click me</button>
        </div>
    )
}

export default AddTodo