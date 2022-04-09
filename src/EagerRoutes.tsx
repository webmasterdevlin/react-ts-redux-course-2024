import { Route, Routes } from "react-router-dom";
import HeroesPage from "./pages/HeroesPage";
import HomePage from "./pages/HomePage";

const EagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes" element={<HeroesPage />} />
    </Routes>
  );
};

export default EagerRoutes;
