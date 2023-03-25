import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import {useParams} from "react-router-dom";
import './actors-Info.scss';
import ActorsMovie from "../DetailActors/ActorMovie/actorsMovie";

const ActorsInfo = () => {

// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US

    const {actorId} = useParams()
    const [actorsInfo, setActorsInfo] = useState({})
    const [textMore, setTextMore] = useState(300)
    const getActorsInfo = async (id, key) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        const {data} = await res
        setActorsInfo(data)
    }

    useEffect(() => {
        getActorsInfo(actorId, APIKEY)
    }, [])

    // console.log(actorsInfo)
    const clickText = (text) => {
        if (textMore === 300) {
            setTextMore(text.length)
        } else setTextMore(300)
    }
    const {profile_path, name, biography, birthday} = actorsInfo

    return (
        <div id="actorsBio">
            <div className="container">
                <div className="actorsBio">
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt="img"/>
                    <div className="actorsBio--text">
                        <h1>{name}</h1>
                        <h5>Year: <span>{birthday}</span></h5>
                        <p>Biography: <span>{biography && biography.slice(0, textMore)}</span></p>
                        <div className="actorsBio--text__icons">
                            {biography && biography.length > 300 &&
                                <h4 onClick={() => clickText(biography)} style={{color: "red", cursor: 'pointer'}}>
                                    {textMore === 300 ? 'Read More' : "Close Text"}
                                </h4>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <ActorsMovie id={actorId}/>
        </div>
    );
};

export default ActorsInfo;