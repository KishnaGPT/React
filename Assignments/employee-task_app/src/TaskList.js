import { useState } from "react";

export function TaskList() {


  const [tasks, setTask] = useState([{ name: 'task 1', status: 'done' }, { name: 'task 2', status: 'not done' }, { name: 'task 3', status: 'done' }])

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];

    if (updatedTasks[index].status === 'done') {
      updatedTasks[index].status = 'not done';
    }
    else {
      updatedTasks[index].status = 'done';
    }
    setTask(updatedTasks);
  }

  return <>

    <div style={{ padding: '20px' }}>
      <h2>Employee Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '15px' }}>
              <strong>{task.name}</strong> - Status: {task.status}
            </span>
            <button onClick={() => toggleStatus(index)}>
              Change Status
            </button>
          </li>
        ))}
      </ul>
    </div>


  </>

}