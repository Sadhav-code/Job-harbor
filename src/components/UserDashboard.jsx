import React from 'react'
import Slider from "react-slick";
import { feat } from '../assets/Featuredata.json';

import { IoIosSearch } from "react-icons/io";
import './css/UserDashboard.css'


function UserDashboard(props,{ setLoginUser }) {
  let date = new Date();
  let hour = date.getHours();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  let greeting;
  if (hour < 5) {
    greeting = "Hey Good Evening";
  } else if (hour < 12) {
    greeting = "Hey Good Morning";
  } else if (hour < 17) {
    greeting = "Hey Good Afternoon";
  } else {
    greeting = "Hey Good Evening";
  }
  

  return (
    <div className='UserDash'>
      <div className="sidebar">
        <div id="mySidenav" className="sidenav">
          {/* <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a> */}
          <a href="#">Dashboard</a>
          <a href="#">Applied job</a>
          <a href="#">Profile</a>
          <a href="#">Blog</a>
          <form className="Search-form-dash">
            <IoIosSearch className='search-icon-dash' />
            <input className="input-Search-dash" type="search" placeholder="Job title, company" aria-label="Search" />
          </form>
          <button id='learn' >Search</button>

        </div>
      </div>
      <div className="dash-cont">

        <div className="dashview">
          <div className="intro">
          {/* {hour < 12 ? "Good Morning" : "Good evening"} */}
            <h1>{greeting}, {props.username} </h1>
          </div>
          <div className="btn">

            <button className='btn-post'>New Job</button>
            <button id='learn' onClick={() => setLoginUser({})}>Sign out</button>
          </div>
          <div className="suggestion">
            <h3 className="headline">Job suggestions based on your profile</h3>
            <div className="sugge-cont">
              <Slider {...settings}>
                {feat.map((d, idx) => (
                  <div className='card-profile' key={idx}>
                    <div className='feat-cont-img'>
                      <img className='feat-img' src={d.src} key={idx} alt={d.alt} />
                    </div>
                    <div className='profile-card-text'>
                      <dl className='profile-card-text'>
                        <dt>{d.post}</dt>
                        <dd>{d.company}</dd>
                      </dl>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="application-data">
            <h3 className="headline">Your Application</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserDashboard
