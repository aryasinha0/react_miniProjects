import TodoItem from "./TodoItem";

export default function TodoList({tasks, setTask}){
    return (
        
        tasks.map((task) => (
            <TodoItem key={task.id} task={task} tasks={tasks} setTask={setTask} />
          ))
        
    )
}