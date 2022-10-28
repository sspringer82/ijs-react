# Task 1 - context

put the state management into a context

# step by step

- create a `PersonContextType`, that is representing the context structure

```ts
type PersonContextType = [
  Person[],
  React.Dispatch<React.SetStateAction<Person[]>>
];
```

- create the context `PersonContext` with `React.createContext`
- create a new Component `PersonProvider` with its own state, that you are providing via `PersonContext.Provider`
- create a new hook function `usePersonContext`, that allows you to access the context via `useContext`
- Integrate the context in your `List` Component

Helpful links:

- https://reactjs.org/docs/hooks-reference.html#usecontext
