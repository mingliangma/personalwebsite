import React, { Component } from 'react';
import ReactGA from 'react-ga';
// components
import Navigation from './components/navigation';
import Chatbot from './components/chatbot';
import Home from './components/home';
import About from './components/about';
import Mywork from './components/mywork';
import Footer from './components/footer';
import { configureAnchors } from 'react-scrollable-anchor'
// includes
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';

class App extends Component {
  constructor() {
    super();

    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-109322351-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    configureAnchors({offset: -70, scrollDuration: 2000})

    return (
      <div className="App">
        <Navigation />
        <Home />
        <Chatbot />
        <About />
        <Mywork />
        <Footer />
      </div>
    );
  }
}

export default App;
