# Price Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Web app calculates prices for amount of words to check.

## How to run project

Install dependencies:

```sh
yarn
```

Start application:

App will run at http://localhost:3000/

```sh
yarn start
```

Command will perform all needed tests (TypeScript check, jest and eslint rules) that has to be `green` before pushing the code. (good to add as `pre-commit` command):

```sh
yarn sanity
```

Run all unit tests:

```sh
yarn test
```

Command will fix some eslint problems for you.

```sh
yarn lint:fix
```

## Project structure

This `import/export` method is called `Barrel` to read more about it: [Barrel Method Documentation](https://basarat.gitbook.io/typescript/main-1/barrel)