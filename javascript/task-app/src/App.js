import React from "react";
import Overview from "./components/Overview";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [formData, setFormData] = React.useState({
    text: "",
  });

  function submit(event) {
    event.preventDefault();
    setTasks((oldTasks) => [...oldTasks, formData.text]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((oldFormData) => {
      return { ...oldFormData, [name]: value };
    });
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
