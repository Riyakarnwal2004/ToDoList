import { useState } from "react";
import TodoList from "./Components/ListItem";
import "./App.css";

function App() {
  let [todolist, settodoslist] = useState([]);

  let saveTodo = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finaltodolist = [...todolist, toname];
      settodoslist(finaltodolist);
    } else {
      alert("already added");
    }
    event.preventDefault();
  };
  let list = todolist.map((value, index) => {
    return(
      <TodoList value={value} key={index} indexNo={index} todolist={todolist} settodoslist={settodoslist}/>
    )    
  });
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={saveTodo}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul>
         {list}
        </ul>
      </div>
    </>
  );
}

export default App;
