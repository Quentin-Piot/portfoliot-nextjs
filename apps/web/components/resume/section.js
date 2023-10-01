import React from 'react'
import { Col, Row } from 'reactstrap'

const Section = () => (
  <section className='resume portfolio-section zoom-gallery'>
    <Row>
      <Col md='8' className='offset-md-2'>
        <div className='title title2'>
          <h6 className='font-primary borders main-text text-uppercase'><span>Porfolio</span></h6>
          <div className='sub-title'>
            <div>
              <h2 className='title-text'>Projects</h2>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md='8' className='offset-md-2'>
        <div className='porfolio-container'>
          <iframe
            src='https://docs.google.com/presentation/d/e/2PACX-1vQ6TgGL8FHIlSGr9Yuk-H1-kqabWy6aZd7vxbrVLzskqdfJeF9RM0VTh3PP1qzVbuZ5HYlvhauNrhqY/embed?start=false&loop=false&delayms=3000'
            frameBorder='0' allowFullScreen='true' mozallowfullscreen='true'
            webkitallowfullscreen='true'></iframe>
        </div>
      </Col>
    </Row>
  </section>
)


export default Section
