import { useEffect } from 'react';
// навигация
import { Switch, Route, useLocation } from 'react-router-dom';
// управление состоянием
import { useDispatch, useSelector } from 'react-redux';
import { setActivePageLocation } from '../redux/activePageSlice';
// компоненты
import Header from "./Main/Header";
import Home from './Main/Home';
import Production from './Main/Production';


function Main() {

    // при обновлении компонента, в глобальный стейт будет записана информация о текущей странице (pathname "/...")
    const activePageLocation = useSelector((state) => state.activePage.currentLocation);
    const dispatch = useDispatch();

    const location = useLocation();
    useEffect(() => {
        console.log(`Адрес текущей страницы: ${location.pathname}`);
        console.log(`В глобальном стейте записано: ${activePageLocation}`);
        dispatch(setActivePageLocation(location.pathname));
    });

    return(
        <div className="main">
            <Header />
            <main className="content__container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/production">
                        <Production />
                    </Route>
                </Switch>
            </main>
        </div>
    );

}

export default Main;