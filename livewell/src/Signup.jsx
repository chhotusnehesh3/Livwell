
import './stylesheet.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import NavigationBar from './NavigationBar';
export default function Signup() {
    const[fvalues,setFvalues]=useState({
        fname:"",
        lname:"",
        uname:"",
        email:"",
        cnum:"",
        password:""
    })
    const navigate=useNavigate();

    const handleInp=(e)=>{

        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value)
        
        setFvalues({...fvalues,[name]:value});
        console.log(fvalues)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //  axios.post('http://127.0.0.1:4000/signup',fvalues).then((r)=>{console.log(r)})

        if(fvalues.uname.length==0 || fvalues.email.length==0 || fvalues.password.length==0 || fvalues.password.length==0){

            console.log("Fill Every Field")

        }
        else{
            
            axios.post('http://127.0.0.1:4000/signup',fvalues).then((r)=>{console.log(r)})
            
            
        }
         navigate('/login')
    }

    function generateUId() {

        const id=fvalues.fname+fvalues.lname+Math.floor(Math.random()*10000)
        fvalues.uname=id;
       
      }

    return (<>
        <NavigationBar/>     
        <div className='L-center'>
            <div>

                <div className='txt-login'>
                    <p>SignUp</p>
                </div>

                <form onSubmit={handleSubmit}>

               
                <div>
                    <div style={{paddingTop:'20px'}}>
                        <input className='inp1' placeholder="FNAME" name="fname" onChange={handleInp}></input>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <input className='inp1' placeholder="LNAME" name="lname" onChange={handleInp}></input>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                       <p> {generateUId()}</p>
                       
                        <input className='inp1' placeholder="USER-NAME" name="uname" value={fvalues.uname}></input>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <input className='inp1' placeholder="EMAIL" name="email" onChange={handleInp}></input>
                    </div>

                    
                    <div style={{paddingTop:'20px'}}>
                        <input className='inp1' placeholder="CONTACT NUMBER" name="cnum" onChange={handleInp}></input>
                    </div>

                    <div style={{paddingTop:'20px'}}>
                        <input className='inp1' placeholder="PASSWORD" name="password" onChange={handleInp}></input>
                    </div>


                    <div style={{paddingTop:'20px'}}>
                        <button className='btn-login' type='submit'>SignUp</button>
                    </div>


                </div>
                </form>

            </div>
        </div>


    </>)
}

