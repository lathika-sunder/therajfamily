import React from 'react';
import './HeaderComp.css';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
const HeaderComp = () => {
  return (
    <div className="header">
      <div className="heading">
        <h1>The Raj Family</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <Link to='/login'><Button ><span className='togin-text'>Login</span><LoginIcon/></Button></Link>
            <Link to='/'><Button variant="outlined"><HomeIcon/></Button></Link>
            <Link to='/family-tree'><Button variant="contained">Family Tree</Button></Link>
            
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComp;
