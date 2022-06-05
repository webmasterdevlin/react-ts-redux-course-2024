# Steps

```bash
npx create-react-app my-app --template=typescript
```

```bash
cd my-app
```

## Pick your UI library or UI framework

- tailwindcss
- material-ui
- antd
- chakra ui
- styled-components
- emotion

## Create pages and routers

#### Setting up the routers is a one time setup.

#### Future pages will be registered in your router.

```bash
npm i -D prettier
```

- create ./src/pages/HomePage.tsx, ./src/pages/AnotherPage.tsx, etc, with the name of the page as the h1 for POC
- npm i react-router react-router-dom
- create a component, EagerRoutes.tsx, to register the pages
- use the EagerRoutes component in the App.tsx with BrowserRouter
- run the application and navigate to different pages using the URL field of the browser
- create another component for routing and name it LazyRoutes.tsx
- register the pages in the LazyRoutes
- use the LazyRoutes component in the App.tsx with BrowserRouter
- run the application and navigate to different pages using the URL field of the browser

## Create navigation bar

- create a component, NavigationBar.tsx
- Add links/menus for different pages in the NavigationBar
- run the application and try to navigate using the menus
- create styling for the navigation bar
- create a views folder, ./src/views/
- create a layout template for the pages and put it in the ./src/views/MainLayout.tsx
- run the application to see if it works

## Set up axios for API calls

- create ./src/api/axiosConfig.ts
- this is also where interceptors will be added for header authorization if needed

## Set up generic http services

```bash
npm i axios
```

- create ./src/api/genericApiCalls.ts

## Set up json-server and concurrently

```bash
npm i -D json-server concurrently
```

- create ./src/json-server/db.json and ./src/json-server/routes.json
- add proxy in the packages.json
- update the scripts

## Set up the hero feature for redux

```bash
npm i @reduxjs/toolkit react-redux redux-injectors redux
```

- create a feature folder, ./src/features
- create heroes folder inside the features
- create heroTypes.ts for the hero type/model, action type, and state type
- create heroAsyncActions.ts for asynchronous actions of hero feature
- create heroSlice.ts for the hero reducer

## Set up Redux Toolkit (one time only)

- create ./src/store/configureStore.ts
- create ./src/store/reducers.ts
- all succeeding reducers will be registered in the reducers.ts
- update the App.tsx by adding a provider for store

## Hero Page

- create ./src/pages/HeroesPage.tsx
- add useDispatch and useSelector
- dispatch the getHeroesAction inside the useHook
- run the application, npm run start:fullstack and see the devtools if response i 200ok
- map the heroes and render all the heroes
- use the boolean loading state to show the loading message while fetching the data
- add the mark button functionality for every hero

## Set up React Testing Library

- create ./src/test-utils/testing-library-util.tsx that will be a copy of the root component

## Set up MSW for mocking API calls

```bash
npm i -D msw
```

- the msw is a mocking library which will intercept the requests and responses in the integration tests
- create ./src/mocks/handler/heroHandler.ts
- create ./src/mocks/handler/index.ts
- create ./src/mocks/server.ts
- update the ./src/setupTests.ts

## Integration tests

- write integration tests, ./src/pages/tests/HeroesPage.test.ts, check if title and loading message is appearing
- write a test if the mark message will appear after clicking the mark button

## Delete hero from the UI (store)

- create a function to temporary delete a hero
- create a button to temporary delete a hero

## Delete hero from the UI (store)

- create a function to temporary delete a hero by updating the ./src/feature/heroes s
- update the heroTypes.ts
- update the heroSlice.ts
- create a button to temporary delete a hero
- add a test for temporary remove of hero

## Delete hero from the UI (store) and from the database

- create a function to permanently delete a hero by updating the ./src/feature/heroes
- update the heroTypes.ts
- update the heroAsyncActions.ts
- update the heroSlice.ts
- create a button to permanently delete a hero
- add a test for permanent delete a hero

## Add hero

```bash
npm i formik yup
```

- create a function to add a hero by updating the ./src/feature/heroes
- update the heroTypes.ts
- update the heroAsyncActions.ts
- update the heroSlice.ts
- create the SharedInput.tsx, ShareForm.tsx, and FormSubmission.tsx in the components folder
- create a button to add a hero
- import the FormSubmission on the HeroesPage and past the postHeroAction

## Villain Page

- create ./src/pages/VillainPage.tsx
- create features/villains/query.ts
- update the ./src/pages/VillainPage.tsx
