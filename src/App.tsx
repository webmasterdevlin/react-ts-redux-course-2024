import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { reduxStore } from "./store/configureStore";
import EagerRoutes from "./EagerRoutes";

function App() {
  return (
    <Provider store={reduxStore}>
      <CssBaseline>
        <EagerRoutes />
      </CssBaseline>
    </Provider>
  );
}

export default App;
