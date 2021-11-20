import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <>
          <NavigationBar />
          <LazyRoutes />
        </>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
