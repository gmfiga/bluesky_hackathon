import { Panel, Placeholder } from "rsuite";
import Card from "./card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sample = require("./projects.json");

function Panels(props) {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col">
        <h3 className="m-4">{props.title}</h3>
        <div className="flex m-4 flex-row">
          {props.tasks.map((task, id) => {
            return <Card key={id} task={task.task} callback={props.callback} />;
          })}
        </div>
      </div>
    </div>
    
  );
}

export default Panels;
