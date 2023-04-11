import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import './trailers.scss'

const Trailers = ({movieId}) => {

    const [videos, setVideos] = useState([])
    const getVideos = async (id, key) => {
        const link = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const {data} = await link
        setVideos(data.results)
    }

    useEffect(() => {
        getVideos(movieId, APIKEY)
    }, [])

    // console.log(videos)


    return (
        <div id="videos">
            <div className="container">
                <h1>Видеоролики</h1>
                <div className="videos">
                    {
                        videos.map(el => (
                            <div className="videos--trailer" key={el.id}>
                                <iframe width="400" height="250" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                </iframe>
                                <h3 style={{color: "white"}}>{el.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailers;