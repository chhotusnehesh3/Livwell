
import { useNavigate } from "react-router-dom";
import './stylesheet.css'
import { useState } from 'react';
import axios from 'axios';
import NavigationBar from "./NavigationBar";
export default function Login() {

    const [ldata, setLdata] = useState({ email: "", password: "" })
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate()
    const handleInp = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setLdata({ ...ldata, [name]: value });
        console.log(ldata)

    }

    function handleSubmit(e) {

        e.preventDefault();
        axios.post('http://127.0.0.1:4000/login', ldata).then((r) => { console.log(r) 
            if(r.data=="Sucesss"){
                localStorage.setItem('isloggedin',"true");
                navigate('/');
            }
            })
        // axios
        //     .get('http://127.0.0.1:4000/login', ldata)
        //     .then(function (response) {
        //         console.log(response)
        //         if (response == "Sucesss") {
        //             navigate('/')
        //         }
        //     });

    }

    return (<>
        <NavigationBar/>
        <div className='L-center'>
            <div>

                <div className='txt-login'>
                    <p>Login</p>
                </div>

                <form onSubmit={handleSubmit}>


                    <div>


                        <div style={{ paddingTop: '20px' }}>
                            <input className='inp1' placeholder="EMAIL" name="email" onChange={handleInp}></input>
                        </div>




                        <div style={{ paddingTop: '20px' }}>
                            <input className='inp1' placeholder="PASSWORD" name="password" onChange={handleInp}></input>
                        </div>


                        <div style={{ paddingTop: '20px' }}>
                            <button className='btn-login' type='submit'>Login</button>
                        </div>


                    </div>
                </form>

            </div>
        </div>


    </>)
}