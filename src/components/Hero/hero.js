import React, {useState} from 'react';
import './hero.scss'
import {BsFillPlayFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import Home from "../../Pages/Home/home";
import EnjoyTv from "../EnjoyTV/enjoyTV";
import MorePlace from "../MorePlaces/morePlace";
import DownloadShow from "../DownloadOffline/downloadShow";
import CreateKids from "../CreateKids/createKids";
import WatchApple from "../WatchApple/watchApple";
import Faq from "../Faq/faq";

const Hero = () => {
    const [value, setValue] = useState("")

    const navigate = useNavigate()

    function goToSearch(){
        navigate(`/search/${value}`)
    }

    return (
      <div>
          <section id="hero">
              <div className="container">
                  <div className="hero">
                      <div className="hero--text">
                          <h1>WELCOME TO <span>KG FLEX</span></h1>
                          <p>Trailers, Actors and much more without limits</p>
                          <p>Enjoy with movies</p>
                      </div>

                      <div className="hero--global">
                          <input onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                                 onChange={(e) => setValue(e.target.value)} type="text"
                                 placeholder="Search Movies"/>
                          <button onClick={() => goToSearch()} className="hero--global__getBtn">Get Started
                              <BsFillPlayFill className="hero--global__getBtn--play"/>
                          </button>
                      </div>
                  </div>

              </div>
              <div style={{
                  marginTop: '40px',
                  height: '0.5rem',
                  backgroundColor: 'gray'
              }}></div>
          </section>

          <EnjoyTv/>
          <MorePlace/>
          <DownloadShow/>
          <CreateKids/>
          <WatchApple/>
          <Faq/>
          <Home/>
      </div>
    );
};

export default Hero;