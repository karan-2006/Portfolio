import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faPinterestP} from '@fortawesome/free-brands-svg-icons';
function Footer(){
    
    return(
        <footer className="mt-3 pt-3">
            <center>
                
                <h3 className="display-3 text-danger">Karan Kumar</h3>
                <blockquote>
                <p className="text-secondary py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h5 className="text-info pt-3">
                <FontAwesomeIcon icon={faFacebookF} size="xl" className="text-primary pe-3"/>
                <FontAwesomeIcon icon={faTwitter} size="xl" className="text-primary pe-3"/>
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" className="text-primary"/>
                <FontAwesomeIcon icon={faInstagram} size="xl" className="text-primary ps-3"/>
                <FontAwesomeIcon icon={faPinterestP} size="xl" className="text-primary ps-3"/>
                </h5>
                <hr />
                </blockquote>
                <h6>Copyright &copy; MyPortfolio. All rights reserved</h6>
            </center>
        </footer>
    )

}

export default Footer