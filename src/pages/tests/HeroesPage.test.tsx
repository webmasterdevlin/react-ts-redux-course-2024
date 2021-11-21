import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils/testing-library-utils";
import HeroesPage from "../HeroesPage";

describe("Heroes Page", () => {
  it("should render title", () => {
    render(<HeroesPage />);

    const title = screen.getByTestId("title-page");
    expect(title).toBeInTheDocument();
  });

  it("should render loading message", () => {
    render(<HeroesPage />);

    const loading = screen.getByTestId("loading");
    expect(loading).toHaveTextContent(/loading.. please wait../i);
  });

  it("should mark a hero", async () => {
    render(<HeroesPage />);

    const buttons = await screen.findAllByTestId("mark-button");
    expect(buttons).toHaveLength(2);

    userEvent.click(buttons[0]);
    const cards = await screen.findAllByTestId("card");
    expect(cards[0]).toHaveTextContent("marked");
  });
});
