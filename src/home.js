import { Link } from "react-router-dom";
import React from 'react';

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <div>
                <Link to="/login">Sign In</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}

export default Home;