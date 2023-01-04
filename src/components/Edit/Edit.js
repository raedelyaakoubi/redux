import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { EditTask } from "../../redux/Action/Action";
function Edit() {
  const obj = useParams();
  const info =useSelector(state=>state.todo.find(el=>el.id==obj.id));
  const [editdesc, seteditDesc] = useState(info.description);
  const [edituser, seteditUser] = useState(info.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
   
    dispatch(EditTask(editdesc, edituser,obj.id));
  };
  return (
    <div>
      <input
        className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
        type="text"
        placeholder="Add description "
        onChange={(e) => seteditDesc(e.target.value)}
        value={editdesc}
      />
      <input
        className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
        type="text"
        placeholder="Add user"
        value={edituser}
        onChange={(e) => seteditUser(e.target.value)}
      />
      <Link to="/">
        <button
          className="btn btn-outline-success"
          onClick={handleClick}
        >
          save
        </button>
      </Link>
    </div>
  );
}

export default Edit;