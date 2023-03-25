import React, {useContext, useEffect, useState} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import './header.scss'
import {FiSearch} from "react-icons/fi";
import {LanguageContext} from "../../Context";
import {BsFillPlayFill} from "react-icons/bs";

// import kg from './../../assets/img/kgz.png'

function NavScrollExample({setMode, mode}) {
    const [search, setSearch] = useState(true)
    const [scroll, setScroll] = useState(true)
    const {setLanguage} = useContext(LanguageContext)
    const [modal, setModal] = useState(false)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    })

    return (
        <header style={{
            backdropFilter: scroll > 40 ? 'blur(20px)' : '',
            // background: scroll > 60 ? "black" : ''
        }} id="header">
            <div className="container">

                <div className="header d-flex">
                    <Link to={"/"}>
                        <h1>KG FLEX</h1>
                    </Link>

                    <Navbar className="header--navbar">
                        <Link to={"/"}>
                            Home
                        </Link>
                        <Link to={"/popular"}>
                            Popular
                        </Link>
                        <Link to={"/top-rated"}>
                            Top Rated
                        </Link>
                        <Link to={"/now-playing"}>
                            Now PLaying
                        </Link>
                    </Navbar>

                    <select onChange={e => setLanguage(e.target.value)} className="header--language">
                        <option value="en-US">English</option>
                        <option value="ru-RU">Русский</option>
                    </select>

                    <div className="header--signUp">
                        <button onClick={() => {
                            setModal(true)
                        }}> Sign Up
                        </button>
                    </div>

                    <div className="header--search" style={{
                        display: modal === true ? "block" : "none",
                    }}>
                        <div className="header--search__exit">
                            <h2>Sign UP</h2>
                            <button onClick={() => {
                                setModal(false)
                            }} className="popular--search__getBtn">&times;
                            </button>
                        </div>


                        <div className="header--search__inputS">
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Name"/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className="header--search__password">
                            <a href="#">Forgot Password?</a>
                            <button type="submit">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavScrollExample;