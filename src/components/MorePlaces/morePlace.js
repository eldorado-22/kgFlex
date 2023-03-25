import React from 'react';
import './morePlace.scss'

const MorePlace = () => {
    return (
        <section id="morePlace">
            <div className="container">
                <div className="morePlace">
                    <div className="morePlace--images">
                        <img src="https://img.phonandroid.com/2021/04/avengers-infinity-war.jpg" alt="img"/>
                    </div>
                    <div className="morePlace--text">
                        <h1>More Access in More Places</h1>
                        <p> No matter where you are or where you go,
                            we make sure your favorite movies are with <br/>
                            you.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: "10%",
                height: '0.5rem',
                backgroundColor: 'rgb(35,35,35)'
            }}></div>
        </section>
    );
};

export default MorePlace;