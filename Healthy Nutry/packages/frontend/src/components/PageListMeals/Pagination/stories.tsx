import { Story, Meta } from "@storybook/react";
import Pagination from ".";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

export const Basic: Story = (args) => <Pagination {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <Pagination {...args} />;
