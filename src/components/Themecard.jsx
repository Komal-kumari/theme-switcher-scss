import '../styles/Themecard.scss';
import ThemeChanger from './Themechanger';
import ThemeChanger1 from './ThemeChanger1';
import ThemeChanger2 from './ThemeChanger2';
import {BiColorFill, BiAdjust} from 'react-icons/bi';
import {MdDarkMode} from 'react-icons/md';
const Themecard = () => {
    return (
      <div class="box">
      <div>
        <div class="box__item box__item--vue">
          <BiAdjust size={40}/>
          <span>Theme1</span>
          <ThemeChanger1/>
        </div>
        <div class="box__bg"></div>
      </div>
      <div>
        <div class="box__item box__item--react">
          <MdDarkMode size={40}/>
          <span>Theme2</span>
          <ThemeChanger/>
        </div>
        <div class="box__bg"></div>
      </div>
      <div>
        <div class="box__item box__item--angular">
          <BiColorFill size={40}/>
          <span>Theme3</span>
          <ThemeChanger2/>
        </div>
        <div class="box__bg"></div>
      </div>
    </div>
    );
}

export default Themecard;