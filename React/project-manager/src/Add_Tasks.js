import { useState } from 'react';

function Add_Tasks() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs.budget);
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