import { useState } from "react";
import TodoList from "./TodoList";
export default function TodoInput(){

    const [tasks, setTask] = useState([]);
    const [nextId, setNextId] = useState(1);
    function addTask(e){
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        setTask([...tasks, {id: nextId, task: formJson.task, done: false}]);
        setNextId(nextId + 1);
        form.reset();
    }
    
    return (
      <>
        <form onSubmit={addTask} className="todo-input">
          <input name="task" />
          <button type="submit">Do</button>
        </form>

        <ul className="todo-list">
          <TodoList tasks={tasks} setTask={setTask} />
        </ul>
      </>
  );
}