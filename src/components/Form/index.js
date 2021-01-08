import React from "react"
import { Row, Col } from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./style.css"
import arrowRight from "../../images/icons/arrow-right.png"

export default class Form extends React.Component {
    state = {
        name: "",
        company: "",
        teste1: "",
        teste2: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        const teste1 = target.teste1
        const teste2 = target.teste2
        this.setState({
            [name]: value,
            [teste1]: value,
            [teste2]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`sucess ${this.state.PersonName} from ${this.state.company}`)
    }

    render() {
        return (
            <>
                <div
                    className="container"
                    data-sal="fade"
                    data-sal-duration="500"
                    data-sal-delay="50"
                    data-sal-easing="ease-in-sine"
                >
                    <Row>
                        <Col md="12">
                            <Tabs>
                                <TabList className="form-tabs-wrapper">
                                    <Row>
                                        <Tab className="form-tabs f-regular">1</Tab>
                                        <Tab className="form-tabs f-regular">2</Tab>
                                        <Tab className="form-tabs f-regular">3</Tab>
                                    </Row>
                                </TabList>
                                <form method="POST" action="https://getform.io/f/4f8e1359-9c7e-41cf-894e-ae73c0b6b99c" className="f-bold amazing-form" accept-charset="UTF-8">
                                    <TabPanel>
                                        Hello dear La Republica! <br />
                                        <label>
                                            My name is &nbsp;
                                <input
                                                type="text"
                                                name="PersonName"
                                                placeholder="type here"
                                                size="7"
                                                maxlenght="30"
                                                value={this.state.PersonName}
                                                onChange={this.handleInputChange} />
                                            &nbsp; and
                            </label><br />

                                        <label>
                                            I represent a company &nbsp;
                                <input
                                                type="text"
                                                name="company"
                                                placeholder="optional"
                                                size="6"
                                                maxlength="50"
                                                value={this.state.company}
                                                onChange={this.handleInputChange} />&nbsp;
                            </label>
                                        <Row noGutters className="justify-content-end">
                                            <Col md="6">
                                                <Tab></Tab>
                                                <Tab className="next-form f-medium">Next &nbsp;<img width="21px" src={arrowRight} /></Tab>
                                                {/* <button type="submit" className="submit-form next-form f-medium">
                                                    Submit
                                </button> */}
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                    <TabPanel>
                            <div>
                                <h1>FORM2</h1>
                                <input
                                                type="text"
                                                name="teste1"
                                                placeholder="type here"
                                                size="7"
                                                maxlenght="30"
                                                value={this.state.teste1}
                                                onChange={this.handleInputChange} />
                                <Tab></Tab>
                                <Tab></Tab>
                                <Tab  className="next-form f-medium">Next &nbsp;<img width="21px" src={arrowRight} /></Tab>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <h1>FORM3</h1>
                                <input
                                                type="text"
                                                name="teste2"
                                                placeholder="type here"
                                                size="7"
                                                maxlenght="30"
                                                value={this.state.teste2}
                                                onChange={this.handleInputChange} />
                                <button type="submit" className="submit-form next-form f-medium">
                                    Submit
                                </button>
                            </div>
                        </TabPanel>
                                </form>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}