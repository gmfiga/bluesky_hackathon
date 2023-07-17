import { Panel, Placeholder, Row, Col } from "rsuite";
import Tasks from "./Tasks";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const sample = require("./projects.json");

function Project_Card(props) {
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({pathname: `/${props.project.id}`,
    search: createSearchParams({ role: searchparams.get("role") }).toString()});
  };

  const handleEditClick = () => {
    if (searchparams.get("role") === "manager"){
      navigate({pathname: `/edit_project/${props.project.id}`,
      search: createSearchParams({ role: searchparams.get("role") }).toString()});
    }
  };

  // const clickDelete = () => {
  //   const requestMetadata = {
  //     method: 'DELETE',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  // };

  // fetch(`http://localhost:4000/projects/${props.project.id}`, requestMetadata)
  //     .then(res => res.json())
  //     .then(r => console.log(r))
      
  //   navigate('/')
  // };
  return (
    <>
      <div
        class="max-w-sm rounded m-2 overflow-hidden shadow-lg hover:scale-[1.05] hover:transition hover:cursor-pointer"
        
      >
        <img
          class="w-full"
          src="https://thevanitymetric.com/content/images/size/w2000/2018/10/random-startup-ideas-generator.jpg"
          alt="Sunset in the mountains"
          onClick={handleClick}
        />
        <div class="flex flex-row font-bold w-full text-xl mb-2">
          <span className="flex m-2 flex-1 w-full">
            Project {props.project.id}
          </span>

          <div className="flex flex-[0.5] w-full">
            <img
              src="https://www.svgrepo.com/show/529257/trash-bin-trash.svg"
              className={`self-end ml-8 rounded-3xl w-8 h-8 ${
                searchparams.get("role") === "manager"
                  ? "bg-red-400 hover:scale-110"
                  : "bg-gray-400"
              }`} onClick= {() => props.onDelete(props.project.id)}
            />
            <img
              src="https://www.svgrepo.com/show/520705/edit.svg"
              className={`self-end rounded-3xl ml-2 w-8 h-8 ${
                searchparams.get("role") === "manager"
                  ? "bg-blue-400 hover:scale-110"
                  : "bg-gray-400"
              }`} onClick = {() => handleEditClick()}
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
