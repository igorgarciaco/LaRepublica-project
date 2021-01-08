import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import ellusThumb from "../../images/work-details/ellus-thumb.png"
import nikeThumb from "../../images/work-details/nike-women.png"
import vivoThumb from "../../images/work-details/vivo-thumb.png"

import "./style.css"

const MoreWork = () => (
    <Row className="more-work">
        <Col md="4">
            <img src={ellusThumb} />
            <Link className="f-bold project-link">ELLUS MEN <br/>STORE</Link>
        </Col>
        <Col md="4">
            <img src={nikeThumb} />
            <Link className="f-bold project-link">NIKE WOMEN <br/>SOCCER</Link>
        </Col>
        <Col md="4">
            <img src={vivoThumb} />
            <Link className="f-bold project-link">VIVO MOBILE <br/>APP</Link>
        </Col>
    </Row>
)

export default MoreWork