import { Story, Meta } from "@storybook/react";
import FormValidateRegister from ".";

export default {
  title: "FormValidateRegister",
  component: FormValidateRegister,
} as Meta;

export const Basic: Story = (args) => <FormValidateRegister {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <FormValidateRegister {...args} />;
