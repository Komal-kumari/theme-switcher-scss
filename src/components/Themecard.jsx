import '../styles/Themecard.scss';
import ThemeChanger from './Themechanger';
import ThemeChanger1 from './ThemeChanger1';
import ThemeChanger2 from './ThemeChanger2';
const Themecard = () => {
    return (
      <div class="box">
      <div>
        <div class="box__item box__item--vue">
          <i class="fab fa-vuejs"></i>
          <span>Theme1</span>
          <ThemeChanger1/>
        </div>
        <div class="box__bg"></div>
      </div>
      <div>
        <div class="box__item box__item--react">
          <i class="fab fa-react"></i>
          <span>Theme2</span>
          <ThemeChanger/>
        </div>
        <div class="box__bg"></div>
      </div>
      <div>
        <div class="box__item box__item--angular">
          <i class="fab fa-angular"></i>
          <span>Theme3</span>
          <ThemeChanger2/>
        </div>
        <div class="box__bg"></div>
      </div>
    </div>
    );
}

export default Themecard;