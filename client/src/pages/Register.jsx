import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import Validation  from '../components/RegisterValidation.jsx'

const Register = () => {
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    role:'',
  })

  const [err, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  /*const handleSubmit = async e =>{
    e.preventDefault()
    try{
      setErrors(Validation(inputs));
      const res = await axios.post("http://localhost:8800/register", inputs)
      navigate("/login");
    }catch(err){
      console.log(err)
    }
  }*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/register", inputs);
      navigate("/login");
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  return (
    <div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="email" placeholder="email" name="email" onChange={handleChange}/>
            
            <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
           
            <input required type="text" placeholder="first name" name="firstName" onChange={handleChange}/>
            <input required type="text" placeholder="last name" name="lastName" onChange={handleChange}/>
            <select name="role" onChange={handleChange}>
              <option value="select" disabled selected>Select Role</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>
                You already have an account? <Link to='/login'>Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register 