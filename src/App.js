import React, { Component } from 'react';
import { throttle, debounce } from 'throttle-debounce';
import Header from './components/Header';
import Content from './containers/Content';
import Footer from './components/Footer';
import './App.css';
import Fade from 'react-reveal/Fade'


class App extends Component {
  state = {
    currentPage: 'Home'
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle( 300, this.handleScroll ))
  }

  // Here lies sticky-shrink header scroll event listener
  handleScroll = () => {
    console.log('throttled')
    let scrollPosition = Math.round( window.scrollY );

    if( scrollPosition > 250 ) { // if scrolled past 300px, add header--sticky-shrink class
      document.querySelector( 'header' ).classList.add( 'header--sticky-shrink' );
      // if( scrollPosition > 300 ) {
      //   console.log(document.querySelector( 'ul' ))
      // }
    } else { // if not, remove header--sticky-shrink class from header
        document.querySelector( 'header' ).classList.remove( 'header--sticky-shrink' );
    }
  }

  navClickHandler = ( event ) => {
    // if( event.target.nodeName === 'A' ) {
      console.log(event.target.classList)
      // change state currentPage to event.target.innerText
    // }
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
