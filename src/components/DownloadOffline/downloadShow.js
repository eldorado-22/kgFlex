import React from 'react';
import './downloadShow.scss';

const DownloadShow = () => {

    return (
        <section id="download">
            <div className="container">
                <div className="download">

                    <div className="download--text">
                        <h1>Download your <br/>
                            shows to watch offline.
                        </h1>
                        <p>Save your favorites easily and always
                            have <br/> something to watch.
                        </p>
                    </div>

                    <div className="download--videos">
                        <img className="download--videos__net"
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                            alt="img"/>
                        <div className="download--videos__block">

                            <div className="download--videos__block--img">
                                <img
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                    alt=""/>
                            </div>

                            <div className="download--videos__block--text">
                                <h4>Stranger Things</h4>
                                <h5>Downloading...</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: "6%",
                height: '0.5rem',
                backgroundColor: 'rgb(35,35,35)'
            }}></div>
        </section>
    );
};

export default DownloadShow;