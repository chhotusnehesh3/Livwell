import logo from './logo.svg';
import './App.css';
import './NavigationBar'
import NavigationBar from './NavigationBar';
import {LinkContainer} from 'react-router-bootstrap';
import Home from './Home';
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from './Test';
import Signup from './Signup';
import Login from './Login';
import Adminlogin from './Adminlogin';
import Userdetails from './Userdetails';
import Hostel from './Hostel';
import Coliving from './Coliving';
import Couples from './Couples';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/adminlogin" element={<Adminlogin/>}></Route>
        <Route path="/userdetails" element={<Userdetails/>}></Route>
        <Route path="/couples" element={<Couples/>}></Route>
        <Route path="/coliving" element={<Coliving/>}></Route>
        <Route path="/hostel" element={<Hostel/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Hostel/> */}
      {/* <Coliving/> */}
      {/* <Couples/> */}
      <Footer/>
      

    </div>
  );
}

export default App;
