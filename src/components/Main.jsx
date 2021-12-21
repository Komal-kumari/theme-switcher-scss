import React from "react";
import Gym1 from "../Img/Gym1.jpg";
import Gym2 from "../Img/Gym2.jpg";
import Gym from "../Img/Gym.jpg";
import Logo from '../Img/GymLogo.png';
import '../styles/HomePage.css';
import './Themecard';
import Themecard from "./Themecard";
const Main = () => {
    return(
      <main>
        <section class="main-poster">
          <div class='gym-info'>
            <img src={Gym1} height="250px" width="350px"/>
            <h1><strong>Powered By </strong></h1>
            <p>Factory Gym</p>
          </div>
          <div class='gymPoster'>
            <img src={Gym} alt="GYM Poster"/>
          </div>
        </section>
        
        <section class="theme-changes">
          <h2>Theme Change</h2>
          <Themecard/>
        </section>
        
       
        
        <section class="play">
          <div>
            <img class="bg-img" src={Gym2} />
    
            <div class="play-info">
              <img src={Logo} />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, accusamus. Enim dolore voluptas error officiis eaque quo ea sit modi inventore excepturi minus nisi, dicta ut, ratione in assumenda iusto!</p>
              <div class="join-now"><button><a href="#">Join Now</a></button></div>
            </div>
            </div>
        </section>
      </main>
    )
  }

  export default Main;