import { Panel, Placeholder } from 'rsuite';
import Card from './card';
const sample = require('./projects.json');
const sample1= sample[0].project_tasks

function Panels(props){
    return(
        <Panel style= { {color: 'black', border: 'solid'} } header= {props.title} bordered>
            {sample[props.id].project_tasks.map(task => {
                console.log(task.task.completed_status)
                console.log(props.done)
                if (task.task.completed_status === props.done){
                    
                    return Card(task)
                }
                })}
        </Panel>
    )
};

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