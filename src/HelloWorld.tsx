import React, { useCallback } from 'react';

type Props = {
  names: string[];
};

const HelloWorld: React.FC<Props> = ({ names }) => {
  const getName = useCallback(() => {
    return 'World!';
  }, []);

  return (
    <div>
      Hello {getName()}
      {names.map((name) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};

export default HelloWorld;
