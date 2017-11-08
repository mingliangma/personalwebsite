import React, { Component } from 'react';
import profilePicture from '../assets/images/profilePic.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'

class About extends Component {

  render() {
    return (
      <ScrollableAnchor id='_about'>
      <section id="about" className="parallax-section">
           <div className="container">
                <div className="row">

                     <div className="col-md-6 col-sm-6">
                          <div className="animated fadeIn about-text" data-wow-delay="0.4s">
                               <h2>{"That's me!"}</h2>
                               <div>
                                    <h4>{"I'm a product manager actively engaged in solving everyday problems by creating digital solutions that "}<strong>captivate</strong> and <strong>delight</strong>. {"You'll find me at the intersection of technology, business, and angel investing. "}</h4>
                                    <h4>{"I graduated from the University of Toronto where I studied software engineering and economics. For the past seven years, I've developed enterprise applications for IBM and Capital One, as well as mobile apps and machine learning engine for my tech startups."}</h4>
                                    <h4>{"Going beyond just developing applications, I've always been keen to gain insight into how users interact with my product and how I can further enrich their experience. So far, I have founded three startups that had been incubated at Toronto's DMZ and Waterloo Accelerator Centre and received fundings from government and angel investors."}</h4>
                                    <h4>{"Currently, I'm leading the East Coast operation, covering investment activities from growing deal flow to conducting tech and market due diligent as we continue investing in a number of successful startups in Toronto."}</h4>
                                    <h4>{"When not pushing codes or networking at conferences, I can be found geeking out with the latest Apple gadget or training for Muay Thai."}</h4>
                               </div>
                          </div>
                     </div>

                     <div className="col-md-6 col-sm-6">

                          <div className="animated fadeIn about-image" data-wow-delay="0.8s">
                               <img src={profilePicture} className="img-responsive" alt=""></img>
                          </div>
                     </div>

                </div>
           </div>

      </section>
      </ScrollableAnchor>
    );
  }
}

export default About;
