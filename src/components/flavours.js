import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../Assets/image1x3.png'
import img2 from '../Assets/image3x3.png'
import img3 from '../Assets/image3x1.png'
import img4 from '../Assets/image3x4.png'
import img5 from '../Assets/image4x4.png'
import img6 from '../Assets/image2x2.png'
import img7 from '../Assets/image2x3.png'
import img8 from '../Assets/image4x1.png'




const Flavours = () => {
    return (
        <div className='flavours py-5 mb-4'>
            <div className='titles'>
                <h3>We have different flavours to choose from</h3>
                <h2>Choose your sytle / Choose your flavour</h2>
                </div>
            <Container>
                <Row>
                    <Col sm={6} lg={3}><img src={img1} alt='' /></Col>
                    <Col sm={6}lg={3}><img src={img2} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img3} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img4} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img5} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img6} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img7} alt='' /></Col>
                    <Col sm={6} lg={3}><img src={img8} alt='' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Flavours