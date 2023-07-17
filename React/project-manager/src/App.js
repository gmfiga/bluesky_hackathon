import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Panels from "./panel";
import Tasks from "./Tasks";
import Projects from "./projects";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import LoginForm from "./LoginForm";
import Add_Project from "./Add_Project";
import Add_Tasks from "./Add_Tasks";
import Edit_Project from "./Edit_Project"


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/:id" element={<Tasks />} />
      <Route path="/add_project" element={<Add_Project />} />
      <Route path="/edit_project/:id" element={<Edit_Project />} />
      <Route path="/add_task/:id" element={<Add_Tasks />} />
    </Routes>
  );
}

export default App;
