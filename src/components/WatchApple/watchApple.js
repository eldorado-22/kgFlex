import React from 'react';
import './watchApple.scss';

const WatchApple = () => {
    return (
        <section id="watchApple">
            <div className="container">
                <div className="watchApple">
                    <div className="watchApple--text">
                        <h1>Watch everywhere.</h1>
                        <p>Stream unlimited movies and TV shows on <br/>
                            your phone, tablet, laptop, and TV without <br/>
                            paying more.
                        </p>
                    </div>
                    <div className="watchApple--videos">
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                            alt="img"
                        />

                        <div className="watchApple--videos__film">
                            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                                   type="video/mp4" autoPlay muted loop/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                height: '0.5rem',
                backgroundColor: 'rgb(35,35,35)'
            }}></div>

        </section>
    );
};

export default WatchApple;