import MenuItem from './Menu/MenuItem';

function Menu() {

    return(
        <div className="pt-4">
            <MenuItem 
            title={"Дочерние общества"} 
            content={<MenuItem title={"Оренбург"} content={<a href='#' target="_blank">Центральная</a>}/>} 
            />
            <MenuItem title={"Админ. панель"} />
        </div>
    );
}

export default Menu;