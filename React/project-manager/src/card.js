import { Panel, Placeholder, Row, Col } from "rsuite";

function Card(props) {
  return (
    //   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 140 }}>
    //   <img src="https://via.placeholder.com/240x240" height="70" />
    //   <Panel header="RSUITE">
    //     <p>
    //       <small>
    //         {props.task.description}
    //       </small>
    //     </p>
    //   </Panel>
    // </Panel>

    <div class="max-w-sm rounded m-2 overflow-hidden shadow-lg hover:scale-[1.05] hover:transition hover:cursor-pointer relative">
      {props.task.completed_status ? (
        <img
          src="https://www.svgrepo.com/show/524415/check-circle.svg"
          className="rounded-full h-8 w-8 absolute top-0 right-0 bg-transparent"
        />
      ) : (
        <></>
      )}
      <div class="flex flex-row font-bold w-full text-xl mb-2">
        <p className="flex m-2 text-sm flex-1 w-full">
          {props.task.description}
        </p>
        <div className="flex flex-[0.5] w-full">
          {/* <img src="https://www.svgrepo.com/show/529257/trash-bin-trash.svg" className="self-end ml-8 rounded-3xl w-8 h-8 bg-red-400 hover:scale-110" />
          <img src="https://www.svgrepo.com/show/520705/edit.svg" className="self-end rounded-3xl ml-2 w-8 h-8 bg-blue-400 hover:scale-110" /> */}
        </div>
      </div>
      <div class="m-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Assigned to {props.task.person_assigned}
        </span>
        <span class="inline-block ml-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Due on {props.task.due_date}
        </span>
      </div>
    </div>
  );
}
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
