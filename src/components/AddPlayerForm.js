import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }
  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleSubmit = (e) => {
    // submit의 기본 이벤트 막기
    e.preventDefault();
    // e.stopPropagation();

    this.props.addPlayer(this.state.value);
  }
  render() {
    return (
      <form noValidate className="form" onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleValueChange}
               type="text" className="input" placeholder="enter a player name" required />
        <input type="submit" className="input" value="Add Player" />
      </form>
    );
  }
}