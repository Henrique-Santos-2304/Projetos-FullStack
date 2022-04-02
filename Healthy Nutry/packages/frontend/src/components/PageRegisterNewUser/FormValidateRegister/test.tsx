import FormValidateRegister from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<FormValidateRegister />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormValidateRegister />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
