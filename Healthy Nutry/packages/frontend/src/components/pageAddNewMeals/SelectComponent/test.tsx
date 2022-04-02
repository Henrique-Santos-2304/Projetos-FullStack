import SelectComponent from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<SelectComponent />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SelectComponent />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
