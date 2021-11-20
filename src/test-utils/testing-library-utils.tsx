import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";

const AllTheProviders: React.FC = ({ children }: any) => {
  return (
    <CssBaseline>
      <BrowserRouter>
        <>
          <NavigationBar />
          <Container>{children}</Container>
        </>
      </BrowserRouter>
    </CssBaseline>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
