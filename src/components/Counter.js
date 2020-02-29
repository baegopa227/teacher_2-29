import React from "react";

export class Counter extends React.Component {
  // 클래스 바로 아래에 선언되는 변수는 속성이 된다.
/*  constructor() {
    super();
    this.state = {
      score: 0
    }
    // this.handleChange.bind(this);
  }*/

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
        <div className="counter">
          <button className="counter-action decrement"
                  onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
          <span className="counter-score">{this.props.score}</span>
          <button className="counter-action increment"
                  onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
        </div>
      </div>
    );
  }
}