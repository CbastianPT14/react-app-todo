import React from 'react'
import {TbTrashOff} from 'react-icons/tb'
import { TodoUpdate } from './TodoUpdate'

export const TodoItem = ({
  todo, 
  handleUpdateTodo, 
  handleDeleteTodo, 
  handleCompleteTodo,
}) => {
  return (
    <li>
        <span
         onClick={() => handleCompleteTodo(todo.id)}
        >
            <label htmlFor="" className='container-done'></label>
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo}/>
        <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
          <TbTrashOff /></button>
    </li>
  )
}
