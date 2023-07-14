import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Panels from "./panel";
import Tasks from "./Tasks";
import Projects from "./projects";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import Add_Project from "./Add_Project";
import Add_Tasks from "./Add_Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/:id" element={<Tasks />} />
      <Route path="/add_project" element={<Add_Project />} />
      <Route path="/add_task" element={<Add_Tasks />} />
    </Routes>
  );
}

export default App;
