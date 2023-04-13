import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.png"
import Login from '../pages/Login';
import SportClubTable from '../pages/SportClubTable';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'> 
         <Link to='/'><img src={Logo} alt=''/></Link>
        </div>
        <div className='links'>
          <Link to='/sport-club-table' className='link'>
            <h4>CLUBS</h4>
          </Link>
          <Link to='/players'className='link'>
            <h4>PLAYERS</h4>
          </Link>
          <span><h4>Tom</h4></span>
          <span>
            <Link to='/login' className='logout'><h4>LOGOUT</h4></Link>
          </span>
        </div>

      </div>

    </div>
  )
}

export default Navbar