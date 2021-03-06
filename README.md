# React Workshop

## Links

- React: https://reactjs.org/
- Comparison: https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
- Create React App: https://create-react-app.dev/
- Node: https://nodejs.org/
- Thinking in React: https://reactjs.org/docs/thinking-in-react.html
- Classnames: https://www.npmjs.com/package/classnames

## Start

1. Use create react app

```
npm install -g create-react-app
create-react-app Projectname --use-npm --template typescript
```

2. Use npm/yarn with the create option

`npm create react-app Projectname --use-npm --template typescript`

3. Use npx

`npx create-react-app Projectname --use-npm --template typescript`

### Get it up and running

````npm install
npm start```
````

## Get a Backend

1. `npm install json-server``
2. create a backend script within the package.json file
3. define a data.json-file at the root level of our application
4. run `npm run backend`

# Ways of styling your components:

- css import: import of "traditional" CSS with className + inline styling with style prop
- css.modules: File called App.module.css - then import style and use the assigned classnames
- scss: `npm install node-sass` + import App.scss and use SCSS syntax
- external styling lib such as styled-components: `npm install styled-components @types/styled-components`

## Plan for the afternoon:

- styling
- more on hooks (custom hooks,...)
- context api
- form handling
- central state management (redux...)
- Testing
- your questions
