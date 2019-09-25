import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid';


class App extends React.Component {
  render() {
    const cells = [];
    for (let col = 0; col < 7; col++) {
      const eachCol = [];
      for (let row = 0; row < 6; row++) {
        eachCol.push(<Grid row={row} col={col}></Grid>)
      }
      cells.push(<div>{eachCol}</div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

export default App;
