// навигация
import { Switch, Route } from 'react-router-dom';
// компоненты
import MainHeader from "./Main/MainHeader";
import Home from './Main/Home';
import Production from './Main/Production';


function Main() {

    return(
        <div className="App__main">
            <MainHeader />
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