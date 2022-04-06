import { screen, render } from "@testing-library/react";
import FileInput from "./FileInput";

describe("FileInput component", () => {
  it("should render correctly", () => {
    const onChange = jest.fn();
    render(<FileInput placeholder={"placeholder"} onChange={onChange} />);
    expect(screen.getByTestId("fileInputed")).toBeInTheDocument();
  });
});
