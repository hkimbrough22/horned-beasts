import { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import beastArray from './data.json'

export default class SelectedBeast extends Component {
    render() {
        console.log(this.props);
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beastUrl} alt={this.props.beastDescription} />
                    <p>{this.props.beastDescription}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Favorite!
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}