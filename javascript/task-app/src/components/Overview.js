import React from "react";

export default function Overview(props) {
  const elements = props.tasks.map((task) => (
    <div key={task.id}>
      {task.id}
      {task.text}
      <button onClick={() => props.deleteTask(task.id)}>delete</button>
    </div>
  ));
  return <div>{elements}</div>;
}
