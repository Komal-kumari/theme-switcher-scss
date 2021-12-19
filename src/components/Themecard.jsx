import '../styles/Themecard.css';
import ThemeChanger from './Themechanger';
import ThemeChanger1 from './ThemeChanger1';
import ThemeChanger2 from './ThemeChanger2';
const Themecard = () => {
    return (
        <section className='card-section'>
        <div className="card">
          <h2>Theme One</h2>
          <ThemeChanger1/>
          <p>Lite Mode</p>
        </div>
        <div className="card">
          <h2>Theme Two</h2>
          <ThemeChanger/>
          <p>Dark Mode</p>
        </div>
        <div className="card">
          <h2>Theme Three</h2>
          <ThemeChanger2/>
          <p>Color Mode</p>
        </div>
        </section>
    );
}

export default Themecard;