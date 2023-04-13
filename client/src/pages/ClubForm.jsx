import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import Validation  from '../components/RegisterValidation.jsx'
import { Button } from "react-bootstrap";
import "../style.scss"

const ClubForm = () => {
  const [inputs, setInputs] = useState({
    name:'',
    
  })

  const [err, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8800/clubs/add-club", inputs);
          navigate("/sport-club-table");
        } catch (err) {
          setErrors(err.response.data);
        }
      };

  return (
    <div>
        <h1>Add club</h1>
        <form>
            <input required type="text" placeholder="name" name="name" onChange={handleChange}/>
            
            
            <Button onClick={handleSubmit} className="button-bg">Add Club</Button>
            <Button>
                <Link className="button-bg"
                    to={"/sport-club-table"}>
                    Cancel
                </Link>
            </Button>
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}

export default ClubForm 