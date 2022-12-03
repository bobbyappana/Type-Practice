import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDO from './components/Todo';
import Increment from './components/Hoc/increment';
import Hover from './components/Hoc/Hover';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDO />
        <Increment />
        <Hover />
      </header>
    </div>
  );
}

export default App;
