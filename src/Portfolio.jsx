import waterDrop from './assets/Water-drop.jpg'



function Portfolio() {

    return(
        <div className="container-fluid">
            <center>
                <h3 className="display-3 text-primary">Portfolio</h3>
                <h6 className="display-6 text-secondary">See My Works - Lorem ipsum dolor</h6>
                <hr className="w-25"/>
                <div className="container">
                    <button className="btn btn-outline-light m-5" type="button">ALL</button>
                    <button className="btn btn-outline-light m-5" type="button">PROJECT</button>
                    <button className="btn btn-outline-light m-5" type="button">WEBSITE</button>  
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={waterDrop} className="card-img" alt="..."/>
                                <div id="cardone" className="container" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    <div className="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                        <h5 className="card-title text-light">Pottery</h5>
                                        <p className="card-text text-warning">Designing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal bg-dark bg-opacity-25 fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Pottery</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className='modal-text px-5 py-5'>Lorem Ipsum is simply dummy text
                                              of the printing and typesetting industry. Lorem Ipsum
                                               has been the industry's standard dummy text
                                              ever since the 1500s.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">
                                            <a className=' text-secondary text-decoration-none' href="">View Project</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={waterDrop} className="card-img" alt="..."/>
                                <div id="cardtwo" className="container" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    <div className="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                        <h5 className="card-title text-light">Fighter Jet</h5>
                                        <p className="card-text text-warning">Designing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal bg-dark bg-opacity-25 fade w-100" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Fighter Jet</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="row">
                                <div className="col-1 px-3 py-5">
                                <img className="px-1" src={waterDrop} width={100} height={200} alt="..."/>
                                </div>
                                <div className="col-11">
                                    <div className="modal-body">
                                        
                                        <p className='modal-text px-5 py-5'>Lorem Ipsum is simply dummy text
                                              of the printing and typesetting industry. Lorem Ipsum
                                               has been the industry's standard dummy text
                                              ever since the 1500s.</p>
                                        
                                        <button type="button" className="btn btn-outline-light">
                                            <a className=' text-secondary text-decoration-none' href="">View Project</a>
                                        </button>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={waterDrop} className="card-img" alt="..."/>
                                <div id="cardthree" className="container" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    <div className="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                        <h5 className="card-title text-light">Project Title</h5>
                                        <p className="card-text text-warning">Designing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal bg-dark bg-opacity-25 fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className='modal-text px-5 py-5'>Lorem Ipsum is simply dummy text
                                              of the printing and typesetting industry. Lorem Ipsum
                                               has been the industry's standard dummy text
                                              ever since the 1500s.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">
                                            <a className=' text-secondary text-decoration-none' href="">View Project</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={waterDrop} className="card-img" alt="..."/>
                                <div id="cardfour" className="container" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                    <div className="card-img-overlay bg-dark bg-opacity-75 my-2 mx-3">
                                        <h5 className="card-title text-light">Project Title</h5>
                                        <p className="card-text text-warning">Designing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal bg-dark bg-opacity-25 fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className='modal-text px-5 py-5'>Lorem Ipsum is simply dummy text
                                              of the printing and typesetting industry. Lorem Ipsum
                                               has been the industry's standard dummy text
                                              ever since the 1500s.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">
                                            <a className=' text-secondary text-decoration-none' href="">View Project</a>
                                        </button>
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