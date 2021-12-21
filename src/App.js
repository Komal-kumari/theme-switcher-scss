
import './styles/App.scss';
import Footer from './components/Footer';
import Main from "./components/Main";
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="app"> 
     <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
