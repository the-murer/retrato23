import type { Meta, StoryObj } from "@storybook/nextjs";
import { Section } from "../../../components/common/section";
import { Typography } from "../../../components/common/typography";
import { Button } from "../../../components/common/button";
import React from "react";

const meta = {
  title: "Common/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible section component with multiple background types, tones, and padding options. Perfect for creating consistent page layouts with customizable styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "muted",
        "accent",
        "inverted",
      ],
      description: "The color tone of the section",
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Vertical padding size",
    },
    container: {
      control: { type: "boolean" },
      description: "Whether to apply container constraints",
    },
    background: {
      control: { type: "object" },
      description: "Background configuration (solid, gradient, or image)",
    },
    overlayClassName: {
      control: { type: "text" },
      description: "CSS classes for overlay styling",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    tone: "default",
    padding: "lg",
    container: true,
    background: { type: "solid", color: "default" },
    children: (
      <div className="text-center">
        <Typography variant="h1" className="mb-6">
          Section Title
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          This is a sample section with customizable background, tone, and
          padding. Use the controls to explore different configurations and see
          how the component adapts.
        </Typography>
        <div className="flex gap-4 justify-center">
          <Button>Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
      </div>
    ),
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default section with solid background
export const Default: Story = {
  args: {},
};

// Section with different tones
export const PrimaryTone: Story = {
  args: {
    tone: "primary",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Primary Section
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          This section uses the primary tone with enhanced visual hierarchy.
        </Typography>
        <Button variant="secondary">Learn More</Button>
      </div>
    ),
  },
};

export const SecondaryTone: Story = {
  args: {
    tone: "secondary",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Secondary Section
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          A secondary tone section for supporting content.
        </Typography>
      </div>
    ),
  },
};

export const MutedTone: Story = {
  args: {
    tone: "muted",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Muted Section
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          Subtle muted background for less prominent content.
        </Typography>
      </div>
    ),
  },
};

export const InvertedTone: Story = {
  args: {
    tone: "inverted",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Inverted Section
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          Dark background with light text for high contrast.
        </Typography>
      </div>
    ),
  },
};

// Different padding options
export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: (
      <div className="text-center">
        <Typography variant="h3" className="mb-4">
          Small Padding
        </Typography>
        <Typography variant="body">
          This section uses minimal vertical spacing.
        </Typography>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: "xl",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-8">
          Extra Large Padding
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          Generous spacing for hero sections or important content.
        </Typography>
        <Button size="lg">Get Started</Button>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div className="text-center py-8">
        <Typography variant="h3">No Padding Section</Typography>
        <Typography variant="body">
          Custom padding applied manually for precise control.
        </Typography>
      </div>
    ),
  },
};

// Gradient backgrounds
export const GradientBackground: Story = {
  args: {
    background: {
      type: "gradient",
      from: "from-blue-600",
      to: "to-purple-600",
      directionClass: "bg-gradient-to-br",
    },
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6 text-white">
          Gradient Background
        </Typography>
        <Typography
          variant="body"
          className="mb-8 max-w-2xl mx-auto text-white/90"
        >
          Beautiful gradient background with customizable colors and direction.
        </Typography>
        <Button variant="secondary">Explore</Button>
      </div>
    ),
  },
};

export const DiagonalGradient: Story = {
  args: {
    background: {
      type: "gradient",
      from: "from-green-400",
      to: "to-blue-500",
      directionClass: "bg-gradient-to-tr",
    },
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6 text-white">
          Diagonal Gradient
        </Typography>
        <Typography
          variant="body"
          className="mb-8 max-w-2xl mx-auto text-white/90"
        >
          Top-right diagonal gradient for dynamic visual interest.
        </Typography>
      </div>
    ),
  },
};

// Image backgrounds
export const ImageBackground: Story = {
  args: {
    background: {
      type: "image",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
      behavior: "fixed",
      positionClass: "bg-center",
    },
    overlayClassName: "bg-black/50",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6 text-white">
          Image Background
        </Typography>
        <Typography
          variant="body"
          className="mb-8 max-w-2xl mx-auto text-white/90"
        >
          Stunning image background with overlay for text readability.
        </Typography>
        <Button variant="secondary">View Gallery</Button>
      </div>
    ),
  },
};

export const ScrollImageBackground: Story = {
  args: {
    background: {
      type: "image",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop",
      behavior: "scroll",
      positionClass: "bg-top",
    },
    overlayClassName: "bg-gradient-to-b from-black/60 to-transparent",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6 text-white">
          Scroll Image Background
        </Typography>
        <Typography
          variant="body"
          className="mb-8 max-w-2xl mx-auto text-white/90"
        >
          Image that scrolls with content, creating a parallax-like effect.
        </Typography>
      </div>
    ),
  },
};

// Container variations
export const NoContainer: Story = {
  args: {
    container: false,
    children: (
      <div className="text-center px-4">
        <Typography variant="h3" className="mb-6">
          No Container
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          This section doesn't use the container class, allowing full-width
          content.
        </Typography>
      </div>
    ),
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: "border-t-4 border-primary shadow-lg",
    children: (
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Custom Styling
        </Typography>
        <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
          Additional custom classes applied for unique styling.
        </Typography>
      </div>
    ),
  },
};

// Complex content example
export const ComplexContent: Story = {
  args: {
    tone: "accent",
    padding: "xl",
    children: (
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Typography variant="h2" className="mb-6">
            Complex Layout
          </Typography>
          <Typography variant="body" className="mb-6">
            This section demonstrates how the Section component handles complex
            content layouts with multiple columns and various elements.
          </Typography>
          <div className="flex gap-4">
            <Button>Primary</Button>
            <Button variant="outline">Secondary</Button>
          </div>
        </div>
        <div className="bg-background/50 p-8 rounded-lg border">
          <Typography variant="h3" className="mb-4">
            Feature Highlight
          </Typography>
          <Typography variant="body">
            Showcase important features or information in a highlighted box.
          </Typography>
        </div>
      </div>
    ),
  },
};
