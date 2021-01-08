import React from "react"
import { Row } from "react-bootstrap"

import outlineDot from "../../images/icons/polygon-outline-dot.png"

export const LineFragmentTop = () => (
<>
<div className="container">
            <Row data-sal="slide-down" className="line-cut dot-top" style={{marginTop: "50px", padding: "0", }}>
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
        
</>
)

export default LineFragmentTop