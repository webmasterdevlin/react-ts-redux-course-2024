import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";

type Props = {
  children?: React.ReactNode;
};

const render = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: Props) => (
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
