import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import Project_Card from "./Project_Card";
const sample = require("./projects.json");
function Projects(props) {
  return (
    // <Container>
    //     <Header>Current Projects</Header>
    //     <Content >{sample.map(proj => Project_Card(proj))}</Content>
    //     <Footer>Footer</Footer>
    // </Container>
    <div className="flex items-center justify-center flex-col w-full h-full">
      <h1>Current Projects</h1>
      <div className="flex items-center justify-center flex-wrap w-full h-full">
        {sample.map((proj) => Project_Card(proj))}
      </div>
    </div>
  );
}
export default Projects;
