import { Component } from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favorites: 0,
      }
    }
  
    displayModal = () => {
      this.props.selectBeast(this.props);
    }
    
    handleClick = () => {
      const newFavs = this.state.favorites + 1
      this.setState({
        favorites: newFavs,
      });
    }
  
    render() {
      return (
      <Col className='cardDivElems' >
          <Card onClick={this.displayModal}>
            <Card.Img variant="top" src={this.props.imageUrl} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              {this.props.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><Button onClick={this.handleClick} variant="primary">Favorite!</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src= "https://www.maxpixel.net/static/photo/2x/Love-Heart-Emoticon-Face-Smiley-Emojis-Emoji-5449662.png" alt="" id="heartEmoji"/> &nbsp;&nbsp;{this.state.favorites}</small>
            </Card.Footer>
          </Card>
      </Col>
      )
    } 
  }