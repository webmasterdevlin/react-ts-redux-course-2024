import { render, screen } from "../../test-utils/testing-library-utils";
import HeroesPage from "../HeroesPage";

describe("Heroes Page", () => {
  it("should render title", () => {
    render(<HeroesPage />);

    const title = screen.getByTestId("title-page");
    expect(title).toBeInTheDocument();
  });
});
