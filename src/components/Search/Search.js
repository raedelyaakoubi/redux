import React from 'react'
import { useDispatch } from 'react-redux'
import { searchTodo } from '../../redux/Action/Action'

const Search = () => {
const dispatch=useDispatch()
  return (
    <div className="row m-1 p-3 px-5 justify-content-end">
    <div className="col-auto d-flex align-items-center px-1 pr-3">
      <label className="text-secondary my-2 pr-2 view-opt-label">
        Search 
      </label>
     <input type="text" onChange={(e)=>dispatch(searchTodo(e.target.value))} className='form-control form-control-lg border-0 add-todo-input bg-transparent rounded' />
      
    </div>
  </div>
  )
}

export default Search