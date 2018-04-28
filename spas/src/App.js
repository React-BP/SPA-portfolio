// REACT IMPORTS
import React, { Component } from 'react';

// EXTERNAL NPM IMPORTS
// REACT MODAL HANDLE THE ITEM DETAIL LIGHTBOX
import ReactModal from 'react-modal';

// COMPONENT IMPORTS
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar";
import Dotnav from "./components/Dotnav/Dotnav";
import Billboard from "./components/Billboard/Billboard";
import Items from './components/Items/Items';
import About from './components/About/About';
import CardBox from "./components/CardBox/CardBox";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import DetailModal from "./components/DetailModal/DetailModal";

// DATA IMPORT FOR CARDS / PORTFOLIO ITEMS
import cardData from "./card-data.json";

// STYLE IMPORTS
import './App.css';

ReactModal.setAppElement('#root');

class App extends Component {

//SUPER PROPS
  constructor(props) {
    super(props);
    this.state = { 
      cardData: cardData, 
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  };
  
  render() {
    return (
      <div className="App">
      <Wrapper>
        <Navbar /> 
        <Dotnav />
        <Billboard />
        <About />
        <Items />
        <CardBox>
        {/* THIS MAPS AND PASSES THE DATA FROM YOUR CARD-DATA JSON TO YOUR CARDS */}
        {this.state.cardData.map(data => (
                  <Card 
                  key={data.id}
                  id={data.id}
                  img={data.img}
                  alt={data.alt}
                  title={data.title}
                  desc={data.desc}
                  button={data.button}
                  onClick={this.handleOpenModal}
                  />
                ))}
        </CardBox>
        <Footer />
        {/* MODAL PROPS ARE PASSED TO THE DETAIL LIGHTBOX */}
        <DetailModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
            data={this.state.cardData}
         />
      </Wrapper>
      </div>      
    );
  }
}

export default App;
