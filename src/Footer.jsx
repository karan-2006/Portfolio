import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faPinterestP} from '@fortawesome/free-brands-svg-icons';
function Footer(){
    
    return(
        <footer>
            <center className="col-xs mt-1 pt-1 col-lg mt-3 pt-3">
                
                <h4 className="display-4 text-danger">Karan Kumar</h4>
                <blockquote>
                <p className="text-secondary col-xs pt-1 col-lg pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h5 className="text-info col-xs pt-1 col-lg pt-3">
                <FontAwesomeIcon icon={faFacebookF} className="text-primary col-lg fs-3 pe-3 col-md fs-3 col-xs fs-6 pe-1"/>
                <FontAwesomeIcon icon={faTwitter} className="text-primary col-lg fs-3 pe-3 ol-md fs-3 col-xs fs-6 pe-1"/>
                <FontAwesomeIcon icon={faLinkedinIn} className="text-primary col-lg fs-3 col-md fs-3 col-xs fs-6"/>
                <FontAwesomeIcon icon={faInstagram} className="text-primary col-lg fs-3 ps-3 col-md fs-3 col-xs fs-6 ps-1"/>
                <FontAwesomeIcon icon={faPinterestP} className="text-primary col-lg fs-3 ps-3 col-md fs-3 col-xs fs-6 ps-1"/>
                </h5>
                <hr />
                </blockquote>
                <h6 id="foot">Copyright &copy; MyPortfolio. All rights reserved</h6>
            </center>
        </footer>
    )

}

export default Footer