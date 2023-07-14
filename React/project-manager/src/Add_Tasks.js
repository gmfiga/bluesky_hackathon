import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, Link, useNavigate, useParams } from "react-router-dom";

function Add_Tasks() {
    const [inputs, setInputs] = useState({});
    const [projectTasks, setProjectTasks] = useState([]);
    const navigate = useNavigate()
    let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProjectTasks(data.project_tasks));
  }, []);
    

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      var data = {task: {
        description: inputs.description,
        completed_status: false,
        person_assigned: inputs.employee,
        due_date: inputs.etime,
        estimated_duration: inputs.workload}
    }
    var new_array = projectTasks
    new_array.push(data)
    var new_data = {
        project_tasks: new_array
    }
    const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_data)
    };

    fetch(`http://localhost:4000/projects/${id}`, requestMetadata)
        .then(res => res.json())
        .then(r => console.log(r))
        //.then(recipes => {
          //  this.setState({ recipes });
        
  navigate(`/${id}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your description:
        <input 
          type="text" 
          name="description" 
          value={inputs.description|| ""} 
          onChange={handleChange}
        />
        </label><br></br>
        <label>Enter assigned employee:
          <input 
            type="text" 
            name="employee" 
            value={inputs.employee || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <label>Enter estimated duration (days):
          <input 
            type="number" 
            name="workload" 
            value={inputs.workload || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <label>Enter due time: 
          <input 
            type="date" 
            name="etime" 
            value={inputs.etime || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <input type="submit" />
      </form>
    )
  }
export default Add_Tasks;