import logo1 from '../Img/GymLogo.png';
import '../styles/footer.scss';
const Footer = () => {
    return(
      <footer>
        <div class="footer1">
          <div class="container">
            <ul>&copy;
              <li>Privacy & Security</li>
            </ul>
          </div>
        </div>
        
        <div class="footer2">
          <div class="container">
            <a href="#"><img src={logo1} alt="Tt Logo" height = "40px" width="100px"/></a>
            <ul>
              <li>About</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
  export default Footer;