import MainAddNewMeals from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MainAddNewMeals />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MainAddNewMeals />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
