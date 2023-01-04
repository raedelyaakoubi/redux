import {Add,DeleteTask,SEARCH, CHECKED, EDIT} from "../Const/Const"
const initialState={todo:[
    { description: "hello", user: "user1" ,id:1,isDone:true},
    { description: "hi", user: "user2",id:2,isDone:false},
    { description: "welcome", user: "user3",id:3,isDone:false},
]}

export const todoReducer=(state=initialState,action)=>{

switch (action.type) {
case Add:
    return {...state,todo:[...state.todo,{...action.payload,id:state.todo.length+1,isDone:false}]}  
case SEARCH:
    return {...state,todo:[...state.todo.filter((el)=>el.description.toLowerCase().includes(action.payload.trim().toLowerCase()))]}
case DeleteTask:
    return {...state,todo:[...state.todo.filter((el)=>el.id!=action.payload)]}   
case CHECKED:
    return {...state,todo:state.todo.map((el)=>el.id==action.payload?{...el,isDone:!el.isDone}:el)}
case EDIT:
    return {...state,todo:state.todo.map((el)=>el.id==action.payload.id?{description:action.payload.editdesc,user:action.payload.edituser,id:action.payload.id,isDone:action.payload.isDone}:el)}
        default:
return state}


}