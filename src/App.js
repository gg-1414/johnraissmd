import React, { Component } from 'react';
import Header from './components/Header';
import Content from './containers/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    currentPage: 'Home'
  }

  navClickHandler = ( event ) => {
    if( event.target.nodeName === 'A' ) {
      console.log(event.target.innerText)
      // change state currentPage to event.target.innerText
    }
  }

  render() {
    return (
      <div className="App">
        <Header navClickHandler={ this.navClickHandler }/>
        <Content currentPage={ this.state.currentPage }/>
        <Footer />
      </div>
    );
  }
}

export default App;
