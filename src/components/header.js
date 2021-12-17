import React from 'react';
import '../styles/header.css';

const Header = () =>{
    return(
        <div id="header">
            <a>MyWeb</a>
            <a href='/'>Home</a>
            <a href='/'>Resources</a>
            <a href='/'>About</a>
            <a href='/'>Support</a>
            <a id="float">
            
            Hey, Welcome </a>
        </div>
    )
};

export default Header;