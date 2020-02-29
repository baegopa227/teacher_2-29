import React from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
}

class Counter extends React.Component {
  // 클래스 바로 아래에 선언되는 변수는 속성이 된다.
  constructor() {
    super();
    this.state = {
      score: 0
    }
    // this.handleChange.bind(this);
  }

  handleChange = (delta) => {
    console.log(this); // arrow function 에서의 this 는 lexical this가된다.
    console.log('handleChange');
    // this.state.score += 1; 값만 변경
    // 값을 변경하고 UI도 렌더링할려면 반드시 setState로 변경.
    this.setState(prevState => ({ score: prevState.score + delta })); // 비동기로 동작
  }

  // 이벤트 핸들러 오른쪽은 반드시 함수 선언문이 와야 한다.
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.handleChange(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={() => this.handleChange(1)}> + </button>
      </div>
    );
  }
}

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
