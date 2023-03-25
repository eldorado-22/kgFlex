import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/ApiKey";
import './actorsMovies.scss';
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../../Context";

const ActorsMovie = ({id}) => {
    // https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US

    const [moviesActors, setMoviesActors] = useState([])
    const {language} = useContext(LanguageContext)

    const getMoviesActors = async (id, key) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
        const {data} = await res
        setMoviesActors(data.cast)
    }


    useEffect(() => {
        getMoviesActors(id, APIKEY)
    }, [language])



    return (
        <div id="actorsMovies">
            <div className="container">
                <h1 style={{padding: "30px 0"}}>Известность за</h1>
                <div className="actorsMovies">

                    {/*{*/}
                    {/*    moviesActors.filter(m => m.poster_path).map(moviesActors => (*/}
                    {/*        <div className="actorsMovies--scroll">*/}
                    {/*          <NavLink to={`/movies/movies-info/${moviesActors.id}`}>*/}
                    {/*              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${moviesActors.poster_path}`}*/}
                    {/*                    alt="img"/>*/}
                    {/*          </NavLink>*/}
                    {/*            <h3>{moviesActors.title}</h3>*/}
                    {/*        </div>*/}
                    {/*    ))*/}

                    {/*}*/}

                    {
                        moviesActors.filter(m => m.poster_path).map(moviesActors => (
                            <div className="actorsMovies--scroll">
                                <NavLink to={`/movies/movies-info/${moviesActors.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${moviesActors.poster_path}`}
                                         alt="img"/>
                                </NavLink>
                                <h3 style={{padding: "25px 0"}}>{moviesActors.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ActorsMovie;