import { Panel, Placeholder } from "rsuite";
import Card from "./card";
import { useState, useEffect } from "react";

const sample = require("./projects.json");
// const sample1= sample[0].project_tasks

function Panels(props) {
  const [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${props.id}`)
      .then((response) => response.json())
      .then((data) => setProjectTasks(data.project_tasks));
  }, []);

  useEffect(() => {
    console.log(projectTasks);
  }, [projectTasks]);
  return (
    // <Panel style= { {color: 'black', border: 'solid'} } header= {props.title} bordered>
    //     {sample[props.id].project_tasks.map(task => {
    //         if (task.task.completed_status === props.done){
    //             return Card(task)
    //         }
    //         })}
    // </Panel>

    <div className="flex flex-row w-full">
      <div className="flex flex-col">
        <h3 className="m-4">{props.title}</h3>
        <div className="flex m-4 flex-row">
          {projectTasks?.map((task) => {
            if (task.task.completed_status === props.done)
              return <Card task={task.task} />;
          })}
        </div>
      </div>
    </div>
    
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));

// import { Panel, Placeholder, Row, Col } from 'rsuite';

// {sample.filter( (obj) => {
//     if (obj.id < 4){
//         return true
//     }else{
//         return false
//     }
// }).map(obj => Card())}

// function Card (props){
//     return (
//         <Panel {...props} bordered header="Card title">
//         <Placeholder.Paragraph />
//         </Panel>
//     )
// }

// function CardGroup(){
//     return (
//         <Row>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//   </Row>
//     )
// }

export default Panels;
