import React from "react"

import PropTypes from "prop-types"
import { Row, Col } from "react-bootstrap"

import hex from "../../images/slides/hex.png"
import "./style.css"


const PageHeader = ({ pageTitle, pagePolygon }) => {
    
    return (
        <>
            <div className="container">
                <Row className="justify-content-center">
                    <Col md="12">
                        <div className=""><img className="geometric-page" src={pagePolygon} alt="" /></div>
                        <h1 className="page-title f-bold text-uppercase text-center">{pageTitle}</h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

PageHeader.propTypes = {
    pageTitle: PropTypes.string,
    pagePolygon: PropTypes
}

PageHeader.defaultProps = {
    pageTitle: ``,
    pagePolygon: ``,
}

export default PageHeader