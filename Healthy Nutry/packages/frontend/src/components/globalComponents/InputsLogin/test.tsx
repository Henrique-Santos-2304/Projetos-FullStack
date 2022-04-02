import InputsLogin from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<InputsLogin />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<InputsLogin />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
