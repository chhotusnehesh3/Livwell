// import { Header } from "./Header";
// import { Container } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import NavigationBar from './NavigationBar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
export default function Hostel(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    
    return (
        
        <div>

            <NavigationBar/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                <Modal.Body>We have received your inquiry and will provide you with the details via email and mobile number.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Ok
                    </Button>
                    
                </Modal.Footer>
                
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                <Modal.Body>Thank you for your subscription. We will notify you when new data is uploaded to our website. </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="primary" onClick={handleClose1}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container id='ContainerH1'>
                <Row>
                    <Col lg='5'>
                        
                        <img src='images1/mini.png' width='100px' alt='mini'></img>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile no.</Form.Label>
                                <Form.Control type="tel" placeholder="Enter Mobile No." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleShow}>
                            Equire Now
                            </Button>
                        </Form>
                    </Col>
                    <Col lg='1'>

                    </Col>
                    <Col lg='6'>
                        <img src='images1/HostelG1.jpg' id='imgG1' alt='hostel'></img>
                    </Col>
                </Row>

            </Container>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/Hostel1.jpg"
                        alt="First slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h5>Top Hostel 1</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/Hostel2.jpg"
                        alt="Second slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h5>Top Hostel 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/Hostel4.jpg"
                        alt="Third slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h5>Top Hostel 3</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/Hostel3.jpg"
                        alt="Third slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h5>Top Hostel 4</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container id='container1'>
                <h1 id='prime'><strong>Prime</strong> Amenities</h1>
                <Row>
                    <Col>
                        <img src='images1/CCTV.png'></img>
                        <p>CCTV</p>
                    </Col>
                    <Col>
                        <img src='images1/Healthyfood.png'></img>
                        <p>Healthy Food</p>
                    </Col>
                    <Col>
                        <img src='images1/Laundry.png'></img>
                        <p>Laundry Zones</p>
                    </Col>
                    <Col>
                        <img src='images1/Studyzone.png'></img>
                        <p>Study Zones</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src='images1/Wifi.png'></img>
                        <p>Hi Speed Wifi</p>
                    </Col>
                    <Col>
                        <img src='images1/Smartdoorlock.png'></img>
                        <p>Digital Door Locks</p>
                    </Col>
                    <Col>
                        <img src='images1/Housekeeping.png'></img>
                        <p>House keeping</p>
                    </Col>
                    <Col>
                        <img src='images1/Emergency.png'></img>
                        <p>Emergency Response</p>
                    </Col>
                </Row>
            </Container>
            
            <div id='bell'>
                <img src='images1/bell.png' alt='bell'></img>
                <h2><strong>Stay updated</strong> with our latest news</h2>
                <Form>
                    <Form.Group className="mb-auto" controlId="formBasicEmail" id='sub'>
                        <Form.Control type="email" placeholder="Enter your mail" />
                    </Form.Group>
                    <Button variant="primary" type="submit" id='btn1' onClick={handleShow1}>Subscribe</Button>
                </Form>
            </div>
            <div id='accord'>
            <h2 id='faq'>Frequently Asked Questions (FAQ)</h2>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>In which cities LivWell is available?</Accordion.Header>
                        <Accordion.Body>
                        Colive is currently operating in 3 metro cities - Pune, Mumbai, Bangalore.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How is LiveWell Different?</Accordion.Header>
                        <Accordion.Body>
                        LiveWell is a modern form of housing where residents share common interests & values in a shared economy. Colive Community comprises of a group of distinct millenials who are warm, embracing and inclusive that value openness & collaboration. Colive make 6 promises to all its residents

Style - Designer fully-furnished rooms with chic & contemporary interiors and sprawling common spaces
Safety - Tech enabled safety features and Emergency Response Team
Social - Community of like-minded millennial
Smart - High speed internet, premium amenities & services all through the Colive App
Savings - Low deposits, all-inclusive bill and great savings
Service - Fully-managed homes with repairs & maintenance support
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Are LiveWell homes co-residencies/ Gender Neutrl?</Accordion.Header>
                        <Accordion.Body>
                        Majority of Colive properties are co-residencies or gender neutral with boys, girls & couples staying in the same building. Colive also has homes for all-boys or all-girls available across all locations. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How many people stay in LiveWell Property?</Accordion.Header>
                        <Accordion.Body>
                        Number of residents vary from one property to the other and is based on various factors like building size, rooms/ beds available, demand in the location among few. Residents are accommodated in every Colive property in a way that ensures personal space & their comfort.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
        
    );
}