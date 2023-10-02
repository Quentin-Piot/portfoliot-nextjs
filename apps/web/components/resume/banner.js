import React from 'react';
import Typewriter from 'typewriter-effect';
import {Container,Row,Col} from 'reactstrap';

const Banner = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink">
                <Container>
                    <Row>
                        <Col lg="5" md="6" className="m-t-50">
                            <img alt="" className="img-fluid set-abs bottom-0 right-0 top-0 m-t-30 m-b-50" src="/assets/images/resume/h7.jpg" />
                        </Col>
                        <Col lg="6" md="6" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># resume</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Fullstack Engineer</span><br /> Quentin Piot</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary d-flex">Javascript <span className="typed-resume">
                                        <Typewriter
                                            options={{
                                                strings:[', Typescript, Rust, Kotlin'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                            />
                                            {/* <Typed
                                                strings={['Css, Bootstrap, Java Script']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed> */}
                                            </span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">
                                            Fullstack Engineer well-versed in many different modern framework, languages and technologies among them we can find:
                                            <br/>- JavaScript/TypeScript with React, Redux, Next.js, Vue, VueX, Next …
                                            <br/>- Rust with Axum, Bevy, Tokio etc.
                                            <br/>- Java/Kotlin with Spring, Android development</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-white" href={"/cvs/CV_Quentin_PIOT_2023.pdf"} target={"_blank"}>Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default Banner;
