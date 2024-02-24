import React from 'react'
import {Link} from 'react-router-dom';
import brandicon from '../assets/brand_icon.png';
import './css/Navbar.css';

function Navbar(probs) {
    const buttonstyle = {

        backgroundColor:(28,145,242)
      
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={brandicon} alt="job harbor icon" width="140" height="50"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"  to="_blank">Browser Jobs <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="_blank">Start Hiring <span className="sr-only">(current)</span></Link>
                        </li>
                        
                    </ul>
                        <Link className="button-17" to='/signin'>Sign In</Link>
                        <Link className="button-17" style={buttonstyle} to='/signup'>Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
