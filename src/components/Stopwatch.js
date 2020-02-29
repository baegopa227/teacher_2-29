import React from "react";

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning: false,
    timer: 0
  }
  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        {/*conditional Rendering*/}
        <button onClick={this.handleStopwatch}>{ this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    )
  }
  tick() {}
  // Dom이 렌더링된 직후에 리액트가 호출
  // 예) Rest API 콜, 외부 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출
  // 예) 리소스 해제
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}