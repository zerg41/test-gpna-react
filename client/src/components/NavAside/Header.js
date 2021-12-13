// навигация
import { NavLink } from 'react-router-dom';
// стилизация
import logo from '../../assets/brand-logo.png';

function Header() {

    return(
        <header className="app-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img 
                        className="d-inline-block align-text-top"
                        src={logo} alt="gpn-logo"
                        width="200" height="53"
                        />
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;