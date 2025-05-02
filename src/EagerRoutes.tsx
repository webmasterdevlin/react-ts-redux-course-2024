import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HeroesPage from "./pages/HeroesPage";
// import HeroesPage, { loader as heroesLoader } from "./pages/HeroesPage";
import HomePage from "./pages/HomePage";
import VillainsPage from "./pages/VillainsPage";
import { reduxStore } from "./store/configureStore";
import Root from "./pages/root";
import { Suspense } from "react";



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<HomePage />} />
      <Route path="/heroes" element={<HeroesPage />}
      // loader={() => {
      //   return heroesLoader(reduxStore.dispatch);
      // }}
      />
      <Route path="/villains" element={<VillainsPage />} />
    </Route>
  )
)

export default function EagerRoutes() {
  return (
    <Suspense fallback={<h1>Fallback component from the root suspense</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}
