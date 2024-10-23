import { useState } from "react"
function Resume() {

    return(

        <div className="container-fluid py-5 text-light">
        <center>
        <h3 className="display-3 text-primary">My Resume</h3>
        <h6 className="display-6 text-secondary">Lorem ipsum dolor sit amet</h6>
        <hr className="w-25"/>
        </center>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/*<img src={slide} className="d-block" style={{width:"100%",height:"300px"}} alt="..."/>*/}
      <div className="card bg-dark text-light d-none d-md-block">
        <div className=" card-body ms-5 ps-5">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/*<img src={slide} className="d-block" style={{width:"100%",height:"300px"}} alt="..."/>*/}
      <div className="card bg-dark text-light d-none d-md-block">
        <div className=" card-body ms-5 ps-5">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/*<img src={slide} className="d-block" style={{width:"100%",height:"300px"}} alt="..."/>*/}
      <div className="card bg-dark text-light d-none d-md-block">
      <div className=" card-body ms-5 ps-5">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
      </div>
      </div>
    </div>
  </div>
  {/*<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>*/}
</div>
      </div>
    )
    
}
export default Resume