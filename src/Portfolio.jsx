import waterDrop from './assets/Water-drop.jpg'


function Portfolio() {

    return(
        <div className="container-fluid">
            <center>
                <h3 className="display-3 text-primary">Portfolio</h3>
                <h6 className="display-6 text-secondary">See My Works - Lorem ipsum dolor</h6>
                <hr className="w-25"/>
                <div className="container">
                    <button className="btn btn-outline-light m-5" type="button">PROJECT</button>
                    <button className="btn btn-outline-light m-5" type="button">WEBSITE</button>  
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src={waterDrop} class="card-img" alt="..."/>
                                <div id='cardone' className="container">
                                <div class="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                    <h5 class="card-title">Project Title</h5>
                                    <p class="card-text text-warning">Designing</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src={waterDrop} class="card-img" alt="..."/>
                                <div id="cardtwo" className="container">
                                <div class="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                    <h5 class="card-title">Project Title</h5>
                                    <p class="card-text text-warning">Designing</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src={waterDrop} class="card-img" alt="..."/>
                                <div id='cardthree' className="container">
                                <div class="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                    <h5 class="card-title">Project Title</h5>
                                    <p class="card-text text-warning">Designing</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src={waterDrop} class="card-img" alt="..."/>
                                <div id='cardfour' className="container">
                                <div class="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                    <h5 class="card-title">Project Title</h5>
                                    <p class="card-text text-warning">Designing</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
    
}
export default Portfolio