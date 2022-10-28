# Task 2 - custom hook

Extract the data handling logic from the `List` component into its own custom hook

The name of the hook is `usePerson`

put the custom hook into `src/usePerson.ts`

## Step by step

- identify the elements that you want to extract (state, effect, handleDelete, handleSave)
- cut these elements
- create a new file `usePerson.ts`
- create a new function `usePerson` in that file
- paste the contents of the component in the hook function
- fix all the missing import statements
- identify which interfaces are missing in your component (person, handleDelete, handleState)
- define the corresponding return value `return {person, handleDelete, handleSave}`
- deal with `clearAndHideForm();` which was pasted into the custom hook
- use `usePerson` in the `List` component and wire together the return value and the variables of the component `const {person, handleDelete, handleSave} = usePerson()`
