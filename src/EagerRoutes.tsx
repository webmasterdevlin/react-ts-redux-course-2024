import { Route, Routes } from "react-router-dom";
import HeroesPage from "./pages/HeroesPage";
import HomePage from "./pages/HomePage";
import VillainsPage from "./pages/VillainsPage";

const EagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes" element={<HeroesPage />} />
      <Route path="/villains" element={<VillainsPage />} />
    </Routes>
  );
};

export default EagerRoutes;
