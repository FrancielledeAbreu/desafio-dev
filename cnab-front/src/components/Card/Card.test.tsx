import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("should render correctly", () => {
    render(<Card title={"title"} subtitle={"subtitle"} description={"Card"} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
