// import { useState } from 'react';
// компоненты
import Header from './NavAside/Header';
import Menu from './NavAside/Menu';

function NavAside() {

    // const [isNavAsideOpen, setIsNavAsideOpen] = useState(true);

    // const toggleHandler = () => {
    //     setIsNavAsideOpen(!isNavAsideOpen);
    // };

    return(
        // <div className={isNavAsideOpen ? "nav-aside nav-aside_open" : "nav-aside nav-aside_close"}>
        <div className="nav-aside nav-aside_open">
            <Header />
            <div className="content__container d-flex flex-row">
                <nav className="mx-auto mt-4">
                    <input placeholder="Поиск по дереву" />
                    <Menu />
                </nav>
                <div className="my-auto">
                    <button 
                    className="nav-aside__toggle-btn"
                    >
                        <span className="fas fa-angle-left"></span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default NavAside;