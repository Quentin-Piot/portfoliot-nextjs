import React, { useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'

const Section = () => {
  const [loading, setLoading] = useState(true)

  const handleIframeLoad = () => {
    setLoading(false)
  }

  return (
    <section className="resume portfolio-section zoom-gallery">
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h6 className="font-primary borders main-text text-uppercase">
              <span>Portfolio</span>
            </h6>
            <div className="sub-title">
              <div>
                <h2 className="title-text">Projects</h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="porfolio-container" style={{ position: 'relative', width: '100%' }}>
            {loading && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Spinner */}
                <div className="spinner"></div>
              </div>
            )}
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQ6TgGL8FHIlSGr9Yuk-H1-kqabWy6aZd7vxbrVLzskqdfJeF9RM0VTh3PP1qzVbuZ5HYlvhauNrhqY/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              loading="lazy"
              onLoad={handleIframeLoad}
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #000;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

export default Section
