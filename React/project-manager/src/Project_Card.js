import { Panel, Placeholder, Row, Col } from 'rsuite';
import Tasks from './Tasks';
import { Route, Routes, Navigate, Link, useNavigate} from 'react-router-dom'
const sample = require('./projects.json');
import App from './App'



function Project_Card(props){
  const navigate = useNavigate()

  const handleClick = (e) => {
    console.log('h9')
    navigate(`/${props.id}`)
  }
    return(
        <>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 140 }}
        onClick= {handleClick}>
        <img src="https://via.placeholder.com/240x240" height="70" />
        <Panel header="RSUITE">
          <p>
            <small>
              {props.id}
            </small>
          </p>
        </Panel>
      </Panel>
      
        </>
    )
};
export default Project_Card;