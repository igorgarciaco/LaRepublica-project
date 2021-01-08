import React from "react"
import PropTypes from "prop-types"

import { Col } from "react-bootstrap"

import "./style.css"

const ServicesIcon = ({ iconName, iconLabel }) => {

    return (
        <>
            <Col xs="6" md="3">
                <div className="service-icon-wrapper">
                    <div className="service-border-icon">
                        <img className="service-icon" src={iconName}></img>
                    </div>
                    <p className="f-semi-bold icon-label text-uppercase">{iconLabel}</p>
                </div>
            </Col>
        </>
    )
}
ServicesIcon.propTypes = {
    iconLabel: PropTypes.string,
    iconName: PropTypes,
}

ServicesIcon.defaultProps = {
    iconName: ``,
    iconLabel: ``,
}

export default ServicesIcon