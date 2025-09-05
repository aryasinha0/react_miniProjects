export default function TodoItem({task, tasks, setTask}) {
    return (
        <li key={task.id} >
              {task.id}. <p className={task.done ? "undo" : "done"}>{task.task}</p>
              <div className="btns">
                <button onClick={()=>{
                  setTask(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t));
                }}>{task.done ? "undo" : "done"}</button>
                <button onClick={() => {
                      // 1. Filter out the deleted task
                      const updatedTasks = tasks.filter(t => t.id !== task.id);

                      // 2. Reassign IDs sequentially
                      const reindexedTasks = updatedTasks.map((t, index) => ({
                        ...t,
                        id: index + 1
                      }));

                      // 3. Update state
                      setTask(reindexedTasks);
                    }}>Delete</button>
              </div>
            </li>
    )
}