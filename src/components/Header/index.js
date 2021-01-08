import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"

import Logo from "../Logo"

import logo from "../../images/icons/lr-logo.svg"

import './style.css'
import links from "./content"

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <header>
        <Navbar expand="lg">
          <Navbar.Brand className="nav-logo">
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"
            className={this.state.active ? "navbar-close-icon" : null}
            onClick={() => this.setState({ active: !this.state.active })} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <div className="lr-logo-mobile">
              <Link to="/"><img src={logo} /></Link>
              </div>
              {links.map((link, i) => (
                <div className="link-item" key={i}>
                  <Link to={link.url} activeClassName="active" className="nav-link">{link.label}</Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// export default Header
