import Panels from "./panel";
import "./App.css";
import { Route, Routes, Navigate, Link, useNavigate, useParams, useSearchParams, createSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Panel } from "rsuite";

function Tasks(props) {
  let { id } = useParams();

  const [projectTasks, setProjectTasks] = useState([]);
  
  const navigate = useNavigate()
  const [searchparams] = useSearchParams();

  function handleClick(){
    navigate({pathname: `/add_task/${id}`,
    search: createSearchParams({ role: searchparams.get("role") }).toString()});
  }

  function goHome(){
    navigate({pathname: `/projects`,
    search: createSearchParams({ role: searchparams.get("role") }).toString()});
  }

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProjectTasks(data.project_tasks));
  }, []);

  function cardCallback(description) {
    const newTasks = projectTasks.map((task) => {
      if (task.task.description === description) {
        task.task.completed_status = !task.task?.completed_status;
        return task;
      }
      return task;
    });

    setProjectTasks(newTasks);

    fetch(`http://localhost:4000/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: +id, project_tasks: projectTasks }),
    });
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1>Project {id}</h1>
      <button onClick={goHome}> Home</button><button onClick={handleClick}> Add Task</button>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <Panels
          title="To-Do"
          tasks={projectTasks.filter(
            (task) => task.task.completed_status === false
          )}
          callback={cardCallback}
        />
        <br />
        <Panels
          title="Done"
          tasks={projectTasks.filter(
            (task) => task.task.completed_status === true
          )}
          callback={cardCallback}
        />
      </div>
    </div>
  );
}

export default Tasks;
