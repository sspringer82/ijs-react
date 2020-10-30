import React from 'react';
import Log from './shared/Log';

type Props = {
  log: Log;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ log, onDelete }) => {
  return (
    <tr>
      <td>{log.id}</td>
      <td>{log.from}</td>
      <td>{log.until}</td>
      <td>{log.title}</td>
      <td>{log.duration}</td>
      <td>
        <button
          onClick={(e) => {
            onDelete(log.id);
          }}
        >
          🗑
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
