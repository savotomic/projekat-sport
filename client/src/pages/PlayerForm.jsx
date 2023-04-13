import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import Validation  from '../components/RegisterValidation.jsx'
import { Button } from "react-bootstrap";
import "../style.scss"

const PlayerForm = () => {
  const [inputs, setInputs] = useState({
    playerName:'',
    playerImg:'',
    plata:'',
    clubId:'',
    
  })

  const [err, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8800/players/add-player", inputs);
          navigate("/players");
        } catch (err) {
          setErrors(err.response.data);
        }
      };

  return (
    <div>
        <h1>Add player</h1>
        <form>
            <input required type="text" placeholder="img" name="img" onChange={handleChange}/>
            <input required type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input required type="text" placeholder="plata" name="plata" onChange={handleChange}/>
            <input required type="number" placeholder="clubId" name="clubId" onChange={handleChange}/>
            <Button onClick={handleSubmit} className="button-bg">Add Player</Button>
            <Button>
                <Link className="button-bg"
                    to={"/players"}>
                    Cancel
                </Link>
            </Button>
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}

export default PlayerForm 