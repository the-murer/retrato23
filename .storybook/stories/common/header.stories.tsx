import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "../../../components/common/header";
import React from "react";

const meta = {
  title: "Common/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A responsive header component with navigation, logo, and mobile menu. Features sticky positioning, backdrop blur, and theme-aware logo switching.",
      },
    },
    viewport: {
      defaultViewport: "desktop",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        <Story />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Page Content</h1>
          <p className="text-lg text-muted-foreground mb-4">
            This is the main page content to demonstrate the sticky header behavior.
          </p>
          <p className="text-muted-foreground">
            Scroll down to see how the header remains fixed at the top with backdrop blur effect.
          </p>
          <div className="mt-8 space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-4 bg-muted rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default header
export const Default: Story = {
  args: {},
};

// Mobile view
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  args: {},
};

// Tablet view
export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  args: {},
};

// Wide desktop view
export const WideDesktop: Story = {
  parameters: {
    viewport: { defaultViewport: "wide" },
  },
  args: {},
};

// With different backgrounds
export const OnColoredBackground: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
        <Story />
        <div className="p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Colored Background</h1>
          <p className="text-lg text-white/90 mb-4">
            The header adapts to different backgrounds with backdrop blur.
          </p>
        </div>
      </div>
    ),
  ],
  args: {},
};

// With image background
export const OnImageBackground: Story = {
  decorators: [
    (Story) => (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop')"
        }}
      >
        <Story />
        <div className="p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Image Background</h1>
          <p className="text-lg text-white/90 mb-4">
            Header with backdrop blur over an image background.
          </p>
        </div>
      </div>
    ),
  ],
  args: {},
};

// Interactive states
export const WithMenuOpen: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const menuButton = canvas.querySelector('button[aria-label="Toggle menu"]');
    if (menuButton) {
      menuButton.click();
    }
  },
  args: {},
};

// Custom styling example
export const CustomStyling: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        <div className="[&_header]:border-primary [&_header]:border-b-2 [&_header]:shadow-lg">
          <Story />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Custom Styling</h1>
          <p className="text-lg text-muted-foreground">
            Header with custom border and shadow styling applied via CSS.
          </p>
        </div>
      </div>
    ),
  ],
  args: {},
};
