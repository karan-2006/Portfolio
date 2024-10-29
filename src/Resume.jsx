
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTrophy, faStar, faMedal } from '@fortawesome/free-solid-svg-icons';

function Resume() {

      const [clients, setClients] = useState(0);
      const [awards, setAwards] = useState(0);
      const [projects, setProjects] = useState(0);
      const [ratings, setRatings] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          if (clients < 300) setClients(clients + 1);
          if (awards < 250) setAwards(awards + 1);
          if (projects < 300) setProjects(projects + 1);
          if (ratings < 150) setRatings(ratings + 1);
        }, 40);

        return () => clearInterval(interval);
      }, [clients, awards, projects, ratings]);

    return(

        <div className="container-fluid position-relative pt-5 text-light" id="resume">
        <center className='pt-3'>
        <h3 className="display-3 text-primary">My Resume</h3>
        <h6 className="display-6 text-success col-xs fs-6 col-lg fs-3">Lorem ipsum dolor sit amet</h6>
        <hr className="w-25"/>
        </center>
        <h4 className="border border-info text-info d-inline-block col-lg p-2 col-xs p-1 fs-6">EDUCATION</h4>
        <div id="carouselExampleCaptions" className="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active col-lg m-2">
            
            <div className="card border border-secondary bg-dark text-light col-xs p-1 m-1 col-lg m-5 p-5">
                <h4 className="card-title text-warning col-lg fs-5 col-xs fs-6">2016-2017</h4>
                <h5 className="card-title col-lg fs-6 col-xs fs-6">SSLC - AVICHI Higher Seondary School</h5>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item col-lg m-2">
            
            <div className="card border border-secondary bg-dark text-light col-xs p-1 m-1 col-lg m-5 p-5">
              <h4 className="card-title text-warning col-lg fs-5 col-xs fs-6">2018-2019</h4>
              <h5 className="card-title col-lg fs-6 col-xs fs-6">HSC - AVICHI Higher Seondary School</h5>
              <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item col-lg m-2">

            <div className="card border border-secondary bg-dark text-light col-xs p-1 m-1 col-lg m-5 p-5">
                <h4 className="car-title text-warning col-lg fs-5 col-xs fs-6">2019-2023</h4>
                <h5 className="card-title col-lg fs-6 col-xs fs-6">B.E - DMI College of Engineering</h5>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
        </div>
        </div>

        <div className="row col-xs pt-1 col-lg pt-5">
          <div className="col-xs-12 col-lg-6">
            <h4 className="border border-info text-info d-inline-block p-2 col-xs fs-6">MY SKILLS</h4>
            <div className="row">
              <div className="col pt-2 list-unstyled">
                <li className="list-item text-warning py-2">HTML</li>
                <li className="list-item text-warning py-2">BOOTSTRAP</li>
                <li className="list-item text-warning py-2">PYTHON</li>
                <li className="list-item text-warning py-2">NODE JS</li>
                <li className='list-item text-warning py-2'>REACT JS</li>
              </div>
              <div className="col pt-2 list-unstyled">
                <li className="list-item text-warning py-2">CSS</li>
                <li className="list-item text-warning py-2">JAVASCRIPT</li>
                <li className="list-item text-warning py-2">DJANGO</li>
                <li className="list-item text-warning py-2">EXPRESS JS</li>
                <li className="list-item text-warning py-2">MONGO DB</li>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <h4 className="border border-info text-info d-inline-block p-2 col-xs fs-6">FUN FACTS</h4>
            <div className="row pt-2">
              <div className="col-xs-12 col-lg-6 pt-2">
                <nav aria-label="...">
                  <ul className="pagination pagination-lg border border-secondary bg-dark">
                    <li className="page-item p-4">
                    <FontAwesomeIcon icon={ faUserTie } size="2x" className="pt-3 text-danger"/>
                    </li>
                    <li className="page-item border-start border-secondary p-3">
                      <h5 className='text-warning'>{clients}</h5>
                      <p className='text-secondary'>Happy Clients</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xs-12 col-lg-6 pt-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg border border-secondary bg-dark">
                    <li className="page-item p-4">
                    <FontAwesomeIcon icon={ faTrophy } size="2x" className="pt-3 text-danger"/>
                    </li>
                    <li className="page-item border-start border-secondary p-3">
                      <h5 className='text-warning'>{awards}</h5>
                      <p className='text-secondary'>Awards Achieved</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xs-12 col-lg-6 pt-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg border border-secondary bg-dark">
                    <li className="page-item p-4">
                    <FontAwesomeIcon icon={ faMedal } size="2x" className="pt-3 text-danger"/>
                    </li>
                    <li className="page-item border-start border-secondary p-3">
                      <h5 className='text-warning'>{projects}</h5>
                      <p className='text-secondary'>Projects Done</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xs-12 col-lg-6 pt-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg border border-secondary bg-dark">
                    <li id='icon' className="page-item p-2">
                    <FontAwesomeIcon icon={ faStar } className="text-danger"/>
                    <FontAwesomeIcon icon={ faStar } size="xl" className="mt-4 text-danger"/>
                    <FontAwesomeIcon icon={ faStar } className="text-danger"/>
                    </li>
                    <li className="page-item border-start border-secondary p-3">
                      <h5 className='text-warning'>{ratings}</h5>
                      <p className="text-secondary col-md pe-0 col-lg pe-4">User Rattings</p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>


  
      
    )
    
}
export default Resume