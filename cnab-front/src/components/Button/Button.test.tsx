import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button component", () => {
  it("should render correctly", () => {
    render(<Button description="button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should call onButtonClick when button was clicked", () => {
    const onButtonClick = jest.fn();
    render(<Button onClick={onButtonClick} description="button" />);
    userEvent.click(screen.getByTestId("button"));
    expect(onButtonClick).toBeCalledTimes(1);
  });
});
