import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import Project_Card from './Project_Card';
const sample = require('./projects.json');
function Projects(props){
    return(
        <Container>
        <Header>Current Projects</Header>
        <Content>{sample.map(proj => Project_Card(proj))}</Content>
        <Footer>Footer</Footer>
        </Container>
    )
};
export default Projects;