import React, { Component } from 'react';
import Header from './components/Header';
import Content from './containers/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    currentPage: 'Home'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.debounce(() => {
      console.log('hit throttle')
    }, 300)
  }

  navClickHandler = ( event ) => {
    // if( event.target.nodeName === 'A' ) {
      console.log(event.target.classList)
      // change state currentPage to event.target.innerText
    // }
  }

debounce = (func, wait, immediate) => {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

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
