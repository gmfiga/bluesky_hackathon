import { useState } from 'react';
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";

function Add_Project() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        var data = {
            team_size: inputs.tsize,
            budget: inputs.budget,
            workload: inputs.workload,
            start_time: inputs.stime,
            completion_time: inputs.etime
        }
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    
        fetch("http://localhost:4000/projects", requestMetadata)
            .then(res => res.json())
            .then(r => console.log(r))
            //.then(recipes => {
              //  this.setState({ recipes });
            
      navigate(`/`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your budget:
        <input 
          type="number" 
          name="budget" 
          value={inputs.budget|| ""} 
          onChange={handleChange}
        />
        </label><br></br>
        <label>Enter your team size:
          <input 
            type="number" 
            name="tsize" 
            value={inputs.tsize || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <label>Enter workload (Light/Medium/Heavy):
          <input 
            type="text" 
            name="workload" 
            value={inputs.workload || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <label>Enter start time: 
          <input 
            type="date" 
            name="stime" 
            value={inputs.stime || ""} 
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
export default Add_Project;