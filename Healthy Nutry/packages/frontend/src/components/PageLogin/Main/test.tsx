import { renderTheme } from "utils/testRenderTheme";
import { screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
