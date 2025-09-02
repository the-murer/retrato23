import type { Meta, StoryObj } from "@storybook/nextjs";
import { Carousel } from "../../../components/ui/carousel";
import { Typography } from "../../../components/common/typography";
import { Button } from "../../../components/common/button";
import React from "react";

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A responsive carousel component with navigation controls, autoplay, and customizable options. Perfect for image galleries, testimonials, and content sliders.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
      description: "Array of carousel items",
    },
    autoplay: {
      control: { type: "boolean" },
      description: "Whether to enable autoplay",
    },
    autoplaySpeed: {
      control: { type: "number" },
      description: "Autoplay interval in milliseconds",
    },
    showDots: {
      control: { type: "boolean" },
      description: "Whether to show navigation dots",
    },
    showArrows: {
      control: { type: "boolean" },
      description: "Whether to show navigation arrows",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    items: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Portrait Photography",
        description: "Professional portrait sessions",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Nature Photography",
        description: "Capturing the beauty of nature",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "Abstract Art",
        description: "Creative and artistic compositions",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Urban Photography",
        description: "City life and architecture",
      },
    ],
    autoplay: false,
    autoplaySpeed: 3000,
    showDots: true,
    showArrows: true,
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default carousel
export const Default: Story = {
  args: {},
};

// Carousel with autoplay
export const WithAutoplay: Story = {
  args: {
    autoplay: true,
    autoplaySpeed: 2000,
  },
};

// Carousel without dots
export const NoDots: Story = {
  args: {
    showDots: false,
  },
};

// Carousel without arrows
export const NoArrows: Story = {
  args: {
    showArrows: false,
  },
};

// Carousel with minimal controls
export const MinimalControls: Story = {
  args: {
    showDots: false,
    showArrows: false,
  },
};

// Fast autoplay
export const FastAutoplay: Story = {
  args: {
    autoplay: true,
    autoplaySpeed: 1000,
  },
};

// Slow autoplay
export const SlowAutoplay: Story = {
  args: {
    autoplay: true,
    autoplaySpeed: 5000,
  },
};

// Many items
export const ManyItems: Story = {
  args: {
    items: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Portrait 1",
        description: "Professional portrait sessions",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Nature 1",
        description: "Capturing the beauty of nature",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "Abstract 1",
        description: "Creative and artistic compositions",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Urban 1",
        description: "City life and architecture",
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Portrait 2",
        description: "More professional portraits",
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "Nature 2",
        description: "More nature photography",
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Abstract 2",
        description: "More abstract art",
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Urban 2",
        description: "More urban photography",
      },
    ],
  },
};

// Different content types
export const WithTextContent: Story = {
  args: {
    items: [
      {
        id: 1,
        content: (
          <div className="text-center p-8">
            <Typography variant="h2" className="mb-4">
              Welcome to Our Studio
            </Typography>
            <Typography variant="body" className="mb-6">
              We specialize in capturing beautiful moments and creating lasting memories.
            </Typography>
            <Button>Book Session</Button>
          </div>
        ),
      },
      {
        id: 2,
        content: (
          <div className="text-center p-8">
            <Typography variant="h2" className="mb-4">
              Professional Quality
            </Typography>
            <Typography variant="body" className="mb-6">
              Our team of experts ensures every shot is perfect.
            </Typography>
            <Button variant="outline">Learn More</Button>
          </div>
        ),
      },
      {
        id: 3,
        content: (
          <div className="text-center p-8">
            <Typography variant="h2" className="mb-4">
              Creative Vision
            </Typography>
            <Typography variant="body" className="mb-6">
              We bring your ideas to life with artistic flair.
            </Typography>
            <Button>Get Started</Button>
          </div>
        ),
      },
    ],
  },
};

// Mixed content types
export const MixedContent: Story = {
  args: {
    items: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Portrait Photography",
        description: "Professional portrait sessions",
      },
      {
        id: 2,
        content: (
          <div className="text-center p-8 bg-primary text-primary-foreground">
            <Typography variant="h2" className="mb-4">
              Special Offer
            </Typography>
            <Typography variant="body" className="mb-6">
              Book your session today and get 20% off!
            </Typography>
            <Button variant="secondary">Claim Offer</Button>
          </div>
        ),
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Nature Photography",
        description: "Capturing the beauty of nature",
      },
    ],
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: "max-w-4xl shadow-2xl rounded-2xl overflow-hidden",
    items: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        title: "Custom Styled",
        description: "Carousel with custom styling",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        title: "Beautiful Design",
        description: "Enhanced visual appeal",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        title: "Professional Look",
        description: "Premium appearance",
      },
    ],
  },
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

// On different backgrounds
export const OnColoredBackground: Story = {
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
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
