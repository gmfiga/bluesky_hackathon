import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Panels from "./panel";
import Tasks from "./Tasks";
import Projects from "./projects";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/:id" element={<Tasks />} />
    </Routes>
  );
}

export default App;
