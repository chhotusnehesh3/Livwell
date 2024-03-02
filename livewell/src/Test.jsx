import { useState } from "react";
import  {useNavigate} from "react-router-dom";
export default function Test(){
const[isloggedin,setIsLoggedin]=useState(localStorage.getItem("isloggedin"))
const navigate=useNavigate();
function logout(){
    localStorage.setItem('isloggedin',"false");
    const f=localStorage.getItem("isloggedin")
    console.log(f)
    setIsLoggedin(f);
    navigate('/login')
}

    return(<>
    {isloggedin=="true"?<div>You are in test page

        <button onClick={logout}>logout</button>
    </div>:<div>put valid email id</div>}
    
    
    </>)
}