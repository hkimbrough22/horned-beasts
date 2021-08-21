import { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default class BeastForm extends Component {
    
    render () {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Filter Beasts</Navbar.Brand>
                    </Container>
                </Navbar>
                <Form>
                    <Form.Select 
                    onChange={this.props.handleChange}
                    aria-label="Default select example">
                        <option value="all">All Beasts</option>
                        <option value="1">Beasts with One Horn</option>
                        <option value="2">Beasts with Two Horns</option>
                        <option value="3">Beasts with Three Horns</option>
                        <option value="alot">Beasts with a lot of Horns</option>
                    </Form.Select>
                </Form>
            </Container>
        )
    }
}