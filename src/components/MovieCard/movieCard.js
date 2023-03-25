import React from 'react';
import {NavLink} from "react-router-dom";
import './movieCard.scss'

const MovieCard = ({el}) => {
    return (
        <div id='movieCard'>
            <div className='container'>
                <div className='movieCard'>
                    <NavLink to={`/movies/movies-info/${el.id}`}>
                        <img width={330} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;