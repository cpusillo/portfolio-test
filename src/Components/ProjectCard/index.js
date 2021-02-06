import {Container, Row, Col, Card, Button} from "react-bootstrap"
import "./ProjectCard.css"

function ProjectCard(props){
    return (  
        <div class="project">
                    <Card class="projectcard">
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title><h4>{props.name}</h4></Card.Title>
                        <Card.Text>
                        <p>{props.description}</p>
                        <p>{props.technologies}</p>
                        </Card.Text>
                        <a href={props.href}><Button variant="success">View App</Button></a>
                    </Card.Body>
                </Card>
        </div>  
    )
}

export default ProjectCard