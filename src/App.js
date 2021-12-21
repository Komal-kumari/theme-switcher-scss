
import './styles/App.scss';
import Footer from './components/Footer';
import Main from "./components/Main";
//import Header from './components/Header';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="app"> 
     {/* <Header/> */}
     <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
