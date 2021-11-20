import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavigationBar />
        <LazyRoutes />
      </>
    </BrowserRouter>
  );
}

export default App;
