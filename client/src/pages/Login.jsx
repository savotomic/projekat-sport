import React, { useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from "axios"
import Validation  from '../components/RegisterValidation.jsx'
import useAuth from '../hooks/useAuth.js'

const Login = () => {

  const [inputs, setInputs] = useState({
    email:'',
    password:'',
  })

  const [err, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {currentUser} = useAuth(); 

  console.log(currentUser);

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    setErrors(Validation(inputs));
    const res = await axios.post("http://localhost:8800/login", inputs)
    .then(res => {
      if(res.data === "Success"){
        navigate("/");
        alert("Success");
      } else {
        alert("Invalid email or password");
      }
    })
    
      console.log(err)
    
  }

  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder="email" name="email" onChange={handleChange}/>
            {err.email && <p>{err.email}</p>}
            <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
            {err.password && <p>{err.password}</p>}
            <button onClick={handleSubmit}>Login</button>
            <span>
                Don't you have an account? <Link to='/register'>Register</Link>
            </span>
        </form>
    </div>
  )
}

export default Login 