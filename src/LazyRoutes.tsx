import React, { ElementType, lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading</h1>}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage")));
const HeroesPage = Loadable(lazy(() => import("./pages/HeroesPage")));
const VillainsPage = Loadable(lazy(() => import("./pages/VillainsPage")));

type Paths = {
  home: string;
  heroes: string;
  villains: string;
};

export const pathNames: Paths = {
  home: "/",
  heroes: "/heroes",
  villains: "/villains",
};

const lazyRoutes: RouteObject[] = [
  {
    path: pathNames.home,
    element: <HomePage />,
  },
  {
    path: pathNames.heroes,
    element: <HeroesPage />,
  },
  {
    path: pathNames.villains,
    element: <VillainsPage />,
  },
];

const LazyRoutes = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default LazyRoutes;
