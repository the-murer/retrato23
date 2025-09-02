import type { Meta, StoryObj } from "@storybook/nextjs";
import { GalleryShowcase } from "../../../components/ui/galleryShowcase";
import React from "react";

const meta = {
  title: "UI/GalleryShowcase",
  component: GalleryShowcase,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A gallery showcase component for displaying collections of images in an attractive grid layout. Features responsive design and hover effects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: { type: "object" },
      description: "Array of image objects with src, alt, and optional caption",
    },
    columns: {
      control: { type: "select" },
      options: [2, 3, 4, 5, 6],
      description: "Number of columns in the grid",
    },
    gap: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Gap between grid items",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait Photography 1",
        caption: "Professional Portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature Photography 1",
        caption: "Natural Beauty",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract Art 1",
        caption: "Creative Vision",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait Photography 2",
        caption: "Elegant Portraits",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature Photography 2",
        caption: "Wilderness",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract Art 2",
        caption: "Modern Art",
      },
    ],
    columns: 3,
    gap: "md",
  },
} satisfies Meta<typeof GalleryShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default gallery
export const Default: Story = {
  args: {},
};

// Different column layouts
export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
  },
};

export const SixColumns: Story = {
  args: {
    columns: 6,
  },
};

// Different gap sizes
export const SmallGap: Story = {
  args: {
    gap: "sm",
  },
};

export const LargeGap: Story = {
  args: {
    gap: "lg",
  },
};

// Many images
export const ManyImages: Story = {
  args: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait 1",
        caption: "Portrait 1",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature 1",
        caption: "Nature 1",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract 1",
        caption: "Abstract 1",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait 2",
        caption: "Portrait 2",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature 2",
        caption: "Nature 2",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract 2",
        caption: "Abstract 2",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait 3",
        caption: "Portrait 3",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature 3",
        caption: "Nature 3",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract 3",
        caption: "Abstract 3",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait 4",
        caption: "Portrait 4",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature 4",
        caption: "Nature 4",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract 4",
        caption: "Abstract 4",
      },
    ],
    columns: 4,
  },
};

// Images without captions
export const NoCaptions: Story = {
  args: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait Photography 1",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature Photography 1",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract Art 1",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Portrait Photography 2",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Nature Photography 2",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Abstract Art 2",
      },
    ],
  },
};

// Mixed aspect ratios
export const MixedAspectRatios: Story = {
  args: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Landscape",
        caption: "Landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
        alt: "Portrait",
        caption: "Portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        alt: "Landscape",
        caption: "Landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
        alt: "Portrait",
        caption: "Portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        alt: "Landscape",
        caption: "Landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop",
        alt: "Portrait",
        caption: "Portrait",
      },
    ],
    columns: 3,
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: "max-w-6xl shadow-2xl rounded-2xl overflow-hidden p-6 bg-muted/30",
  },
};

// Different viewport sizes
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  args: {
    columns: 2,
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  args: {
    columns: 3,
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
  args: {
    columns: 4,
  },
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

// In context examples
export const InSection: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of stunning photography work
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  args: {},
};

// Minimal gallery
export const Minimal: Story = {
  args: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        alt: "Single Image",
      },
    ],
    columns: 1,
  },
};
