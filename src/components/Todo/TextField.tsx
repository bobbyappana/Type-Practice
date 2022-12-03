import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAddTodo: (e: React.FormEvent) => void;
}
const TextField = ({ todo, setTodo, handleAddTodo }: Props) => {

    return (
        <div>
            <form className='form_input' onSubmit={handleAddTodo}>
                <label>
                    <input type="text" style={{ display: "flex" }}
                        className='input_field'
                        value={todo}
                        onChange={(e) => { setTodo(e.target.value) }} />
                    <input type="text"
                        className='input_field' style={{ visibility: 'hidden' }}
                        value={todo}
                        onChange={(e) => { setTodo(e.target.value) }} />
                    <input type="text"
                        className='input_field' style={{ display: 'none ' }}
                        value={todo}
                        onChange={(e) => { setTodo(e.target.value) }} /><br />
                    <button type='submit' className='input_button'>Go</button>
                </label>
            </form>
        </div>
    )
}

export default TextField