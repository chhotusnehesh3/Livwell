
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import NavigationBar from "./NavigationBar";
import Modal from 'react-bootstrap/Modal';

export default function Coliving(){
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // const [articles,setArticles]=useState([]);

    // async function fetchArticles(){
    //     try {
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     fetchArticles();
    // },[]);

    return (
        <div>
            <NavigationBar/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                <Modal.Body>Woohoo, you have schedule a meeting</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Conform
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                <Modal.Body>We have received your inquiry and will provide you with the details via email and mobile number.</Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="primary" onClick={handleClose1}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <h2>Affordable Premium Rental PG Accommodation in Your Town</h2>
                <Row id="cards">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel1.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel2.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel3.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row id="cards">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel1.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel2.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel3.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    id="btnShow"
                >
                Show More
                </Button>
                <Collapse in={open}>
                    <Container>
                        <Row id="cards">
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel1.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel2.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel3.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        </Row>
                        <Row id="cards">
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel1.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel2.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images1/Hostel3.jpg" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        </Row>
                    </Container>
                </Collapse>
            </Container>
            <Container id="">
                <h2>Trending Properties</h2>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top1.jpg"
                                    alt="First slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top1_1.jpg"
                                    alt="Second slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top1_2.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top1_3.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top2.jpg"
                                    alt="First slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top2_1.jpg"
                                    alt="Second slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top2_2.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top2_3.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top3.jpg"
                                    alt="First slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top3_1.jpg"
                                    alt="Second slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top3_2.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top3_3.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV" onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top4.png"
                                    alt="First slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top4_1.jpg"
                                    alt="Second slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top4_2.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images1/Top4_3.jpg"
                                    alt="Third slide"
                                    height="200px"
                                />
                            </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV"  onClick={handleShow}>Schedule Visit</Button>
                            <Button variant="outline-primary" onClick={handleShow1}>Equire Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
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