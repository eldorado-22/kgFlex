import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import MovieCard from "../../components/MovieCard/movieCard";
import './nowPlaying.scss'
import {LanguageContext} from "../../Context";
import {BsFillPlayFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const NowPlaying = ({setMode,mode}) => {

    const [nowPlaying, setNowPlaying] = useState([])
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)


    const [value, setValue] = useState("")

    const navigate = useNavigate()

    function goToSearch(){
        navigate(`/search/${value}`)
    }


    const getNowPlaing = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await url
        setNowPlaying(data.results)
    }
    console.log(nowPlaying)

    useEffect(() => {
        getNowPlaing(page)
    }, [language])


    return (
        <div style={{
            background: mode ? 'rgba(222,13,13,0.7)' : 'black',
            color: mode ? 'black' : 'white'
        }} id="nowPlaying">
            <div className="container">
                <div className="nowPlaying--search">
                    <input onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                           onChange={(e) => setValue(e.target.value)} type="text"
                           placeholder="Search Movies"/>
                    <button onClick={() => goToSearch()} className="nowPlaying--search__getBtn">Get Started
                        <BsFillPlayFill className="nowPlaying--search__getBtn--play"/>
                    </button>
                </div>


                <div className="nowPlaying">
                    {
                        nowPlaying.map(el => <MovieCard el={el}/>)
                    }
                </div>
                <div className="nowPlaying--page">
                    <button onClick={() => setPage(page === 1 ? page : page - 1)}>Back</button>
                    <p>page: {page}</p>
                    <button  onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;