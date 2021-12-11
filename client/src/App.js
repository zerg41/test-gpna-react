import React from 'react';
// управление состоянием
import { store } from './redux/store';
import { Provider } from 'react-redux';
// навигация
import { BrowserRouter as Router } from 'react-router-dom';
// стили
import './App.css';
// компоненты
import Main from './components/Main';
import NavAside from './components/NavAside';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <NavAside />
                    <Main />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
