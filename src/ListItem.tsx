import React from 'react';
import Log from './shared/Log';

type Props = {
  log: Log;
};

const ListItem: React.FC<Props> = ({ log }) => {
  return (
    <tr>
      <td>{log.id}</td>
      <td>{log.from}</td>
      <td>{log.until}</td>
      <td>{log.title}</td>
      <td>{log.duration}</td>
    </tr>
  );
};

export default ListItem;
