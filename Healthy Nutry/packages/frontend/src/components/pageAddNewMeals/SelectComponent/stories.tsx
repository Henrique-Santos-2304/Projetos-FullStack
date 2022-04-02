import { Story, Meta } from "@storybook/react";
import SelectComponent from ".";

export default {
  title: "SelectComponent",
  component: SelectComponent,
} as Meta;

export const Basic: Story = (args) => <SelectComponent {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <SelectComponent {...args} />;
