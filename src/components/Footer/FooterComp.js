import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const FooterComp = () => {
  return (
    <div className="footer pb-7 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold fs-4 text-white">Abing's</h3>
          </Col>
          <Col className="text-end">
            <i class="fa-brands fa-instagram text-white mx-lg-3 fs-2 mx-2"></i>
            <i class="fa-brands fa-whatsapp text-white  mx-lg-3 fs-2  mx-2"></i>
            <i class="fa-regular fa-envelope text-white  mx-lg-3 fs-2  mx-2"></i>
            <i class="fa-brands fa-facebook text-white  mx-lg-3 fs-2  mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">&copy; Copyright by Abill untuk UAS Front-end, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComp