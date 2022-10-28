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
