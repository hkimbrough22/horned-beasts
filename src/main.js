import { Component } from 'react';
import HornedBeast from './hornedBeast';
import animalArray from './data.json';
import Container from 'react-bootstrap/Container'
import BeastForm from './beast-form';


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            beasts: animalArray,
        }
    }

    handleChange = (e) => {
        const selection = e.target.value;
        let newBeasts;
        if (selection === '1') {
            newBeasts = animalArray.filter(item => {
                return item.horns === 1
            });
            this.setState({
                beasts: newBeasts,
            });
        } else if (selection === '2') {
            newBeasts = animalArray.filter(item => {
                return item.horns === 2
            });
            this.setState({
                beasts: newBeasts,
            });
        } else if (selection === '3') {
            newBeasts = animalArray.filter(item => {
                return item.horns === 3
            });
            this.setState({
                beasts: newBeasts,
            });
        } else if (selection === 'alot') {
            newBeasts = animalArray.filter(item => {
                return item.horns >= 4 
            });
            this.setState({
                beasts: newBeasts,
            });
        } else {
            this.setState({beasts: animalArray});
        }
    }
    // TA, Micheal Eclavia helped with the .map method and my understanding of it
    render () {
    const beastArray = this.state.beasts.map(item => {
        return (
            <div>
                <HornedBeast 
                key = {item.image_url}
                title={item.title}
                imageUrl={item.image_url} 
                description={item.description} 
                horns={item.horns} 
                keyword={item.keyword} 
                selectBeast={this.props.selectBeast}
                />
            </div>
        )
    })
    return (
        <Container id='mainDivElem'>
            <BeastForm handleChange={this.handleChange}/>
            {beastArray}
        </Container>
    )
    }   
}

export default Main;