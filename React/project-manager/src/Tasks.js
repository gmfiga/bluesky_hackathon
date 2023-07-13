import Panels from './panel';
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';


function Tasks(props){
    let { id } = useParams();
    return(
        <div className="Tasks">
        <Panels title = "To-Do" id = {id} done = {false}></Panels>
        <br/>
        <Panels title = "Done" id = {id} done = {true}></Panels>
        {/* <p>
          {project[0]?._id}
          {/* {project && <div>{project._id}</div>} */}
        {/* </p> } */}
        
    </div>
    )
};

export default Tasks;