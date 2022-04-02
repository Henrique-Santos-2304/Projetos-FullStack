import ContentSelects from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<ContentSelects />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ContentSelects />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
