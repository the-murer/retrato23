import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProjectCard } from "../../../components/ui/projectCard";
import React from "react";

const meta = {
  title: "UI/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile project card component for showcasing portfolio items, projects, or any content with images, titles, descriptions, and tags. Features hover effects and responsive design.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the project",
    },
    description: {
      control: { type: "text" },
      description: "Description of the project",
    },
    imageUrl: {
      control: { type: "text" },
      description: "URL of the project image",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the image",
    },
    tags: {
      control: { type: "object" },
      description: "Array of tags to display",
    },
    category: {
      control: { type: "text" },
      description: "Category label to display",
    },
    year: {
      control: { type: "number" },
      description: "Year to display",
    },
    link: {
      control: { type: "text" },
      description: "Optional link URL",
    },
  },
  args: {
    title: "Elegant Portrait Photography",
    description: "A stunning collection of professional portrait photography showcasing natural beauty and artistic vision.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Portrait photography example",
    tags: ["Photography", "Portraits", "Professional"],
    category: "Portraits",
    year: 2024,
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default project card
export const Default: Story = {
  args: {},
};

// Card with different content
export const MinimalContent: Story = {
  args: {
    title: "Simple Project",
    description: "A project with minimal information.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    imageAlt: "Simple project",
    tags: [],
    category: undefined,
    year: undefined,
  },
};

export const WithTags: Story = {
  args: {
    title: "Tagged Project",
    description: "A project with multiple tags for categorization.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Tagged project",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Storybook"],
    category: "Web Development",
    year: 2024,
  },
};

export const WithCategory: Story = {
  args: {
    title: "Categorized Project",
    description: "A project with category and year information displayed prominently.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    imageAlt: "Categorized project",
    tags: ["Design", "UI/UX"],
    category: "Design",
    year: 2023,
  },
};

export const WithYearOnly: Story = {
  args: {
    title: "Year Only Project",
    description: "A project showing only the year without category.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Year only project",
    tags: ["Photography"],
    category: undefined,
    year: 2024,
  },
};

// Different image types
export const LandscapeImage: Story = {
  args: {
    title: "Landscape Project",
    description: "A project with a landscape-oriented image.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    imageAlt: "Landscape project",
    tags: ["Landscape", "Photography"],
    category: "Nature",
    year: 2024,
  },
};

export const PortraitImage: Story = {
  args: {
    title: "Portrait Project",
    description: "A project with a portrait-oriented image.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop",
    imageAlt: "Portrait project",
    tags: ["Portrait", "Photography"],
    category: "People",
    year: 2024,
  },
};

export const AbstractImage: Story = {
  args: {
    title: "Abstract Project",
    description: "A project with an abstract or artistic image.",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    imageAlt: "Abstract project",
    tags: ["Abstract", "Art", "Creative"],
    category: "Art",
    year: 2024,
  },
};

// Interactive states
export const WithLink: Story = {
  args: {
    title: "Linked Project",
    description: "This project card is clickable and links to an external URL.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Linked project",
    tags: ["Web", "Interactive"],
    category: "Web Development",
    year: 2024,
    link: "https://example.com",
  },
};

// Different content lengths
export const LongTitle: Story = {
  args: {
    title: "This is a Very Long Project Title That Might Wrap to Multiple Lines and Test the Component's Layout",
    description: "A project with an extremely long title to test how the component handles text overflow and wrapping.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    imageAlt: "Long title project",
    tags: ["Long Title", "Testing"],
    category: "Test",
    year: 2024,
  },
};

export const LongDescription: Story = {
  args: {
    title: "Long Description Project",
    description: "This is a very long description that goes on and on to test how the component handles extensive text content. It should demonstrate the component's ability to gracefully handle varying amounts of content while maintaining a consistent and attractive layout.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Long description project",
    tags: ["Long Description", "Content"],
    category: "Content",
    year: 2024,
  },
};

export const ManyTags: Story = {
  args: {
    title: "Many Tags Project",
    description: "A project with numerous tags to test the tag layout and wrapping.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    imageAlt: "Many tags project",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Storybook", "UI/UX", "Design", "Development", "Frontend", "Modern"],
    category: "Full Stack",
    year: 2024,
  },
};

// Grid layout examples
export const InGrid: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Story />
        <ProjectCard
          title="Second Project"
          description="Another amazing project in the grid."
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
          imageAlt="Second project"
          tags={["Design", "Creative"]}
          category="Design"
          year={2024}
        />
        <ProjectCard
          title="Third Project"
          description="Yet another project to complete the grid."
          imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
          imageAlt="Third project"
          tags={["Art", "Photography"]}
          category="Art"
          year={2024}
        />
      </div>
    ),
  ],
  args: {},
};

// Different themes/backgrounds
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

// Custom styling
export const CustomStyling: Story = {
  args: {
    title: "Custom Styled Project",
    description: "A project card with custom styling applied.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    imageAlt: "Custom styled project",
    tags: ["Custom", "Styling"],
    category: "Design",
    year: 2024,
    // className: "shadow-2xl border-2 border-primary",
  },
};
