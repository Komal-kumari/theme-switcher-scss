import '../styles/Sidebar.scss';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiCrossMark} from 'react-icons/gi';
const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <GiHamburgerMenu className='ham'/>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Sidebar Header</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><GiCrossMark className='cross'/></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><h4 className="sd-link">Theme 1</h4></li>
                                <li><h4 className="sd-link">Theme 2</h4></li>
                                <li><h4 className="sd-link">Theme 3</h4></li>
                                </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    )
}
export default Sidebar