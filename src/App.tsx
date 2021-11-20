import { BrowserRouter } from "react-router-dom";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";

function App() {
  return (
    <BrowserRouter>
      <LazyRoutes />
    </BrowserRouter>
  );
}

export default App;
