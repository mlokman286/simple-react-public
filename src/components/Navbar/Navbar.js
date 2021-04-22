import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fst-italic" href="/home">
                       <span className="fs-3">F</span><FontAwesomeIcon icon={faFutbol} /><FontAwesomeIcon icon={faFutbol} />TBALLERS
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="/top-facts">Top Facts</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/team" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Teams
                                </a>
                                <ul className="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/home">Score</a></li>
                                    <li><a className="dropdown-item" href="/home">Schedule</a></li>
                                    <li><a className="dropdown-item" href="/home">Rankings</a></li>
                                    <li><a className="dropdown-item" href="/home">Players</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="/news" tabIndex="-1" aria-disabled="true">News</a>
                            </li>

                        </ul>

                        <form className="d-flex">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        
                        </form>
                    </div>
                </div>
            </nav> <hr/>
        </div>
    );
};

export default Navbar;