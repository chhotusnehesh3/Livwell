// import { Container } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import NavigationBar from './NavigationBar';
import { BrowserRouter } from 'react-router-dom';

export default function Couples(){
    return (
        <div>
           

            <NavigationBar/>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/couple1.jfif"
                        alt="First slide"
                        height="800px"
                    />
                    <Carousel.Caption>
                        <h2 id='couple'><strong>Couple-Friendly</strong><br></br>Homes</h2>
                        <Button variant="light" id="btnSV">Contact US</Button>
                        <Button variant="dark">Whatsapp Us</Button>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/couple.jfif"
                        alt="Second slide"
                        height="800px"
                    />
                    <Carousel.Caption>
                        <h2 id='couple'><strong>Couple-Friendly</strong><br></br>Homes</h2>
                        <Button variant="primary" id="btnSV">Contact US</Button>
                        <Button variant="dark">Whatsapp Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images1/couple3.jfif"
                        alt="Third slide"
                        height="800px"
                    />
                    <Carousel.Caption>
                        <h2 id='couple'><strong>Couple-Friendly</strong><br></br>Homes</h2>
                        <Button variant="primary" id="btnSV">Contact US</Button>
                        <Button variant="dark">Whatsapp Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container >
                <Row id='naruto1'>
                    <Col lg='6'>
                    <img src='images1/naruto1.png' alt='naruto' id='naruto'></img>
                    </Col>
                    <Col lg='6' id='Design'>
                        <h2 id='Designed'>Designed for power couples</h2>
                        <p>Colive Cuddle is a bold new platform that celebrates India's live-in relationships with a complete lifestyle suite, inclusive of rented & fully furnished homes, live-in certification, utilities, housekeeping & weekly events.</p>
                        <Button variant="dark">Whatsapp Us</Button>
                    </Col>
                </Row>
                <Row id='Live'>
                    <Col xs={3}  className='LiveC1'>
                        <h2><strong>Live In, Start Pyar</strong>
                        . It's That Simple.</h2>
                    </Col>
                    <Col xs={3} className='LiveC1'>
                        <h3>
                        Forget Baggage.
                        </h3>
                        <p>
                        Cuddle homes are fully stacked with lifestyle / art-deco furniture that matches your living as well as remote working needs as a postmdern couple.

                        </p>
                    </Col>
                    <Col xs={3} className='LiveC1'>
                    <h3>
                    Forget Chores.
                    </h3>
                    <p>
                    Every Cuddle home enjoys 100% Power Backup, 24x7 WiFi connectivity, and complimentary housekeeping, in addition to fully functional laundromats.
                    </p>
                    </Col>
                    <Col xs={3} className='LiveC1'>
                        <h3>
                        Forget Fights.
                        </h3>
                        <p>
                        The Cuddle experience includes a host of refreshing weekly activities, daily candlelit dinners & red roses on demand, refreshed daily. This is where relationships blossom!
                        </p>
                    </Col>
                </Row>
                <Row id='Offer'>
                    <Col xs={5}>
                        <h1 className='Offerh1'>What we <strong>offer</strong></h1>
                    </Col>
                    <Col xs={7}>
                        <Row>
                            <Col className='Offer1'>
                                <h3>Fully Furnished Rooms</h3>
                                <h1 className='Offerh1'><strong>Couple </strong>Friendly</h1>
                                <p>Our rooms are tastefully furnished (work-from-home enabled), with 24x7 power backup, high speed WiFi, security for couples, regular housekeeping and sanitization.  
                                </p>
                            </Col>
                            <Col className='Offer1'>
                                <h3>Weekly Events</h3>
                                <h1 className='Offerh1'><strong>Saturday</strong> Nights</h1>
                                <p>Every week, couples will compete in fun digital challenges, and every month, one couple will win the Mr & Ms Cuddle Crowns, earning a free month of stay at Colive Cuddle, with all perks included.</p>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col className='Offer1'>
                                <h3>On Demand Flowers</h3>
                                <h1 className='Offerh1'><strong>Red </strong>Roses</h1>
                                <p>A red rose every day goes a long way in keeping the spark alive! At Colive Cuddle, there is a regular supply of red roses, refreshed everyday for our residents.</p>
                                
                            </Col>
                            <Col className='Offer1'>
                            <h3>Pvt & Gold Class</h3>
                            <h1 className='Offerh1'><strong>Cinema </strong>Room</h1>
                            <p>A cosy ambience, plush red recliners, and a reason to stream, premiere or binge-watch your favorite Netflix show in a larger-than-life gold-class setting.</p>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col className='Offer1'>
                                <h3>Daily Dinners</h3>
                                <h1 className='Offerh1'><strong>Candlelight </strong>Specials</h1>
                                <p>At Colive Cuddle, couples will have the unique experience of dining with their better halves in a candlelit setting, every night.</p>
                               
                                </Col>
                            <Col className='Offer1'>
                            <h3>LivWell Exclusive</h3>
                            <h1 className='Offerh1'><strong>Fitness </strong>Center</h1>
                            <p>Every Colive Cuddle property is equipped with a modern fitness center, powered by state-of-the-art cardiovascular & weight-training equipment.</p>
                            
                            </Col>
                        </Row>
                        
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