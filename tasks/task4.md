# Task 4 - Form handling

Include react-hook-form into your application (`Form` component)

https://www.react-hook-form.com/get-started

## step by step

- install the library `npm i react-hook-form`
- use the `useForm`function to get `handleSubmit` and `register`
- integrate `handleSubmit` in the onSubmit of the form
- integrate `register` into the input elements (with their names each)

# Bonus

- add validation
  - first name and last name are mandatory fields. Each of them need to be at least 2 and maximum 20 characters long.
- Show an error message if the validation failes (`formState: {errors}` from `useFrom` with the corresponding property)

# Bonus

- Use the `ErrorMessage` component to display the errors
- `npm i @hookform/error-message`
- `<ErrorMessage errors{errors} name="firstName">`
