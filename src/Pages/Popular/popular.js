import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import MovieCard from "../../components/MovieCard/movieCard";
import './popular.scss'
import {LanguageContext} from "../../Context";
import {BsFillPlayFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
// import batman from './../../assets/img/batman.png'


const Popular = ({mode}) => {

    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)

    const [value, setValue] = useState("")

    const navigate = useNavigate()

    function goToSearch(){
        navigate(`/search/${value}`)
    }

    const getMovies = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await url
        setPopular(data.results)
    }
    console.log(popular)

    useEffect(() => {
        getMovies()
    }, [page, language])

    return (
        <div style={{
            background: mode ? 'rgba(222,13,13,0.7)' : 'black',
            color: mode ? 'black' : 'white'
        }} id="popular">
            <div className="container">
                <div className="popular--search">
                    <input onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                           onChange={(e) => setValue(e.target.value)} type="text"
                           placeholder="Search Movies"/>
                    <button onClick={() => goToSearch()} className="popular--search__getBtn">Get Started
                        <BsFillPlayFill className="popular--search__getBtn--play"/>
                    </button>
                </div>

                <div className="popular">

                    {
                        popular.map(el => <MovieCard el={el}/>)
                    }

                </div>

                <div className="popular--page">
                    <button onClick={() => setPage(page === 1 ? page : page - 1)}>Back</button>
                    <p>page: {page}</p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Popular;