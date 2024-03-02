
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function NavigationBar() {

  const [isloggedin, setIsLoggedin] = useState(localStorage.getItem("isloggedin"));
  const navigate = useNavigate();
  
  function logout() {
    localStorage.setItem('isloggedin', "false");
    const f = localStorage.getItem("isloggedin")
    console.log(f)
    setIsLoggedin(f);
    navigate('/adminlogin')
  }
  function userlogout(){
    localStorage.setItem('isloggedin', "false");
    const f = localStorage.getItem("isloggedin")
    console.log(f)
    setIsLoggedin(f);
    navigate('/')
  }
  return (<>
    <div >
      <Navbar expand="lg" className="bg-body-tertiary justify-content-end nav-font">
        <Container className="nav-font float-right">
          <Navbar.Brand href="#home"> </Navbar.Brand>
          <Image src={require('./lw-logo1.png')} rounded width={150} />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="m-auto">

              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>


              {isloggedin=="true"?<LinkContainer to="/hostel"><Nav.Link>Hostel</Nav.Link></LinkContainer>:<LinkContainer to="/"><Nav.Link>Hostel</Nav.Link></LinkContainer>}

              {isloggedin=="true"?<LinkContainer to="/coliving"><Nav.Link>CoLiving </Nav.Link></LinkContainer>:<LinkContainer to="/"><Nav.Link>CoLiving </Nav.Link></LinkContainer>}


              {isloggedin =="true"?<LinkContainer to="/couples"><Nav.Link>Couple </Nav.Link></LinkContainer>:<LinkContainer to="/"><Nav.Link>Couple </Nav.Link></LinkContainer>}




            </Nav>



            <Nav className="ms-auto">



              <LinkContainer to="/">
                <Nav.Link>livewell@gmail.com </Nav.Link>
              </LinkContainer>
            </Nav>

            {isloggedin=="false"?
            <Dropdown>              
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SignIn/SignUp
                {/* {isloggedin=="false"?<p> SignIn/SignUp</p>:<Button variant="danger">Logout</Button>} */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <LinkContainer to="/signup">
                <Dropdown.Item>SignUp</Dropdown.Item>               
                </LinkContainer>
                <LinkContainer to="/login">
                <Dropdown.Item>User Login</Dropdown.Item>               
                </LinkContainer>
                <LinkContainer to="/adminlogin">
                <Dropdown.Item>Admin Login</Dropdown.Item>               
                </LinkContainer>            
                
              </Dropdown.Menu>           

            </Dropdown>:<Button variant="danger" onClick={userlogout}>Logout</Button>
       }   
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>

  </>)

}
export default NavigationBar