import { Container, CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";
import { configureAppStore } from "./store/configureStore";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <>
            <NavigationBar />
            <Container>
              <LazyRoutes />
            </Container>
          </>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );
}

export default App;
