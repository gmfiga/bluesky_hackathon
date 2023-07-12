import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {project[0]?._id}
          {/* {project && <div>{project._id}</div>} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
