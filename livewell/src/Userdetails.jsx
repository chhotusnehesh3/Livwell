import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Adminlogin from "./Adminlogin";
import NavigationBar from "./NavigationBar";

export default function Userdetails() {

    const [userdetails, setUserdetails] = useState([])
    const [isloggedin, setIsLoggedin] = useState(localStorage.getItem("isloggedin"))
    const [seletedemail, setSeletedemail] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/userdetails').then((r) => {
            setUserdetails([...r.data.userdetail])
        })
    }, [])

    function logout() {
        localStorage.setItem('isloggedin', "false");
        const f = localStorage.getItem("isloggedin")
        setIsLoggedin(f);
        navigate('/adminlogin')
    }

    function deleteUser() {
        axios.delete('http://127.0.0.1:4000/userdelete', {data:{email:seletedemail}}).then((r) => {
            axios.get('http://127.0.0.1:4000/userdetails').then((r) => {
                setUserdetails([...r.data.userdetail])
            })
        })
        navigate('/userdetails');
    }
    
    if (isloggedin === "true") {
        return (
            <>
                <NavigationBar/>
                <div style={{ margin: '0 auto', width: '80%', border: '2px solid black', borderCollapse: 'collapse', marginTop:'100px' }}>
                    <Row style={{ backgroundColor: 'rgb(169,200,100)', fontWeight: 'bold', marginLeft: '0', marginRight: '0' }}>
                        <Col>First Name</Col>
                        <Col>Last Name</Col>
                        <Col>User Name</Col>
                        <Col>Email</Col>
                        <Col>Customer Number</Col>
                        <Col>Action</Col>
                    </Row>
                    {userdetails.map((r, index) => (
                        <Row key={index} style={{ border: '1px solid black', marginLeft: '0', marginRight: '0',alignItems:"center", height: '50px' }}>
                            <Col>{r.fname}</Col>
                            <Col>{r.lname}</Col>
                            <Col>{r.uname}</Col>
                            <Col>{r.email}</Col>
                            <Col>{r.cnum}</Col>
                            <Col>
                                <button className="btn btn-danger" style={{height:'2 rem'}} onClick={() => {
                                    setSeletedemail(r.email);
                                    deleteUser();
                                }}>Delete</button>
                            </Col>
                        </Row>
                    ))}   
                </div>
            </>
        )
    } else {
        return (
            <>
                <NavigationBar ></NavigationBar>
                <h1>Page not found 404</h1>
            </>
        )
    }
}
