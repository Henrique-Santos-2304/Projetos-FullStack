import FormValidation from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<FormValidation />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormValidation />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
