# Steps

- npx create-react-app my-app --template=typescript
- cd my-app

## Pick your UI library or UI framework

- tailwindcss
- material-ui
- antd
- styled-components
- emotion

## Create pages and routers

#### Setting up the routers is a one time setup.

#### Future pages will be registered in your router.

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

- npm i axios
- create ./src/api/genericApiCalls.ts

## Set up json-server and concurrently

- npm i -D json-server concurrently
- create ./src/json-server/db.json and ./src/json-server/routes.json
- add proxy in the packages.json
- update the scripts

## Set up the hero feature for redux

- npm i @reduxjs/toolkit react-redux redux-injectors redux
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
