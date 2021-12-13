import {useState} from 'react';

function MenuItem({title, content}) {

    const [isActive, setIActive] = useState(false);

    return(
        <div>
            <div 
            className="nav-aside__accordion-title" 
            onClick={() => setIActive(!isActive)}
            >
                <div>
                    {isActive ? <span className="fas fa-angle-down"></span> : <span className="fas fa-angle-right"></span>}
                </div>
                <div className="nav-aside__accordion-title_text">{title}</div>
            </div>
            {isActive && <div className="nav-aside__accordion-content">{content}</div>}
        </div>
    );
}

export default MenuItem;