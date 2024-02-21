import React, { useState,useEffect } from 'react';
import './css/Home.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { IoIosSearch } from "react-icons/io";

import {slides} from '../assets/Carouseldata.json';



function Carousel() {
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     nextSlide();
  //   }, 2000); // Timeout set to 2 seconds (2000 milliseconds)
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
)
    
}
function Home() {
  
  
  return (
    <div className='container' >
      <div className='group-container'>

          <Carousel/>
        <div className="search-overlay">
          <h2 className="search- headline">Find your dream job</h2>
          <p className="search-text">Search thousands of jobs with one simple search</p>
          {/* <div className='search'> */}
          <form className="Search-form">
            <IoIosSearch className='search-icon' />
            <button className="Search-btn " type="submit">Search</button>
            <input className="input-Search" type="search" placeholder="Job title, company" aria-label="Search" />
          </form>
          {/* </div> */}
        </div>
        <div className="emp-typ flt-grp">
          <h3 className="hom-heading">Employment type</h3>

          <div className="btn-group col-xs-12">
            <div className="select">
              <input type="checkbox" id="item_1"/>
                <label className="btn btn-warning button_select" htmlFor="item_1">Internship</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_2"/>
                <label className="btn btn-warning button_select" htmlFor="item_2">Full Time</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_3"/>
                <label className="btn btn-warning button_select" htmlFor="item_3">Part Time</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_4"/>
                <label className="btn btn-warning button_select" htmlFor="item_4">Freelance</label>
            </div>
          </div>

        </div>
        <div className="work-sec flt-grp">
          <h3 className="hom-heading">Remote work</h3>
          <div className="btn-group col-xs-12">
          <div className="select">
              <input type="checkbox" id="item_5" />
                <label className="btn btn-warning button_select" htmlFor="item_5">On-site</label>
            </div>
            <div className="select">
              <input type="checkbox" id="item_6"/>
                <label className="btn btn-warning button_select" htmlFor="item_6">On-site or Remote</label>
            </div>
            </div>
        </div>
        <div className="com-perks flt-grp">
          <h3 className="hom-heading">Company perks</h3>


          <div className="btn-group col-xs-12 ">
            <div className="select">
              <input type="checkbox" id="item_7"/>
                <label className="btn btn-warning button_select" htmlFor="item_7">Health Insurance</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_8"/>
                <label className="btn btn-warning button_select" htmlFor="item_8">Retirement Plan</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_9"/>
                <label className="btn btn-warning button_select" htmlFor="item_9">Flexible Hours</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_10"/>
                <label className="btn btn-warning button_select" htmlFor="item_10">Paid Time Off</label>
            </div>
            <div className="select">
              <input type="checkbox" id="item_11"/>
                <label className="btn btn-warning button_select" htmlFor="item_11">Professional Development</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_12"/>
                <label className="btn btn-warning button_select" htmlFor="item_12">Remote Work</label>
            </div>

            <div className="select">
              <input type="checkbox" id="item_13"/>
                <label className="btn btn-warning button_select" htmlFor="item_13">Wellness Programs</label>
            </div>
          </div>
        </div>
        <button className='filter-btn hbtn flt-grp'>Apply filters</button>

      </div>
      {/* <div className="container">
        <div  className="container">
        <a href="_blank"><img src={img1} alt="job harbor icon" width="1000" height="1000"/></a>
        </div>
      </div> */}
      {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
    </div>
  )
}

export default Home
