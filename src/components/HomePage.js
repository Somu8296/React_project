import React from "react";
import Logo from '../assets/images/logo.png'
import '../styles/home.css'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home">
            <div className="headerContainer">

                <img src={Logo} />

                <h1>Library Management System</h1>
                <p>The only thing that you absolutely have to know, is the location of the library.</p>
                <Link to="/adminLogin">  <button>Admin</button></Link>
                <Link to="/userLogin"><button>User</button></Link>

            </div>
        </div>
    );
}

export default HomePage;