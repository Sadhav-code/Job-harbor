import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx';
import Footer from './components/Footer.jsx';
import UserDash from './components/UserDashboard.jsx';
import Signup from './components/Signup.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App(probs) {
  const [user,setLoginUser] =useState({})
  console.log(user.Fname)
  const  router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Home/><Footer /> </>},
      {
      path:"/signin",
      element:<><Navbar /><Signin setLoginUser={setLoginUser} /><Footer /> </>},
      {path:"/userdashboard",
      element:<>{
        user && user._id ?<><Navbar /><UserDash setLoginUser={setLoginUser}  username = {user.Fname}  /><Footer /> </>:<><Navbar /><Home/><Footer /> </>
      }</>},
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
