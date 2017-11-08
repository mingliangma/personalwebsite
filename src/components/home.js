import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { CSSTransitionGroup } from 'react-transition-group'
import ScrollableAnchor from 'react-scrollable-anchor'

var particlesOption = require('../js/particles-options')

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {showPreloader: true};

    // Toggle the state every second
    setTimeout(() => {
      this.setState({showPreloader: false});
    }, 10);
  }

  render() {

    var paramsValue = particlesOption.paramsSetting;
    return (
      <ScrollableAnchor id='_home'>
      <section id="home" className="parallax-section">
      <CSSTransitionGroup
          transitionName="preloader"
          transitionLeaveTimeout={1000}
          transitionEnterTimeout={1000}>
          {this.state.showPreloader &&
          <Preloader />
          }
      </CSSTransitionGroup>

      <Particles style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0
        }}
         params={paramsValue} />

           <div className="container">
                <div className="row">

                     <div className="col-md-12 col-sm-12">
                          <div className="home-thumb">
                               <h3 className="animated fadeInUp" >hello,I am <span className="font-playfair">Ming</span></h3>
                               <h1 className="animated fadeInUp" data-wow-delay="1.0s">I <span className="font-playfair">create</span> products.</h1>
                          </div>
                     </div>
                </div>
           </div>

           <div id='let-chat' >
               <h4 className="animated fadeIn" data-wow-delay="2.0s"><a href="#_chatbot"> {"Let's chat"} <i className="bounce fa fa-arrow-down"></i></a></h4>
           </div>
      </section>
      </ScrollableAnchor>
    );


  }
}

class Preloader extends Component {
  render(){
    return (

        <div className="preloader">
          <div className="sk-spinner sk-spinner-wordpress">
            <span className="sk-inner-circle"></span>
          </div>
        </div>

  );
  }
}

export default Home;
