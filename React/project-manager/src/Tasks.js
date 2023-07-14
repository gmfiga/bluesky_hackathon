import Panels from "./panel";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

function Tasks(props) {
  let { id } = useParams();
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1>Project {id}</h1>

      <div className="flex flex-col items-center justify-center w-full h-full ">
        <Panels title="To-Do" id={id} done={false}></Panels>
        <br />
        <Panels title="Done" id={id} done={true}></Panels>
        {/* <p>
          {project[0]?._id}
          {/* {project && <div>{project._id}</div>} */}
        {/* </p> } */}
      </div>
    </div>
  );
}

export default Tasks;
