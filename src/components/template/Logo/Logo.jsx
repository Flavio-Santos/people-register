import './Logo.css';
import logo from '../../../assets/imgs/flooop.png';
import React from 'react';

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} className='logo-img' alt="logo"/>
        </a>
    </aside>
