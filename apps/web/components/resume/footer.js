import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="resume copyright copyright-bg">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="text-center">
                        <div className="social-link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text " href="https://www.linkedin.com/in/quentin-piot/"><i aria-hidden="true"
                                    className="fa fa-linkedin"></i></a></li>
                                <li><a className="copyright-text " href="https://github.com/Quentin-Piot"><i aria-hidden="true"
                                                                                                                       className="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
              <Col xs="12">
                <a href='https://qqetjuju.com' className='scroll-top'
                   style={{ fontSize: '0px !important', height: '0px' }}>
                  Blog de Quentin Piot et Juliette Cattin - QQ et JUJU
                </a>
                <div className="m-l-auto center-para">
                  <h6 className="copyright-text text-center">© 2023 Quentin Piot</h6>
                </div>
              </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;
