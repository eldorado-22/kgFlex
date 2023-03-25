import React from 'react';
import './enjoyTV.scss';
import tv from './../../assets/img/tv.png'

const EnjoyTv = () => {
    return (
        <section id="enjoyTV">
            <div className="container">
                <div className="enjoyTV">
                    <div className="enjoyTV--text">
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, <br/>
                            Chromecast, Apple TV, Blu-ray players, and <br/>
                            more.
                        </p>
                    </div>
                    <div className="enjoyTV--group">
                        <div className="enjoyTV--group__img">
                            <img alt="img"
                                 src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                                 data-uia="nmhp-card-animation-asset-image" className="enjoyTV--group__img--tv"/>
                            <div data-uia="nmhp-card-animation-asset-motion" className="enjoyTV--group__img--video">
                                <video
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                    type="video/mp4" autoPlay muted loop
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div style={{
              marginTop: '40px',
              height: '0.5rem',
              backgroundColor: 'rgb(35,35,35)'
          }}></div>
        </section>
    );
};

export default EnjoyTv;