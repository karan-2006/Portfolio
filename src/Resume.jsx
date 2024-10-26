
import React, { useState, useEffect } from 'react';

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
        <>
        <div className="container-fluid py-5 text-light">
        <center>
        <h3 className="display-3 text-primary">My Resume</h3>
        <h6 className="display-6 text-secondary">Lorem ipsum dolor sit amet</h6>
        <hr className="w-25"/>
        </center>
        <h4 className="border border-light d-inline-block p-2">EDUCATION</h4>
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            
            <div className="card bg-secondary bg-gradient text-light d-none d-md-block m-5 p-5">
                <h4 className="card-title text-info">2016-2017</h4>
                <h5 className="card-title">SSLC - AVICHI Higher Seondary School</h5>
                <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item">
            
            <div className="card bg-secondary  bg-gradient text-light d-none d-md-block m-5 p-5">
              <h4 className="card-title text-info">2018-2019</h4>
              <h5 className="card-title">HSC - AVICHI Higher Seondary School</h5>
              <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item">

            <div className="card bg-secondary bg-gradient text-light d-none d-md-block m-5 p-5">
                <h4 className="car-title text-info">2019-2023</h4>
                <h5 className="card-title">B.E - DMI College of Engineering</h5>
                <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
        </div>
        </div>

        <div className="row py-5">
          <div className="col">
            <h4 className="border border-light d-inline-block p-2">MY SKILLS</h4>
            <div className="row">
              <div className="col py-2 list-unstyled">
                <li className="py-2">HTML</li>
                <li className="py-2">BOOTSTRAP</li>
                <li className="py-2">PYTHON</li>
                <li className="py-2">NODE JS</li>
                <li className='py-2'>REACT JS</li>
              </div>
              <div className="col py-2 list-unstyled">
                <li className="py-2">CSS</li>
                <li className="py-2">JAVASCRIPT</li>
                <li className="py-2">DJANGO</li>
                <li className="py-2">EXPRESS JS</li>
                <li className="py-2">MongoDB</li>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="border border-light d-inline-block p-2">FUN FACTS</h4>
            <div className="row py-2">
              <div className="col-6 py-2">
                <nav aria-label="...">
                  <ul className="pagination pagination-lg">
                    <li className="page-item p-3 border border-light">
                      <img src="" alt="..."/>
                    </li>
                    <li className="page-item p-3 border border-light">
                      <h5>{clients}</h5>
                      <p>Happy Clients</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 py-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg">
                    <li className="page-item p-3 border border-light">
                      <img src="" alt="..." />
                    </li>
                    <li className="page-item p-3 border border-light">
                      <h5>{awards}</h5>
                      <p>Awards Achieved</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 py-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg">
                    <li className="page-item p-3 border border-light">
                      <img src="" alt="..." />
                    </li>
                    <li className="page-item p-3 border border-light">
                      <h5>{projects}</h5>
                      <p>Projects Done</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 py-2">
              <nav aria-label="...">
                  <ul className="pagination pagination-lg">
                    <li className="page-item p-3 border border-light">
                      <img src="" alt="..." />
                    </li>
                    <li className="page-item p-3 border border-light">
                      <h5>{ratings}</h5>
                      <p className="pe-4">User Rattings</p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  
      
    )
    
}
export default Resume