import TypeListMeals from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<TypeListMeals />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<TypeListMeals />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
