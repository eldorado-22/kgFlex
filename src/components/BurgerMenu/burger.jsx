import React from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";

const BurgerMenu = ({burger, setBurger}) => {
    return (
        <div className="menu" style={{
            left: !burger ? '-2000px' : ''
        }}>
            <div className="burgerMenu">
                <div className="burgerMenu--group">
                    <h1 onClick={() => setBurger(!burger)}>BookShop</h1>
                    <NavLink to={""}>
                        <AiOutlineClose className='burgerMenu--group__icon' onClick={() => setBurger(!burger)}/>
                    </NavLink>
                </div>

                <NavLink to={"/categories"}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <h3>Categories</h3>
                    </div>
                </NavLink>

                <NavLink to={'/recent'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <h3>Recent</h3>
                    </div>
                </NavLink>

                <NavLink to={'/books'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <h3>Books</h3>
                    </div>
                </NavLink>

                <NavLink to={'/about'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <h3>About Us</h3>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default BurgerMenu;