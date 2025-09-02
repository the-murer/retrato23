import type { Meta, StoryObj } from "@storybook/nextjs";
import { Typography } from "../../components/common/typography";
import { Button } from "../../components/common/button";
import { Card } from "../../components/common/card";
import { Section } from "../../components/common/section";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
// import { Input } from "../../components/common/input";
// import ProjectCard from "../../components/ui/projectCard";
// import Carousel from "../../components/ui/carousel";
import { SectionHeader } from "../../components/ui/sectionHeader";
import { GalleryShowcase } from "../../components/ui/galleryShowcase";
import React from "react";

const meta = {
  title: "Overview/Component Library",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive overview of all available components in the design system. Use this to explore and test different components and their variations.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Component showcase
export const ComponentShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="pt-20">
        {/* Hero Section */}
        <Section tone="primary" padding="xl">
          <div className="text-center">
            <Typography variant="h1" className="mb-6">
              Component Library
            </Typography>
            <Typography variant="body" className="mb-8 max-w-2xl mx-auto">
              Explore our comprehensive collection of reusable components
              designed for high performance and beautiful user experiences.
            </Typography>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </Section>

        {/* Common Components */}
        <Section tone="muted" padding="lg">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Common Components"
              subtitle="Layout & Structure"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <Typography variant="h3">Section Component</Typography>
                <Typography variant="body" className="text-muted-foreground">
                  Flexible section component with multiple background types,
                  tones, and padding options.
                </Typography>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Stories
                  </Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Typography variant="h3">Header Component</Typography>
                <Typography variant="body" className="text-muted-foreground">
                  Responsive header with navigation, logo, and mobile menu
                  support.
                </Typography>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Stories
                  </Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* UI Components */}
        <Section padding="lg">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="UI Components"
              subtitle="Interactive Elements"
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <Typography variant="h3">Input Fields</Typography>
                <Typography variant="body" className="text-muted-foreground">
                  Flexible input components with built-in styling and
                  accessibility features.
                </Typography>
                {/* <Input placeholder="Sample input" className="w-full" /> */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Stories
                  </Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Typography variant="h3">Project Cards</Typography>
                <Typography variant="body" className="text-muted-foreground">
                  Versatile cards for showcasing portfolio items and projects.
                </Typography>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Stories
                  </Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Typography variant="h3">Carousel</Typography>
                <Typography variant="body" className="text-muted-foreground">
                  Interactive carousel with navigation controls and autoplay
                  options.
                </Typography>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Stories
                  </Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section tone="accent" padding="lg">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Gallery Components"
              subtitle="Visual Content"
            />

            <div className="mt-12">
              <GalleryShowcase
                projects={[
                  {
                    imageUrl:
                      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                    imageAlt: "Portrait Photography",
                    description: "Professional Portraits",
                    id: "",
                    title: "1",
                  },
                  {
                    imageUrl:
                      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
                    imageAlt: "Nature Photography",
                    description: "Natural Beauty",
                    id: "2",
                    title: "2",
                  },
                  {
                    imageUrl:
                      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
                    imageAlt: "Abstract Art",
                    description: "Creative Vision",
                    id: "3",
                    title: "3",
                  },
                ]}
                title="Gallery"
                description="Gallery"
              />
            </div>
          </div>
        </Section>

        {/* Interactive Demo */}
        <Section padding="lg">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Interactive Demo" subtitle="Try Components" />

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <Typography variant="h3">Button Variations</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>

                <Typography variant="h3">Button Sizes</Typography>
                <div className="flex items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div className="space-y-6">
                <Typography variant="h3">Typography Scale</Typography>
                <div className="space-y-2">
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="body">
                    Body text with good readability
                  </Typography>
                  <Typography variant="caption">
                    Caption text for smaller details
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Cards Section */}
        <Section tone="muted" padding="lg">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Card Components"
              subtitle="Content Containers"
            />

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <Card.Header>
                  <Card.Title>Basic Card</Card.Title>
                </Card.Header>
                <Card.Content>
                  <Typography variant="body">
                    A simple card with header, content, and footer sections.
                  </Typography>
                </Card.Content>
                <Card.Footer>
                  <Button size="sm">Action</Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Header>
                  <Card.Title>Feature Card</Card.Title>
                </Card.Header>
                <Card.Content>
                  <Typography variant="body">
                    Highlight important features or information in an organized
                    way.
                  </Typography>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Header>
                  <Card.Title>Interactive Card</Card.Title>
                </Card.Header>
                <Card.Content>
                  <Typography variant="body">
                    Cards can include interactive elements and rich content.
                  </Typography>
                </Card.Content>
                <Card.Footer>
                  <div className="flex gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="outline" size="sm">
                      Secondary
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  ),
};
