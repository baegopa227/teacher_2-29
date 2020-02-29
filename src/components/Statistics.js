import React from 'react';
import _ from 'lodash';

export const Statistics = (props) => {
  let totlaPoint = _.sumBy(props.players, 'score');
  // 로직 구현
  // props.players.forEach(item => {
  //   totlaPoint += item.score
  // });
  let totalPlayer = props.players.length;

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayer}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totlaPoint}</td>
      </tr>
      </tbody>
    </table>
  );
}