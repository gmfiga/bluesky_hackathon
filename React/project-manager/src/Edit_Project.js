import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, Link, useNavigate, createSearchParams, useSearchParams, useParams } from "react-router-dom";

function Edit_Project() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [searchparams] = useSearchParams();
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/projects/${id}`)
          .then((response) => response.json())
          .then((data) => setInputs(data));
      }, []);
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        var data = {
            team_size: inputs.team_size,
            budget: inputs.budget,
            workload: inputs.workload,
            start_time: inputs.start_time,
            completed_time: inputs.completed_time
        }
        const requestMetadata = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    
        fetch(`http://localhost:4000/projects/${id}`, requestMetadata)
            .then(res => res.json())
            .then(r => console.log(r))
            //.then(recipes => {
              //  this.setState({ recipes });
            
      navigate({pathname: `/projects`,
      search: createSearchParams({ role: searchparams.get("role") }).toString()});
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
            name="team_size" 
            value={inputs.team_size || ""} 
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
            type="text" 
            name="start_time" 
            value={inputs.start_time || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <label>Enter due time: 
          <input 
            type="text" 
            name="completed_time" 
            value={inputs.completed_time || ""} 
            onChange={handleChange}
          />
          </label><br></br>
          <input type="submit" />
      </form>
    )
  }
export default Edit_Project;