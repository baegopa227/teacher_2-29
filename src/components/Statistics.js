import React from 'react';

export const Statistics = (props) => {
  let totlaPoint = 0;
  // 로직 구현
  props.players.forEach(item => {
    totlaPoint += item.score
  });

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totlaPoint}</td>
      </tr>
      </tbody>
    </table>
  );
}