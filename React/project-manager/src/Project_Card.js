import { Panel, Placeholder, Row, Col } from "rsuite";
import Tasks from "./Tasks";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";

const sample = require("./projects.json");

function Project_Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.project.id}`);
  };
  return (
    <>
      {/* <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 140 }}
        onClick={handleClick}
      >
        <img
          src="https://via.placeholder.com/240x240"
          height="70"
          width="100"
        />
        <Panel header="RSUITE">
          <p>
            <small>{props.id}</small>
          </p>
          <p>
            <small>{props.team_size}</small>
          </p>
          <p>
            <small>{props.workload}</small>
          </p>
        </Panel>
      </Panel> */}

      <div
        class="max-w-sm rounded m-2 overflow-hidden shadow-lg hover:scale-[1.05] hover:transition hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          class="w-full"
          src="https://thevanitymetric.com/content/images/size/w2000/2018/10/random-startup-ideas-generator.jpg"
          alt="Sunset in the mountains"
        />
        <div class="flex flex-row font-bold w-full text-xl mb-2">
          <span className="flex m-2 flex-1 w-full">
            Project {props.project.id}
          </span>
          <div className="flex flex-[0.5] w-full">
            <img
              src="https://www.svgrepo.com/show/529257/trash-bin-trash.svg"
              className="self-end ml-8 rounded-3xl w-8 h-8 bg-red-400 hover:scale-110"
            />
            <img
              src="https://www.svgrepo.com/show/520705/edit.svg"
              className="self-end rounded-3xl ml-2 w-8 h-8 bg-blue-400 hover:scale-110"
            />
          </div>
        </div>
        <div class="px-6 pb-2">
          <span
            class={`inline-block rounded-full ${
              props.project.workload === "light"
                ? "bg-green-200"
                : props.project.workload === "medium"
                ? "bg-yellow-200"
                : "bg-red-200"
            } px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {props.project.workload}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${props.project.budget}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.project.team_size} people
          </span>
        </div>
      </div>
    </>
  );
}
export default Project_Card;
