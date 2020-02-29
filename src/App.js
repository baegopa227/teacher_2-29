import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

let maxId = 4;

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 5, id: 1},
      {name: 'HONG', score: 6, id: 2},
      {name: 'KIM', score: 7, id: 3},
      {name: 'PARK', score: 8, id: 4}
    ]
  };
  handleRemove = (id) => {
    console.log('handleRemove: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return { players }; // es6 short hand property : 키와 값이 같으면 한쪽을 생략
    });
  }
  handleChangeScore = (id, delta) => {
    console.log('changeScore: ', id, delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      });
      return { players };
    })
  }
  handleAddPlayer = (name) => {
    console.log('handleAddPlayer: ', name);
    this.setState(prevState => {
      // 원본 배열 복사
      const players = [ ...prevState.players ];
      // 끝에 추가
      players.push({name, id: ++maxId, score: 0});
      return { players };
    })
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
                    removePlayer={this.handleRemove} changeScore={this.handleChangeScore} />
          ))
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}

export default App;
