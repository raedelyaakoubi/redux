import React from 'react'
import Add from '../Add/Add'
import Search from '../Search/Search'
import Tasklist from '../Taskslist/TaskList'

function Home() {
  return (
    <div>
        
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        {/* App title section */}
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i className="fa fa-check bg-primary text-white rounded p-2" />
              <u>My Todo-s</u>
            </div>
          </div>
        </div>
        {/* Create todo section */}
        <Add  />
        <div className="p-2 mx-4 border-black-25 border-bottom" />
        {/* View options section */}
       <Search  />
        {/* Todo list section */}
        <Tasklist   />
        
      </div>
      
      
    </div>
  )
}

export default Home