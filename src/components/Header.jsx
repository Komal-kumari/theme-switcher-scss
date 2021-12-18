import React from "react"
import Logo from '../Img/Logo.png';
import '../styles/Header.css';


const Header = () => {

    return(
      <div>
        <header class="user-navigation">
          <div class="profile">
            <svg id='profileSVG' viewBox="0 0 16 16"><g><path d="M7.5,9A4.5,4.5,0,1,0,3,4.5,4.5,4.5,0,0,0,7.5,9Zm0-7A2.5,2.5,0,1,1,5,4.5,2.5,2.5,0,0,1,7.5,2Z"></path><path d="M8,10.028s-0.254-.007-0.506-0.007S7,10.023,7,10.028c-7.033.283-7,3.558-7,6.972H15C15,13.586,14.985,10.312,8,10.028ZM8,15H2.056c0.2-1.946,1.077-2.815,5.024-2.974l0.1,0H7.494l0.326,0,0.1,0c3.928,0.16,4.819,1.03,5.022,2.974H8Z"></path></g></svg>
          </div>
          
          <div class="logo">
            
            <img src={Logo} alt="Logo"  height="20px" width="30px"/>
            
          
          </div>
        </header>
      </div>
    )
  }

export default Header;