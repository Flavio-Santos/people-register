import './Logo.css';
import logo from '../../../assets/imgs/flooop.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} className='logo-img' alt="logo"/>
        </Link>
    </aside>
