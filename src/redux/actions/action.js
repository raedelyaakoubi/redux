import {Add,DeleteTask,SEARCH,CHECKED, EDIT} from "../Const/Const";

export const AddInital = (x,y) => {
    return { type: Add, payload: {description:x,user:y} }
}
export const searchTodo= (searchT) => {
    return { type: SEARCH, payload: searchT }
}
export const EditTask = (editdesc,edituser,id) => {
    return { type: EDIT, payload: {editdesc,edituser,id}}
}
export const deletetodo = (idDel) => {
    return { type: DeleteTask, payload: idDel}
}
export const checked = (idCh) => {
    return { type: CHECKED, payload:idCh}
}