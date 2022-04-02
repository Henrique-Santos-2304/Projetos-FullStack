import { Story, Meta } from "@storybook/react";
import MainRegister from ".";

export default {
  title: "MainRegister",
  component: MainRegister,
} as Meta;

export const Basic: Story = (args) => <MainRegister {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <MainRegister {...args} />;
