import React, {Component} from 'react';
import './App.css';
import Grid from './grid';


class App extends Component {
  render() {
    const cells = [];
    for (let row = 0; row < 6; row++) {
      const eachRow = [];
      for (let col = 0; col < 7; col++) {
        eachRow.push(<Grid key="y" row={row} col={col} />)
      }
      cells.push(<div key="row" className="row">{eachRow}</div>)
    }
    return (
      <div>
        {cells}
      </div>
    );

  }
}

export default App;
