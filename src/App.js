import { Component } from 'react';
import Header from './header';
import Main from './main';
import SelectedBeast from './selectedbeast';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      beast: null,
    }
  }

  closeModal = () => {
    this.setState({ selected: false });
  }

  selectBeastHandler = (beastInfo) => {
    console.log(beastInfo.title);
    this.setState({ 
      selected: true,
      beastTitle: beastInfo.title, 
      beastUrl: beastInfo.imageUrl, 
      beastDescription: beastInfo.description, 
      beastHorns: beastInfo.horns,
     });

  }

  render () {
    return (
      <>
        <Header title="Horned Beasts" />
        <Main selectBeast={this.selectBeastHandler}/>
        <SelectedBeast 
          show={this.state.selected}
          onClose={this.closeModal}
          beastTitle={this.state.beastTitle}
          beastUrl={this.state.beastUrl}
          beastDescription={this.state.beastDescription}
          beastHorns={this.state.beastHorns}
        
          />
        <Footer author="Haustin Kimbrough"/>
      </>
    );
  }
}

export default App;
  