import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import List from './List';
import { PersonProvider } from './PersonProvider';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonProvider>
        <List />
      </PersonProvider>
    </QueryClientProvider>
  );
};

export default App;
