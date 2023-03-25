import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import {useParams} from "react-router-dom";
import MovieCard from "../../components/MovieCard/movieCard";
import './search.scss'

const Search = () => {
    const [search, setSearch] = useState([])
    const {value} = useParams()
    const getSearch = async () => {
        try {
            const res = await  axios (`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${value}`)
            const {data} = await res
            await setSearch(data.results)
        }catch (e) {
            console.log(e, 'error')
        }
    }

    // console.log(search)

    useEffect(() => {
        getSearch()
    },[])



    return (
        <div id="search">
            <div className="container">
                <div className="search">
                    {
                        search.map(el => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;