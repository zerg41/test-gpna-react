import MenuItem from './Menu/MenuItem';

function Menu() {

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