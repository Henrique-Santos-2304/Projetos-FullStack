import Pagination from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Pagination />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Pagination />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
