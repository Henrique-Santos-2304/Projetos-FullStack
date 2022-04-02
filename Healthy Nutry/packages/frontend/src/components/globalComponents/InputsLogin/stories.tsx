import { Story, Meta } from "@storybook/react";
import InputsLogin from ".";

export default {
  title: "InputsLogin",
  component: InputsLogin,
} as Meta;

export const Basic: Story = (args) => <InputsLogin {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <InputsLogin {...args} />;
