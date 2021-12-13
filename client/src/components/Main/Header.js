import { NavLink } from 'react-router-dom';

function Header() {

    return(
        <header className="app-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/production">Продукты</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/">Об объектах</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/">Дочерние общества</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-text d-flex flex-row">
                        <div className='avatar__circle align-self-center text-center me-2'>
                            <p className='m-0 align-self-center fs-4'>A</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <p className="my-0 fw-bolder">admin@gazprom-neft.ru</p>
                            <p className="my-0 ">Administrator</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;