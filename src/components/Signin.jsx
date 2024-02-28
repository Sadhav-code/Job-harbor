import React from 'react'
import { useForm } from "react-hook-form"
import './css/Signin.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Signin({setLoginUser}) {

  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()
  const onSubmit = (data) => {axios.post("http://localhost:3000/Login",data).then(res=>{alert(res.data.message),setLoginUser(res.data.user),navigate('/userdashboard')});}
  return (
    <div className="signin">
      <div className="Ingroup">
        <h3 className="headline">Welcome back</h3>
        <form className="sigin" onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="email">Email Address:</label><br />
          <input type="email" {...register("email",{required:true,minLength:{value:6,message:"min Lenght is 6"}, pattern:{value: /@[A-Za-z]/ ,message:"Required @"} })} className="in-text-in" placeholder='Email address' />
          {errors.email && <div className='err'>{errors.email.message}</div>}
          <label htmlFor="password">Password:</label><br />
          <input type="text" {...register("password",{required:true,minLength:{value:5,message:"Min Length is 6"}})} className="in-text-in" placeholder='Password' />
          {errors.password && <div className='err'>{errors.password.message}</div>}
          <button type='submit' value='Submit' className='filter-btn hbtn flt-grp'>Sign in</button>
          <a href="_blank" className="forget link">Forgot your password?</a>
          <a href="_blank" className="dont-account link-in">Don't have an account?</a>
        </form>
        {/* <h3 className="headline3"></h3> */}

      </div>
    </div>
  )
}

export default Signin
