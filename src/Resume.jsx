import { useState } from "react"
function Resume() {

    return(
        <>
        <div className="container-fluid py-5 text-light">
        <center>
        <h3 className="display-3 text-primary">My Resume</h3>
        <h6 className="display-6 text-secondary">Lorem ipsum dolor sit amet</h6>
        <hr className="w-25"/>
        </center>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="card bg-dark text-light d-none d-md-block m-5 p-5">
                <h4 classname="card-title">2016-2017</h4>
                <h5 className="card-title">SSLC - School</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <hr /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-dark text-light d-none d-md-block m-5 p-5">
              <h4 className="card-title">2018-2019</h4>
              <h5 className="card-title">HSC - School</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <hr /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-dark text-light d-none d-md-block m-5 p-5">
                <h4 className="car-title">2019-2023</h4>
                <h5 className="card-title">B.E - College</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do <hr /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </>
  
      
    )
    
}
export default Resume