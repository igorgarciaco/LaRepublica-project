import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "./style.css"

const FooSocial = () => {
    const fb = <FontAwesomeIcon icon={faFacebookSquare} />
    const ig = <FontAwesomeIcon icon={faInstagram} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    return (
        <>
            <div>
                <a className="foo-social-icon" href="https://www.facebook.com/larepublicamkt/">
                    {fb}
                </a>
                <a  className="foo-social-icon" href="https://www.linkedin.com/company/la-republica-ux-studio">
                    {linkedin}
                </a>
                <a  className="foo-social-icon" href="https://www.instagram.com/soularepublica/">
                    {ig}
                </a>
                
            </div>
        </>
    )
}

export default FooSocial