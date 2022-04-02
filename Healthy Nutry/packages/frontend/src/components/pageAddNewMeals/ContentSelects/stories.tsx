import { Story, Meta } from "@storybook/react";
import ContentSelects from ".";

export default {
  title: "ContentSelects",
  component: ContentSelects,
} as Meta;

export const Basic: Story = (args) => <ContentSelects {...args} />;

Basic.args = {
  title: "title basic",
  description: "description basic",
};

export const Default: Story = (args) => <ContentSelects {...args} />;
