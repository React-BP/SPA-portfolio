// REACT IMPORTS
import React, { Component } from 'react';

// EXTERNAL NPM IMPORTS
//import ReactPageScroller from "react-page-scroller";

// COMPONENT IMPORTS
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import Items from './components/Items/Items';
import About from './components/About/About';
import CardBox from "./components/CardBox/CardBox";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

// DATA IMPORT FOR CARDS
import cardData from "./card-data.json";

// STYLE IMPORTS
import './App.css';

class App extends Component {
  //SUPER PROPS
  constructor(props) {
    super(props);
    this.state = { 
      cardData: cardData, 
      currentPage: 0, 
      showMe: false };
    this.ReactPageScroller = null;
  };

  //GOES TO SPECIFIC PAGE ON SELECT
  goToPage = (eventKey) => {
    this.ReactPageScroller.goToPage(eventKey);
  }

  //GRABS PAGE NUMBER ON PAGE CHANGE
  pageOnChange = (number) => {
    if (number === 0) {
      this.setState({ showMe: false });
    } else {
      this.setState({ showMe: true });
    }
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <div className="App">
      {/* <ReactPageScroller ref={c => this.ReactPageScroller = c} pageOnChange={this.pageOnChange}> */}
      <Wrapper>
        <Navbar /> 
        <Billboard />
        <About />
        <Items />
        <CardBox>
        {this.state.cardData.map(data => (
                  <Card 
                  key={data.id}
                  img={data.img}
                  alt={data.alt}
                  title={data.title}
                  desc={data.desc}
                  button={data.button}
                  />
                ))}
        </CardBox>
        <Footer />
      </Wrapper>
      {/* </ReactPageScroller> */}
      </div>      
    );
  }
}

export default App;
