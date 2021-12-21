import React from "react";
import Gym2 from "../Img/Gym2.jpg";
import Logo from '../Img/GymLogo.png';
import '../styles/HomePage.scss';
import './Themecard';
import {GiGymBag} from 'react-icons/gi';
import Themecard from "./Themecard";
const Main = () => {
    return(
      <main>
        <section class="main-poster">
          <h1 className="evolve">Evolve Gym</h1>
          <GiGymBag className="icon" size={70}/>
          <h3>Powered by MuscleBlaze</h3>
        </section>
        
        <section class="theme-changes">
          <h2>Theme Change</h2>
          <Themecard/>
        </section>
        
       
        
        <section class="play">
          <div>
            <img class="bg-img" src={Gym2}  />
    
            <div class="play-info">
              <img src={Logo}/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, accusamus. Enim dolore voluptas error officiis eaque quo ea sit modi inventore excepturi minus nisi, dicta ut, ratione in assumenda iusto!</p>
              <div class="join-now"><button><a href="#">Join Now</a></button></div>
            </div>
            </div>
        </section>
      </main>
    )
  }

  export default Main;