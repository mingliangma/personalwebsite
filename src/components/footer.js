import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer>
           <div className="container">
                <div className="row">

                     <div className="col-md-23 col-sm-23">
                          <div className="wow fadeInUp footer-copyright" data-wow-delay="0.2s">
                               <p className="font-playfair">© 2017 Mingliang Ma | All Rights Reserved.</p>
                          </div>
                          <ul className="social-icon">
                               <li className="animated fadeInUp"><a href="https://twitter.com/mingliangma" className="fa fa-twitter" /></li>
                               <li className="animated fadeInUp"><a href="https://www.linkedin.com/in/mingliangma/" className="fa fa-linkedin" /></li>
                          </ul>
                     </div>

                </div>
           </div>
      </footer>
    );
  }
}

export default Footer;
