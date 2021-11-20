import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";
import { configureAppStore } from "../store/configureStore";

const render = (ui, { store = configureAppStore(), ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <>
            <NavigationBar />
            <Container>{children}</Container>
          </>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
