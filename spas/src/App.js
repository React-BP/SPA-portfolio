import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import Items from './components/Items/Items';
import About from './components/About/About';
import Card from "./components/Card/Card";
import cardData from "./card-data.json";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    cardData: cardData
  };
  render() {
    return (
      <div className="App">
      <Wrapper>
        <Navbar /> 
        <Billboard />
        <About />
        <Items />
        <div className="card-box">
            <div className="card-content">
              <main className="card-grid">
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
              </main>
          </div>
        </div>
        <Footer />
      </Wrapper>
      </div>      
    );
  }
}

export default App;
