import React from 'react'
import { Link } from 'react-router-dom' //changes the path of a route

const Navbar = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to={"/films"}>View Films</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/people"}>View People</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar