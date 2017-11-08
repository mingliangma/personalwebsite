import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactGA from 'react-ga';
import ScrollableAnchor from 'react-scrollable-anchor'
import kllectAppStore1 from '../assets/images/Kllect_AppStore-1.png';
import kllectAppStore2 from '../assets/images/Kllect_AppStore-2.png';
import kllectAppStore3 from '../assets/images/Kllect_AppStore-3.png';
import kllectWeb from '../assets/images/kllect_Web.png';
import samplegif from '../assets/images/kllect_screen_recording.gif';
import kllectSplashPicture from '../assets/images/kllect_splash.png';
import scorenaAppstore0 from '../assets/images/Scorena-appstore-0.png';
import scorenaAppstore1 from '../assets/images/Scorena-appstore-1.png';
import scorenaAppstore2 from '../assets/images/Scorena-appstore-2.png';
import scorenaAppstore3 from '../assets/images/Scorena-appstore-3.png';
import scorenaWeb from '../assets/images/scorena-website.png';
import scorenaSplash from '../assets/images/scorena_splash.png';
import icSplash from '../assets/images/ic_splash.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Lightbox from 'react-images';

class Mywork extends Component {

  render() {
    return (
      <ScrollableAnchor id='_work'>
        <section id="work" className="parallax-section">
          <div className="container">
            <div className="row">

              <div className="col-md-12 col-sm-12">
                <div className="section-title">
                  <h2>My works.</h2>
                  <h4>These are the projects I have passionately worked on. I have been leading in all critical stages of the product cycle, including idea discovery, design, development, launch, and measure.</h4>
                </div>
              </div>

              <div className="animated fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                <div className="work-thumb">
                  <Gallery
                    lightboxImages={[{src: samplegif}, {src: kllectAppStore1}, {src: kllectAppStore2}, {src: kllectAppStore3}, {src: kllectWeb}]}
                    image={kllectSplashPicture}
                    cardTitle={'Kllect'}
                    cardSubtitle={'Personal Video AI Curator'}
                    cardText={'Watch, discover and follow the latest tech videos on your favorite topics. From inspiring new invention to latest trending tech news – you’ll find videos that spark your curiosity.'}
                  />
                </div>
              </div>

              <div className="animated fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                <div className="work-thumb">
                  <Gallery
                    lightboxImages={[{src: scorenaAppstore0}, {src: scorenaAppstore1}, {src: scorenaAppstore2}, {src: scorenaAppstore3}, {src: scorenaWeb}]}
                    image={scorenaSplash}
                    cardTitle={'Scorena'}
                    cardSubtitle={"Fantasy Social Pick'em Game"}
                    cardText={'Challenge your friends to predict in major tournaments including basketball (NBA Regular Season, NBA Playoffs and NBA Finals) and soccer (EPL). Unlike traditional fantasy game, you can pick on the custom questions like Will Miguel Cabrera hit a Home Run?'}
                  />
                </div>
              </div>

              <div className="animated fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                <div className="work-thumb">
                  <Gallery
                    image={icSplash}
                    cardTitle={'Online Dating'}
                    cardSubtitle={"Social and fun"}
                    cardText={"Shh.... I can't tell too much. The app will be released very soon. It can uniquely match two users with same interests. "}
                    overlayText={"Coming soon..."}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardSubtitle: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
  }

  openLightbox () {

    ReactGA.event({
      category: 'My work',
      action: 'Open Lightbox',
      label: this.props.cardTitle,
    });

    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render(){

    let lightboxContent = null;
    if (this.props.lightboxImages){
      lightboxContent = (<Lightbox
        images={this.props.lightboxImages}
        isOpen={this.state.lightboxIsOpen}
        currentImage={this.state.currentImage}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />)
    }

    let overlayText = 'Find out more'
    if (this.props.overlayText){
      overlayText = this.props.overlayText
    }
    return(
      <MuiThemeProvider>
        <Card>
          <CardMedia>
            <img src={this.props.image} alt='work lightbox gallery'/>
            <div className="overlay" onClick={() => { if (this.props.lightboxImages) this.openLightbox()}}>
              <div className="text">{overlayText}</div>
            </div>
            {lightboxContent}
          </CardMedia>
          <CardTitle title={this.props.cardTitle} subtitle={this.props.cardSubtitle} style={{"font-family": "colfax"}}/>
          <CardText  style={{"font-family": "colfax"}}>
            {this.props.cardText}
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default Mywork;
