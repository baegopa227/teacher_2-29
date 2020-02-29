import React from 'react';

export class AddPlayerForm extends React.Component {
  render() {
    return (
      <form action="" className="form">
        <input type="text" className="input" placeholder="enter a player name" />
        <input type="submit" className="input" value="Add Player" />
      </form>
    );
  }
}