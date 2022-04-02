import MainRegister from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MainRegister />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MainRegister />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
