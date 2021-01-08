import React, { Component } from "react"
import Slider from "react-slick"
import { Row } from 'react-bootstrap';
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import './style.css'
import square from "../../images/slides/square.png"
import circle from "../../images/slides/circle.png"
import hex from "../../images/slides/hex.png"
import polygon from "../../images/slides/polygon.png"

export default class SlickSlider extends Component {

  render() {


    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: false
    };
    return (
      <div className="container">
        <Slider {...settings} className="slider-main">
          {/* slide 1 */}
          <div>
            <Row noGutters="true">
              <div className="slide">
                <div className="slider-text">
                  <h2 className="we-are">WE ARE</h2>
                  <h2 className="topic">RESEARCH</h2>
                </div>
              </div>
              <div className="geometric-box"><img className="square" src={square} alt="" /></div>
            </Row>
          </div>
          {/* fim slide 1 */}
          {/* slide 2 */}
          <div>
            <Row noGutters="true">
              <div className="slide">
                <div className="slider-text">
                  <h2 className="we-are">WE ARE</h2>
                  <h2 className="topic">UX & UI DESIGN</h2>
                </div>
              </div>
              <div className="geometric-box"><img className="circle" src={circle} alt="" /></div>
            </Row>
          </div>
          {/* fim slide 2 */}
          {/* slide 3 */}
          <div>
            <Row noGutters="true">
              <div className="slide">
                <div className="slider-text">
                  <h2 className="we-are">WE ARE</h2>
                  <h2 className="topic">STRATEGY</h2>
                </div>
              </div>
              <div className="geometric-box"><img className="polygon" src={polygon} alt="" /></div>
            </Row>
          </div>
          {/* fim slide 3 */}
          {/* slide 4 */}
          <div>
            <Row noGutters="true">
              <div className="slide">
                <div className="slider-text">
                  <h2 className="we-are">WE ARE</h2>
                  <h2 className="topic">LA REPUBLICA</h2>
                </div>
              </div>
              <div className="geometric-box"><img className="hex" src={hex} alt="" /></div>
            </Row>
          </div>
          {/* fim slide 4 */}
          {/* slide 4 */}
          <div>
            <Row noGutters="true">
              <div className="slide">
                <div className="slider-text">
                  <p className="f-light">See more about our <Link to="/work" className="f-bold">work</Link>,
                    </p>
                  <p className="f-light">
                    know our <Link to="/solutions" className="f-bold">solutions</Link> in experience design,
                    </p>
                  <p className="f-light">
                    discover <Link to="/about" className="f-bold">who we are</Link>, or&nbsp;
                    <Link to="/contact" className="f-bold">contact us</Link>.
                    </p>
                </div>
              </div>
              <div className="geometric-box"><img className="hex" src={hex} alt="" /></div>
            </Row>
          </div>
          {/* fim slide 4 */}
        </Slider>
      </div>
    );
  }
}