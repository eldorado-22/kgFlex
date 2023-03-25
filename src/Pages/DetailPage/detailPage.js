import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {APIKEY} from "../../ApiKey/ApiKey";
import axios from "axios";
import './detailPage.scss'
import DetailActors from "../DetailActors/detailActors";
import Trailers from "../../components/Trailers/trailers";
import ActorsInfo from "../Actors-Info/actors-Info";
import {LanguageContext} from "../../Context";

const DetailPage = () => {

    const [detail, setDetail] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    const getDetail = async (id, key) => {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            const {data} = await res
            setDetail(data)
        } catch (e) {
            console.log(e, 'error')
        }
    }


    useEffect(() => {
        getDetail(movieId, APIKEY)
    }, [language])

    // console.log(detail)

    const {poster_path, original_title, runtime, backdrop_path, vote_average, overview, release_date} = detail

    return (
        <>
            <div id="detail" style={{
                background: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat center/cover`
            }}>
                <div className="container">
                    <div className="detail">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="img"/>
                        <div className="detail--text">
                            <h3>{original_title}</h3>
                            <h5>Year: <span>{release_date}</span></h5>
                            <div className="detail--text__circle">
                                <span>Rating: </span>
                                <p>{Math.floor(vote_average * 10)}%</p>
                            </div>
                            <p className="detail--text__min">{Math.floor(runtime / 60)}<small>h</small> {runtime % 10}
                                <small>min</small></p>
                            <p className="detail--text__para">{overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <DetailActors movieId={movieId}/>
            <Trailers movieId={movieId}/>
            {/*<ActorsInfo movieId={movieId}/>*/}
        </>

    );
};

export default DetailPage;