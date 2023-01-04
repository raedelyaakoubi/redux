import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddInital } from "../../redux/Action/Action";
const Add = () => {
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(AddInital(desc, user));
  };
  return (
    
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add description "
                onChange={(e) => setDesc(e.target.value)}
              />
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add user"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                Due date not set
              </label> 
         </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <form onSubmit={handleSubmit}>
              <button  className="btn btn-primary">add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Add;