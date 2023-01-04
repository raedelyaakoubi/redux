import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checked, deletetodo } from "../../redux/Action/Action";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(deletetodo(el.id));
  };
  const statusTask = () => {
   dispatch(checked(el.id));
  
  };
  return (
    <div className="row px-3 align-items-center todo-item editing rounded">
      <div className="col-auto m-1 p-0 d-flex align-items-center">
        <h2 className="m-0 p-0">
         
          <input
            checked={el.isDone}
            onClick={() => statusTask(el.isDone) }
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
        </h2>
      </div>
      <div className="col px-1 m-1 d-flex align-items-center">
        <input
          type="text"
          readOnly
          value={el.description}
          title="Sign up for online course"
        />
       
      </div>
      <div className="col-auto m-1 p-0 px-3 d-none"></div>
      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          <h5 className="m-0 p-0 px-2 edit-icon">
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteTask(el.id)}
            ></i>
            <Link to={`/Edit/${el.id}`}>
              <button className="btn btn-outline-success">edit </button>
            </Link>
          </h5>
         
        </div>
        <div className="row todo-created-info">
          <div className="col-auto d-flex align-items-center pr-2">
            <label className="date-label my-2 text-black-50">{el.user}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;