import {useState} from 'react';
import MenuItem from './Menu/MenuItem';

function Menu() {

    const [isFirstItemActive, setIsFirstItemActive] = useState(false);
    const [isSecondItemActive, setIsSecondItemActive] = useState(false);

    return(
        <div className="pt-4">
            <MenuItem 
            title={"Дочерние общества"} 
            content={<MenuItem title={"Оренбург"} content={"Центральная"}/>} 
            />
            <MenuItem title={"Админ. панель"} />
        </div>
    );
}

export default Menu;