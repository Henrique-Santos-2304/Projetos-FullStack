import { Story, Meta } from "@storybook/react";
import Logo from ".";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

export const Basic: Story = (args) => <Logo {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Logo {...args} />;
