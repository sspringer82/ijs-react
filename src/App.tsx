import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import List from './List';
import { PersonProvider } from './PersonProvider';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        FallbackComponent={({ error }) => <div>{error.message}</div>}
      >
        <PersonProvider>
          <Suspense fallback={<div>...loading</div>}>
            <List />
          </Suspense>
        </PersonProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
