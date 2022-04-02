import { Story, Meta } from "@storybook/react";
import MainAddNewMeals from ".";

export default {
  title: "MainAddNewMeals",
  component: MainAddNewMeals,
} as Meta;

export const Basic: Story = (args) => <MainAddNewMeals {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MainAddNewMeals {...args} />;
