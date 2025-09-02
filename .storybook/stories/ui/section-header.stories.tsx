import type { Meta, StoryObj } from "@storybook/nextjs";
import { SectionHeader } from "../../../components/ui/sectionHeader";
import { Typography } from "../../../components/common/typography";
import { Button } from "../../../components/common/button";
import React from "react";

const meta = {
  title: "UI/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A section header component that provides consistent styling for page sections with titles, descriptions, and optional actions. Perfect for creating clear content hierarchy.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The main title of the section",
    },
    subtitle: {
      control: { type: "text" },
      description: "Optional subtitle text",
    },
    description: {
      control: { type: "text" },
      description: "Description text below the title",
    },
    action: {
      control: { type: "object" },
      description: "Optional action element (button, link, etc.)",
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    title: "Our Services",
    subtitle: "What We Offer",
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default section header
export const Default: Story = {
  args: {},
};

// Left aligned
export const LeftAligned: Story = {
  args: {
    align: "left",
  },
};

// Right aligned
export const RightAligned: Story = {
  args: {
    align: "right",
  },
};

// With action button
export const WithAction: Story = {
  args: {
    action: <Button>Learn More</Button>,
    align: "center",
  },
};

// With outline button
export const WithOutlineAction: Story = {
  args: {
    action: <Button variant="outline">View All</Button>,
    align: "center",
  },
};

// With custom action
export const WithCustomAction: Story = {
  args: {
    action: (
      <div className="flex gap-2">
        <Button size="sm">Primary</Button>
        <Button variant="outline" size="sm">Secondary</Button>
      </div>
    ),
  },
};

// Minimal content
export const Minimal: Story = {
  args: {
    title: "Simple Title",
    subtitle: undefined,
    description: undefined,
  },
};

// With subtitle only
export const WithSubtitle: Story = {
  args: {
    title: "Main Title",
    subtitle: "Supporting Subtitle",
    description: undefined,
  },
};

// With description only
export const WithDescription: Story = {
  args: {
    title: "Main Title",
    subtitle: undefined,
    description: "This is a detailed description that provides more context about the section content.",
  },
};

// Long content
export const LongContent: Story = {
  args: {
    title: "This is a Very Long Section Title That Might Wrap to Multiple Lines and Test the Component's Layout",
    subtitle: "A Very Long Subtitle That Also Tests Text Wrapping and Layout Behavior",
    description: "This is an extremely long description that goes on and on to test how the component handles extensive text content. It should demonstrate the component's ability to gracefully handle varying amounts of content while maintaining a consistent and attractive layout.",
  },
};

// Different title sizes
export const LargeTitle: Story = {
  args: {
    title: "Large Title",
    className: "[&_h1]:text-5xl [&_h1]:font-bold",
  },
};

export const SmallTitle: Story = {
  args: {
    title: "Small Title",
    className: "[&_h1]:text-xl [&_h1]:font-medium",
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: "border-l-4 border-primary pl-6 bg-muted/50 p-6 rounded-lg",
  },
};

// With different backgrounds
export const OnColoredBackground: Story = {
  decorators: [
    (Story) => (
      <div className="p-8 bg-primary rounded-lg">
        <Story />
      </div>
    ),
  ],
  args: {},
};

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="p-8 bg-foreground rounded-lg">
        <Story />
      </div>
    ),
  ],
  args: {},
};

// Different viewport sizes
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  args: {},
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  args: {},
};

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
  args: {},
};

// In context examples
export const InSection: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl space-y-8">
        <Story />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p className="text-muted-foreground">Description of the first service.</p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Service 2</h3>
            <p className="text-muted-foreground">Description of the second service.</p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Service 3</h3>
            <p className="text-muted-foreground">Description of the third service.</p>
          </div>
        </div>
      </div>
    ),
  ],
  args: {},
};

// With different content types
export const WithRichContent: Story = {
  args: {
    title: "Rich Content Header",
    subtitle: "With Enhanced Elements",
    description: "This header demonstrates how to include rich content elements.",
    action: (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Available Now
        </div>
        <Button>Get Started</Button>
      </div>
    ),
  },
};
