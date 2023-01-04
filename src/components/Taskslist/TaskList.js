import React from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'

const Tasklist = () => {
  const todo =useSelector(state=>state.todo)
  return (
    <div>
        <div className="row mx-1 px-5 pb-3 w-80">
          <div className="col mx-auto">
          {todo.map((el)=><Task 
         
        el={el}/>)}
            
          </div>
        </div>
       
    </div>
  )
}

export default Tasklist