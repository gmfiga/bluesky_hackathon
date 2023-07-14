import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import Project_Card from "./Project_Card";
import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchparams] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center relative justify-center flex-row w-full ">
        <h1>Current Projects</h1>
        <h3 className=" absolute top-0 right-0 m-4 text-base">
          Role: {searchparams.get("role")}
        </h3>
      </div>
      <div className="flex items-center justify-center flex-wrap w-full h-full">
        {projects?.map((proj) => {
          return <Project_Card project={proj} />;
        })}
      </div>
    </div>
  );
}
export default Projects;
