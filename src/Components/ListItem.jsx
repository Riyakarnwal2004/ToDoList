import { useState } from "react";

function TodoList({value,indexNo,todolist,settodoslist}){
  let [status,setstatus]=useState(false);
  let deleteRow=()=>{
    let finaldata=todolist.filter((v,i)=>i!=indexNo);
    settodoslist(finaldata)
  }
  let checkstatus=()=>{
   setstatus(!status)
  }
  return(
    <li  className={(status)? 'complete-todo':''} onClick={checkstatus}>{indexNo+1}  {value}<span onClick={deleteRow}>&times;</span></li>
  )
}
export default TodoList;