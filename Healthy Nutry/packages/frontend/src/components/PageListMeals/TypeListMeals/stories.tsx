import { Story, Meta } from "@storybook/react";
import TypeListMeals from ".";

export default {
  title: "TypeListMeals",
  component: TypeListMeals,
} as Meta;

export const Basic: Story = (args) => <TypeListMeals {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <TypeListMeals {...args} />;
