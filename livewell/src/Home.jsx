import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import sh from './images/sh-2.jpg';
import './stylesheet.css';
import NavigationBar from './NavigationBar';
import Filter from './Filter';
function Home() {


    return (<>
         <NavigationBar/>
        <Container className="pt-5" >
            <Row>

                <Col>
                <Row></Row>
                <Row className="pt-5"> <h1>Perfect for working, More so for unwinding after.</h1></Row>
                
               <Row className="pt-5">
                <Row className='txt-left'><Col>24x7</Col> <Col>App Based issue</Col><Col>Throughout facilities</Col></Row>
                <Row className='txt-left'><Col>Assistance</Col> <Col>Resolution</Col><Col>Facilities</Col></Row>
               </Row>
               <Row className="pt-5">
                <Row className='txt-left'><Col></Col><Col>WhatsApp</Col><Col>Zero Brokerage</Col></Row>
                <Row className='txt-left'><Col></Col><Col>Video Tour</Col><Col>Month Deposite 1</Col></Row>
                </Row> 



                {/* <Image src="https://visor.gumlet.io/public/assets/images/stay-easy.png?format=webp&w=auto&h=auto&compress=true"></Image> */}
                </Col>
                <Col>                              
                <Card>
                {/* <Image src={require('./images/sh-1.webp')} height={482}>  </Image> */}
                               
                
                <Image src='sh-2.jpg'  alt='mini'></Image>
                
                    {/* <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                </Card>
                </Col>
            </Row>
        </Container>


        {/* 2nd  */}
        <Container className="pt-5" >
            <Row>
            
            <Col>                              
                <Card>
                <Image src={require('./images/sh-1.webp')} height={500} width={420} ></Image>
                               
                
                
                
                    {/* <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                </Card>
                </Col>



                <Col>
                
                <Row className='pt-5'> <h1>Join & vibe with a vibrant colourful community.</h1></Row>
                
               <Row className='pt-5'>
                <Row className='txt-left'><Col>Choose Your</Col> <Col>Social</Col><Col>Events Celebrations</Col></Row>
                <Row className='txt-left'><Col>Coliving Mates</Col> <Col>Calender</Col><Col>&Pop Ups</Col></Row>
               </Row>
               <Row className='pt-5'>
                <Row className='txt-left'><Col>Network &</Col><Col>Get Mentored</Col><Col></Col></Row>
                <Row className='txt-left'><Col>Collaborate</Col><Col></Col><Col></Col></Row>
                </Row> 



                {/* <Image src="https://visor.gumlet.io/public/assets/images/stay-easy.png?format=webp&w=auto&h=auto&compress=true"></Image> */}
                </Col>
                
            </Row>
        </Container>
        <Container className='pt-5 '>
            <Row className='bg-color1 bg-polgon'>
                    {/* 1st sec */}
                    <Col>
                        <Image className="z-index" src={require('./images/group-pic.avif')} height={350}></Image>
                    </Col>

                        {/*2nd sec  */}
                    <Col>
                    <Row className='txt-left pt-5'><h3>Let's Make some</h3></Row>
                    <Row className='txt-left'><h1>Memories</h1></Row>
                    </Col>    
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                <Row className='txt-left'>
                <Row><h1>Pre-Book & Exprience</h1></Row>
                <Row><h3>The Coliving Experience @ ₹1000</h3></Row>    
                <Row><Col></Col><Col><button className='btn-book'><h4>Book Now</h4></button></Col><Col></Col></Row>
                </Row>
                </Col>
                
                <Col>
                <Image src={require('./images/man-luggage.avif')}></Image>
                </Col>

            </Row>


        </Container>
        <Filter></Filter>

    </>)
}
export default Home