import logo from '../assets/brand-logo.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function NavAside() {

    return(
        <div className="App__nav-aside">
            <header className="app-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img 
                            className="d-inline-block align-text-top"
                            src={logo} alt="gpn-logo"
                            width="200" height="53"
                            />
                        </a>
                    </div>
                </nav>
            </header>
            <div className="content__container d-flex flex-row">
                <nav className="mx-auto mt-4">
                    <input placeholder="Поиск по дереву" />
                </nav>
                <span className="my-auto">
                    <ArrowBackIosNewIcon />
                </span>
            </div>
        </div>
    );
}

export default NavAside;