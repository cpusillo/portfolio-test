import React from "react"
import {Container, Form, Button} from "react-bootstrap"
import "./Contact.css"

function Contact(){
    return(
        <div class="contact">  
                <Container>
                <div class="card card-body bg-light contact-content">
                <h3>Contact Me!</h3><hr/>
                <a href="https://www.linkedin.com/in/corrine-pusillo/">Connect with me on LinkedIn!</a>
                    <Form class="contact-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Container>
        </div>
    )
}

export default Contact