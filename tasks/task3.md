# Task 3 - react query

Include react query in your application for fetching Person data and deleting data

Install react query with `npm install react-query`

https://tanstack.com/query/v4/docs/overview

# Step by step

- Install react-query
- in the App Component
  - Create a new instance of the QueryClient
  - Include the QueryClientProvider
- In the List Component
  - create functions to load and delete data at the server with the fetch-API that return Promises
  - get the queryClient with `useQueryClient`
  - to load data, use the `useQuery` function
  - to remove data, use the `useMutation` function
  - deal with data, isLoading and isError

# Bonus

Enable React Suspense

# step by step

- `npm install react-error-boundary`
- Include the `ErrorBoundary` component to handle errors when fetching data
- Wrap the `List` Component in a `Suspense` component with a fallback component
- In the `List` component, ignore the loading and error state and provide the `suspense: true` config option for `useQuery`
