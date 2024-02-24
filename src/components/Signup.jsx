import React from 'react'
import './css/Signup.css'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='signup'>
      <div className="group">
        <h3 className="headline">Lets Join </h3>

        <form  className="sigin" onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" {...register("fname",{required:true,minLength:{value:2,message:"Min Lenght is 2"}, pattern:{value: /[A-Za-z]/ ,message:"Only Alphabet"} })} className="in-text"  id="fname" name="fname" placeholder='Ex - Utsav'/><br/>
        {errors.fname && <div className='err'>{errors.fname.message}</div>}
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" {...register("lname",{required:true,minLength:{value:2,message:"Min Lenght is 2"}, pattern:{value: /[A-Za-z]/ ,message:"Only Alphabet"} })} className="in-text"  id="lname" name="lname" placeholder='Ex - Singh'/><br/><br/>
        {errors.lname && <div className='err'>{errors.lname.message}</div>}
        <label htmlFor="email">Email:</label><br/>
        <input type="email" {...register("email",{required:true,minLength:{value:6,message:"min Lenght is 6"}, pattern:{value: /@[A-Za-z]/ ,message:"Required @"} })} className="in-text" placeholder='Email address' />
        {errors.email && <div className='err'>{errors.email.message}</div>}
        <label htmlFor="date-of-birth">Date of Birth:</label><br/>
        <input type="date" {...register("dob", { valueAsDate: true,})} className="in-text"  id="dob" name="dob" /><br/><br/>
        <label htmlFor="tel">Phone number:</label><br/>
        <input type="tel" className="in-text" {...register("tel",{required:true,minLength:{value:10,message:"Min Lenght is 10"},maxLength:{value:10,message:"Max Lenght is 10"}, pattern:{value: /[0-1]/ ,message:"Only Numbers"} })}  id="tel" name="tel" placeholder='Ex-999953334' /><br/><br/>
        {errors.tel && <div className='err'>{errors.tel.message}</div>}
        <label htmlFor="lname" >Profession:</label><br/>
        <select {...register("profession", { required: true,})}id="Profession" name="Profession">
        <option value="Employee">Employee</option>
        <option value="employer">employer</option>
        </select>
        <label htmlFor="cneu">Company Name or Education University:</label><br/>
        <input type="text"{...register("cneu",{required:true,minLength:{value:4,message:"Min Lenght is 4"} })}  className="in-text"  id="cneu" name="cneu" placeholder='Ex - Jaypee Insitiute of Technology' /><br/><br/>
        {errors.cneu && <div className='err'>{errors.cneu.message}</div>}
        <label htmlFor="lname">Password:</label><br/>
        <input type="password" {...register("password",{required:true,minLength:{value:6,message:"Min Length is 6"}})} className="in-text"  id="password" name="password" placeholder='password' /><br/><br/>
        {errors.password && <div className='err'>{errors.password.message}</div>}
        <button type='submit' value='Submit' className='filter-btn hbtn flt-grp'>Submit</button>
        <button type='reset' className='filter-btn hbtn flt-grp'>Reset</button>
        </form>

     </div>
    </div>
  )
}

export default Signup
