import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4}
    ]
  };
  handleRemove = (id) => {
    console.log('handleRemove: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return { players }; // es6 short hand property : 키와 값이 같으면 한쪽을 생략
    });
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
                    removePlayer={this.handleRemove}/>
          ))
        }
      </div>
    );
  }
}

export default App;
