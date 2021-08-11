import React from 'react';
import { Link } from "react-router-dom";
import Tittle from "./Tittle";
import logo from "./logo.svg";

const Menu = () => {
    return (
        <header className="App-header ">
            <img src={logo} className="App-logo" alt="logo" />
            <Tittle text={"Привет!"} />
            <ul>
                <li>
                    <Link to="/profile">profile</Link>
                </li>                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gists">Gists</Link>
                </li>

            </ul>
        </header>
    );
}

export default Menu;