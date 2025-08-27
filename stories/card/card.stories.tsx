import type { Meta, StoryObj } from "@storybook/nextjs";

import { Typography } from "../typography";
import { Card } from "./index";
import Image from "next/image";
import { Button } from "../button";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
  args: {
    title: "Card Title",
    children: <Typography variant="body">Card Content</Typography>,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Content>
          <Typography variant="body">Card Content</Typography>
        </Card.Content>
        <Card.Footer>
          <Typography variant="caption">Card Footer</Typography>
        </Card.Footer>
      </>
    ),
  },
};

export const ImageCard: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Content>
          <Image width={100} height={100} src="/next.svg" alt="Card Image" />
        </Card.Content>
        <Card.Footer>
          <Typography variant="caption">Card Footer</Typography>
        </Card.Footer>
      </>
    ),
  },
};

export const FixedSizeCard: Story = {
  args: {
    className: "w-96 h-96",
    children: (
      <>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
      </>
    ),
  },
};

export const CardWithButtons: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Content>
          <Typography variant="body">Card Content</Typography>
        </Card.Content>
        <Card.Footer>
          <Button>Button</Button>
        </Card.Footer>
      </>
    ),
  },
};
