import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css';
import Main from './components/common/main.component.jsx';
import Header from './components/common/header.component.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">    
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;
