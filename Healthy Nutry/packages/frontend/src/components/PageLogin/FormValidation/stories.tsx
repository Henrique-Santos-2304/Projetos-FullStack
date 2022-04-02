import { Story, Meta } from "@storybook/react";
import FormValidation from ".";

export default {
  title: "FormValidation",
  component: FormValidation,
} as Meta;

export const Basic: Story = (args) => <FormValidation {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <FormValidation {...args} />;
