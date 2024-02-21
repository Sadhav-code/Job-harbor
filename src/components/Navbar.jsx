import React from 'react'
import brandicon from '../assets/brand_icon.png';
import './css/Navbar.css';

function Navbar(probs) {
    const buttonstyle = {

        backgroundColor:(28,145,242)
      
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="_blank"><img src={brandicon} alt="job harbor icon" width="140" height="50"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"  href="_blank">Browser Jobs <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="_blank">Start Hiring <span className="sr-only">(current)</span></a>
                        </li>
                        
                    </ul>
                        <button className="button-17" type="button">Sign In</button>
                        <button className="button-17" style={buttonstyle} type="button">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
