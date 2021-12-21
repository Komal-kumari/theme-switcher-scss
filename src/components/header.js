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
            <div id="float">
            
            Hey, Welcome </div>
        </div>
    )
};

export default Header;