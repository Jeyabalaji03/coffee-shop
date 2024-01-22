import { Col, Container, Row, Button } from 'react-bootstrap';
import img from '../Assets/about.png';


const About = () => {

    const About1 = {
        head: "Our Story",
        txt1: "Explore the narrative behind coffeee.",
        txt: "Where each chapter is infused with passion, deticatio and the artistry of brewing. From the inception of our journey to the aroma that fills our space, every detail is a testament to love we pour into every cup.",
    }

    const About2 = {
        head1: "Our Vision",
        txt3: "Discover the vision that propels us forward a commitment to creating a welcome space where outstanding coffee becomes a catalyst for",
    }

    const { head, txt, txt1 } = About1;
    const { head1, txt3 } = About2;

    return (
        <div id="about">
            <div className='titles'>
                <h3 className="text-center about-txt">ABOUT US</h3>
                <h1 className="text-center">Serving Since 2003</h1>
            </div>
            <Container>
                <Row>
                    <Col sm={12} lg={4}>
                        <h3>{head}</h3>
                        <h4>{txt1}</h4>
                        <p>{txt}</p>
                        <Button variant="secondary">Learn More</Button>
                    </Col>

                    <Col sm={12} lg={4}>
                        <img src={img} alt="" height="95%" width="100%" />
                    </Col>
                    <Col sm={12} lg={4}>
                        <h3>{head1}</h3>
                        <p>{txt3}</p>
                        <h6>Community hub</h6>
                        <h6>catalyst for connection</h6>
                        <h6>customer-Centric approach</h6>
                        <br />
                        <Button variant="secondary">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;