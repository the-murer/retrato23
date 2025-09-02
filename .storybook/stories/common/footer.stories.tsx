import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "../../../components/common/footer";
import React from "react";

const meta = {
  title: "Common/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A comprehensive footer component with navigation links, social media, and contact information. Designed to be responsive and customizable.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-4">Page Content</h1>
          <p className="text-lg text-muted-foreground mb-4">
            This is the main page content to demonstrate the footer positioning.
          </p>
          <p className="text-muted-foreground">
            The footer will appear at the bottom of the viewport.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default footer
export const Default: Story = {
  args: {},
};

// Footer with different backgrounds
export const OnColoredBackground: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col">
        <div className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Colored Background</h1>
          <p className="text-lg text-white/90">
            Footer on a colored background.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  args: {},
};

// Footer with image background
export const OnImageBackground: Story = {
  decorators: [
    (Story) => (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop')"
        }}
      >
        <div className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Image Background</h1>
          <p className="text-lg text-white/90">
            Footer on an image background.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  args: {},
};

// Custom styling example
export const CustomStyling: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-4">Custom Styling</h1>
          <p className="text-lg text-muted-foreground">
            Footer with custom styling applied.
          </p>
        </div>
        <div className="[&_footer]:border-t-4 [&_footer]:border-primary [&_footer]:shadow-lg">
          <Story />
        </div>
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
