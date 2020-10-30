import React from 'react';
import ListItem from './ListItem';
import Log from './shared/Log';

type Props = {
  logs: Log[];
};

const List: React.FC<Props> = ({ logs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>from</th>
          <th>until</th>
          <th>title</th>
          <th>duration</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <ListItem log={log} key={log.id} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
