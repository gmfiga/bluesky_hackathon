import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Panels from './panel';
import Tasks from './Tasks';
import Projects from './projects';
import { Route, Routes, Navigate, Link} from 'react-router-dom'

function App() {
  const [project, setProject] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/test')
        .then(response => response.json())
        .then(data => setProject(data))
        .then(console.log(project))
        .catch(error => console.error('Error:', error));
  }, []);
  return (
    
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/:id" element={<Tasks />}  />
        </Routes>
  );
}

export default App;
