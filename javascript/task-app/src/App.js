import React from "react";
import Overview from "./components/Overview";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [formData, setFormData] = React.useState({
    id: 0,
    text: "",
  });

  function submit(event) {
    event.preventDefault();
    setTasks((oldTasks) => [...oldTasks, { id: idGen(), text: formData.text }]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((oldFormData) => {
      return { ...oldFormData, [name]: value };
    });
  }

  function deleteTask() {}

  function idGen() {
    return Math.floor(Math.random() * 99999999999999);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="text" onChange={handleChange}></input>
        <button>submit</button>
      </form>
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
