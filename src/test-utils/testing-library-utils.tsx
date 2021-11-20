import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";
import { ReactElement } from "react";

const render = (ui: ReactElement, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: any) => (
    <CssBaseline>
      <BrowserRouter>
        <>
          <NavigationBar />
          <Container>{children}</Container>
        </>
      </BrowserRouter>
    </CssBaseline>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
