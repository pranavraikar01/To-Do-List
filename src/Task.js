function Task({ task, onDeleteTask }) {
  return (
    <li className="list-item">
      {task.taskDescription}
      <button onClick={() => onDeleteTask(task.id)}>Mark as read</button>
    </li>
  );
}

export default Task;
