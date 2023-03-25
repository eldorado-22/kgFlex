import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import MovieCard from "../../components/MovieCard/movieCard";
import './topRated.scss'
import {LanguageContext} from "../../Context";
import {BsFillPlayFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const TopRated = ({setMode, mode}) => {
    const [topRated, setTopRated] = useState([])
    const [page, setPage] = useState(1)
    const {language} = useContext(LanguageContext)

    const [value, setValue] = useState("")

    const navigate = useNavigate()

    function goToSearch(){
        navigate(`/search/${value}`)
    }

    const getUpcoming = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await url
        setTopRated(data.results)
    }
    console.log(topRated)

    useEffect(() => {
        getUpcoming()
    }, [page, language])

    return (
        <div style={{
            background: mode ? 'rgba(222,13,13,0.7)' : 'black',
            color: mode ? 'white' : 'white'
        }} id="topRated">
            <div className="container">
                <div className="topRated--search">
                    <input onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                           onChange={(e) => setValue(e.target.value)} type="text"
                           placeholder="Search Movies"/>
                    <button onClick={() => goToSearch()} className="topRated--search__getBtn">Get Started
                        <BsFillPlayFill className="topRated--search__getBtn--play"/>
                    </button>
                </div>

                <div className="topRated">
                    {
                        topRated.map(el => <MovieCard el={el}/>)
                    }
                </div>
                <div className="topRated--page">
                    <button onClick={() => setPage(page === 1 ? page : page - 1)}>Back</button>
                    <p>page: {page}</p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;