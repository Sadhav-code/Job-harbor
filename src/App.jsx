import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
// import Signin from './components/Signin.jsx';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <><div className='full-page'>

      <Navbar />
      <Home />
      <Footer />
    </div>
    </>
  )
}

export default App
