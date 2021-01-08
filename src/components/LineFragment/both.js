import React from "react"
import outlineDot from "../../images/icons/polygon-outline-dot.png"
import {Row} from "react-bootstrap"

export const LineFragmentBoth = () => (
<>
<div className="container">
            <Row data-sal="slide-down" className="line-cut" style={{marginTop: "50px", padding: "0"}}>
                <img src={outlineDot} />
            </Row>
        </div>
        <div
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="50"
            className="vertical-line"
            style={{
                position: "relative",
                top: "0"
            }}> </div>
        <div className="container">
            <Row data-sal="slide-down" className="line-cut" style={{padding: "0"}}>
                <img src={outlineDot} />
            </Row>
        </div>
</>
)

export default LineFragmentBoth