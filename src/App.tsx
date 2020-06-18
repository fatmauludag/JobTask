import React from 'react';
//import logo from './logo.svg';
import Task1 from './task1';
import Task2 from './task2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return <div>
      <div style={{ margin: '20px 10%' }}>
        <Task1 />
      </div>
      <div style={{ margin: '20px 10%' }}>
        <Task2 />
      </div>
    </div >
  }
}

export default App;
