import React from 'react'
import './css/Footer.css'
function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4"> 
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Sign In</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Sign Up</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024 Job Harbor, Inc</p>
      </footer>
    </div>
  )
}

export default Footer
