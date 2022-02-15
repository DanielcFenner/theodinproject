import React from "react";

export default function Overview(props) {
  const elements = props.tasks.map((task) => <div>{task}</div>);
  return <div>{elements}</div>;
}
