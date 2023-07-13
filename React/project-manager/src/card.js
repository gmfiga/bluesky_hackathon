import { Panel, Placeholder, Row, Col } from 'rsuite';

function Card(props){
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 140 }}>
        <img src="https://via.placeholder.com/240x240" height="70" />
        <Panel header="RSUITE">
          <p>
            <small>
              {props.task.description}
            </small>
          </p>
        </Panel>
      </Panel>
    )
};
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
export default Card;

