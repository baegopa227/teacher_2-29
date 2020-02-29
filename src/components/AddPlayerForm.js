import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }
  handleValueChane = (e) => {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <form action="" className="form">
        <input value={this.state.value} onChange={this.handleValueChane}
               type="text" className="input" placeholder="enter a player name" />
        <input type="submit" className="input" value="Add Player" />
      </form>
    );
  }
}