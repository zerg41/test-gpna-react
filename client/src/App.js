import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="nav-aside">
        <header className="App-header">
        </header>
        <main>
          <input value="Поиск по дереву" />
          <ul>
            <li>Дочерние общества</li>
            <li>Админ. панель</li>
          </ul>
        </main>
      </div>

      <div className='content-main'>
        <header>
          <p>Продукция, Об Объектах, Дочерние общества</p>
        </header>
      </div>

    </div>
  );
}

export default App;
