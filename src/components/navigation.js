import React, { Component } from 'react';
var ReactDOM = require('react-dom');


class Navigation extends Component {

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  getOffset(element){
     var bounding = element.getBoundingClientRect();
     return {
       top: bounding.top + document.body.scrollTop,
         left: bounding.left + document.body.scrollLeft
       };
   }

  handleScroll(){
    var navbar = ReactDOM.findDOMNode(this.refs.navbar);
    var offset = this.getOffset(navbar)
    if (offset.top > 50){
      navbar.classList.add("top-nav-collapse");
    } else{
      navbar.classList.remove("top-nav-collapse");
    }
    // console.log('this.refs.navbar: ', this.refs.navbar);
  }

  render() {
    return (
      <div ref='navbar' className="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              </button>
              <a href="index.html" className="navbar-brand"><span className="font-playfair">Ming</span> Ma.</a>
            </div>

            <div className="collapse navbar-collapse">
                 <ul className="nav navbar-nav navbar-right">
                      <li><a href="#_home" className="smoothScroll">Home</a></li>
                      <li><a href="#_about" className="smoothScroll">About</a></li>
                      <li><a href="#_work"className="smoothScroll">Works</a></li>
                 </ul>
            </div>

          </div>

      </div>
    );
  }
}

export default Navigation;
