import Logo from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Logo />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Logo />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
