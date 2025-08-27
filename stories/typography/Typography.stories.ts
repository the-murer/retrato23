import type { Meta, StoryObj } from "@storybook/nextjs";

import { Typography } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Title: Story = {
  args: {
    variant: "title",
    children: "Title",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "Subtitle",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Body",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption",
  },
};
