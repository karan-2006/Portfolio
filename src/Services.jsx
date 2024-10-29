import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe, faHeadset, faPalette, faMedal} from '@fortawesome/free-solid-svg-icons';

function Services() {

    return(

        <div className="container-fluid position-relative col-xs pt-1 col-lg pt-5" id="services">
            <center className="pt-3">
                <h3 className='display-3 text-primary'>My Services</h3>
                <h6 className="display-6 text-success col-xs fs-6 col-lg fs-3">Lorem ipsum dolor sit amet</h6>
                <hr className='w-25' />
            <div className="container">
            <div className="row pt-3">
                <div className="col-xs-12 col-lg-6 pt-3">
                <div className="card border border-secondary bg-dark">
                <center>
                <FontAwesomeIcon icon={faPalette} size="2x" className='pt-4 text-danger'/>
                    <div className="card-body">
                        <h5 className='card-title text-light col-xs fs-6 col-lg fs-3'>WEB DESIGN</h5>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur <br />
                         adipiscing elit. doloribus assuenda <br /> voluptas</p>
                    </div>
                    </center>
                </div>
                </div>
                <div className=" col-xs-12 col-lg-6 pt-3">
                <div className="card border border-secondary bg-dark">
                <center>
                <FontAwesomeIcon icon={faGlobe} size='2x' className='pt-4 text-danger'/>
                    <div className="card-body">
                        <h5 className='card-title text-light col-xs fs-6 col-lg fs-3'>WEB DEVELOPMENT</h5>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur <br />
                         adipiscing elit. doloribus assuenda <br /> voluptas</p>
                    </div>
                    </center>
                </div>
                </div>
                <div className="col-xs-12 col-lg-6 pt-3">
                <div className="card border border-secondary bg-dark">
                <center>
                <FontAwesomeIcon icon={faMedal} size='2x' className='pt-4 text-danger'/>
                    <div className="card-body">
                        <h5 className='card-title text-light col-xs fs-6 col-lg fs-3'>CREATIVE DESIGN</h5>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur <br />
                         adipiscing elit. doloribus assuenda <br /> voluptas</p>
                    </div>
                    </center>
                </div>
                </div>
                <div className="col-xs-12 col-lg-6 pt-3">
                <div className="card border border-secondary bg-dark">
                    <center>
                    <FontAwesomeIcon icon={faHeadset} size='2x' className='pt-4 text-danger'/>
                    <div className="card-body">
                        <h5 className='card-title text-light col-xs fs-6 col-lg fs-3'>24 X 7 SUPPORT</h5>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur <br />
                         adipiscing elit. doloribus assuenda <br /> voluptas</p>
                    </div>
                    </center>
                </div>
                </div>
            </div>
            </div>
            </center>
        </div>

    )
    
}

export default Services