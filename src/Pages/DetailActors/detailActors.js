import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import './detailActors.scss'
import user from './../../assets/img/man.png'
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";


const DetailActors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const {language} = useContext(LanguageContext)

    const getActors = async (key, id) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
        const {data} = res
        setActors(data.cast)
    }
    

    useEffect(() => {
        getActors(APIKEY, movieId)
    }, [language])

    console.log(actors)

    // const {profile_path, character, name} = actors

    return (
        <div id="actors">
            <div className="container">
                <h1 style={{padding: "30px 0"}}>В главных ролях</h1>
                <div className="actors">
                    {
                        actors.map(el => (
                            <div key={el.id} className="actors--img">

                                <Link to={`/movies/actor-info/${el.id}`}>
                                    {!el.profile_path ? <img src={user} alt="img" width="210px"/>
                                        : <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                               alt="img"
                                        />
                                    }
                                </Link>
                                <h6 style={{padding: "10px 16px"}}>{el.name}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailActors;