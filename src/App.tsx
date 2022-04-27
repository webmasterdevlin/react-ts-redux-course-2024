import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LazyRoutes from "./LazyRoutes";

function App() {
  return (
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
  );
}

export default App;
