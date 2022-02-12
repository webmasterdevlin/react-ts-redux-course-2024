import { Container, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LazyRoutes from "./LazyRoutes";
import { reduxStore } from "./store/configureStore";

function App() {
  return (
    <Provider store={reduxStore}>
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
