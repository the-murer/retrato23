import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Input } from "../../../components/common/input";
import { Typography } from "../../../components/common/typography";
import { Card } from "../../../components/common/card";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    helperText: { control: "text" },
    isRequired: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Enter text...",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Input Stories
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
  },
};

export const Required: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    isRequired: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    helperText: "Password must be at least 8 characters long",
    type: "password",
  },
};

// Variant Stories
export const Error: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    variant: "error",
    error: "Please enter a valid email address",
  },
};

export const Success: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    variant: "success",
    helperText: "Email address is valid",
    defaultValue: "user@example.com",
  },
};

export const Warning: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    variant: "warning",
    helperText: "Username should be unique",
    defaultValue: "user123",
  },
};

// Size Stories
export const Small: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    size: "lg",
  },
};

// Icon Stories
export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search for products...",
    leftIcon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    rightIcon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Amount",
    placeholder: "0.00",
    leftIcon: (
      <span className="text-sm font-medium">$</span>
    ),
    rightIcon: (
      <span className="text-sm text-muted-foreground">USD</span>
    ),
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    defaultValue: "Cannot edit this",
  },
};

// Form Examples
export const FormExample: Story = {
  render: () => (
    <Card className="w-96 p-6">
      <Card.Header>
        <Card.Title>Contact Form</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          isRequired
        />
        <Input
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          isRequired
        />
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          type="tel"
        />
        <Input
          label="Message"
          placeholder="Enter your message"
          size="lg"
          helperText="Optional message"
        />
      </Card.Content>
    </Card>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Card className="w-80 p-6">
      <Card.Header>
        <Card.Title>Sign In</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          leftIcon={
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          }
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          leftIcon={
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
        />
      </Card.Content>
    </Card>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <Typography variant="h3" className="mb-4">Input Variants</Typography>
        <div className="space-y-4">
          <Input
            label="Default"
            placeholder="Default input"
            variant="default"
          />
          <Input
            label="Error"
            placeholder="Error input"
            variant="error"
            error="This field has an error"
          />
          <Input
            label="Success"
            placeholder="Success input"
            variant="success"
            helperText="This field is valid"
          />
          <Input
            label="Warning"
            placeholder="Warning input"
            variant="warning"
            helperText="Please review this field"
          />
        </div>
      </div>
      
      <div>
        <Typography variant="h3" className="mb-4">Input Sizes</Typography>
        <div className="space-y-4">
          <Input
            label="Small"
            placeholder="Small input"
            size="sm"
          />
          <Input
            label="Default"
            placeholder="Default input"
            size="default"
          />
          <Input
            label="Large"
            placeholder="Large input"
            size="lg"
          />
        </div>
      </div>
    </div>
  ),
};
