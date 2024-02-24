import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx';
import Footer from './components/Footer.jsx';
import Signup from './components/Signup.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const  router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Home/><Footer /> </>},
      {
      path:"/signin",
      element:<><Navbar /><Signin/><Footer /> </>},
      {path:"/signup",
      element:<><Navbar /><Signup/><Footer /> </>
    }])
  return (
    <><div className='full-page'>
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
      {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
