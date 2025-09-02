# Storybook Component Library

This Storybook instance provides a comprehensive showcase of all reusable components in our design system. It's designed to help developers understand, test, and customize components before implementing them in the application.

## 🚀 Getting Started

### Running Storybook

```bash
# Development mode
npm run storybook

# Build for production
npm run build-storybook
```

Storybook will be available at `http://localhost:6006` in development mode.

## 📚 Component Organization

### Common Components (`/stories/common/`)
Core layout and structure components used across the application:

- **Section** - Flexible section component with multiple background types, tones, and padding options
- **Header** - Responsive header with navigation, logo, and mobile menu
- **Footer** - Comprehensive footer with navigation links and contact information

### UI Components (`/stories/ui/`)
Reusable interactive elements and content display components:

- **Button** - Versatile button component with multiple variants and sizes
- **Input** - Form input component with built-in styling and accessibility
- **Card** - Content container with header, content, and footer sections
- **ProjectCard** - Specialized card for showcasing portfolio items and projects
- **Carousel** - Interactive carousel with navigation controls and autoplay
- **SectionHeader** - Section title component with optional subtitle, description, and actions
- **GalleryShowcase** - Image gallery component with responsive grid layout

### Typography (`/stories/typography/`)
Text components for consistent typography across the application.

## 🎨 Component Features

### High Performance
- Optimized rendering with React best practices
- Minimal re-renders through proper prop handling
- Efficient CSS-in-JS implementation

### Customization
- Extensive prop-based customization options
- CSS class overrides for advanced styling
- Theme-aware components with consistent design tokens

### Accessibility
- ARIA attributes and semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Responsive Design
- Mobile-first approach
- Viewport-specific behaviors
- Flexible layouts that adapt to different screen sizes

## 🔧 Using Components

### Basic Usage

Each component story demonstrates:
- **Default state** - Basic component with minimal props
- **Variants** - Different visual styles and configurations
- **States** - Interactive states like hover, focus, disabled
- **Sizes** - Various size options where applicable
- **Customization** - Examples of custom styling and behavior

### Customization Examples

#### Section Component
```tsx
<Section 
  tone="primary" 
  padding="xl"
  background={{
    type: "gradient",
    from: "from-blue-600",
    to: "to-purple-600"
  }}
>
  {/* Content */}
</Section>
```

#### Button Component
```tsx
<Button 
  variant="outline" 
  size="lg"
  className="custom-button-class"
>
  Custom Button
</Button>
```

#### Input Component
```tsx
<Input
  type="email"
  placeholder="Enter your email"
  className="w-full max-w-md"
  aria-invalid={false}
/>
```

## 📱 Viewport Testing

Use Storybook's viewport controls to test components at different screen sizes:
- **Mobile** - 375x667px
- **Tablet** - 768x1024px  
- **Desktop** - 1280x800px
- **Wide** - 1920x1080px

## 🎭 Interactive Testing

### Controls Panel
- Modify component props in real-time
- Test different configurations
- See immediate visual feedback

### Actions Panel
- Monitor component interactions
- Test event handlers
- Debug user interactions

### Viewport Controls
- Test responsive behavior
- Verify mobile/desktop layouts
- Check component adaptability

## 🎨 Design System Integration

### Color Palette
- **Primary** - Main brand colors
- **Secondary** - Supporting colors
- **Muted** - Subtle background colors
- **Accent** - Highlight colors
- **Foreground/Background** - Text and surface colors

### Spacing Scale
- **sm** - 8px (2rem)
- **md** - 12px (3rem)
- **lg** - 16px (4rem)
- **xl** - 24px (6rem)

### Typography Scale
- **h1** - Large headings (3rem+)
- **h2** - Section headings (2.25rem)
- **h3** - Subsection headings (1.875rem)
- **body** - Body text (1rem)
- **caption** - Small text (0.875rem)

## 🚀 Best Practices

### Component Development
1. **Start with Storybook** - Develop components in isolation
2. **Test all variants** - Ensure every prop combination works
3. **Responsive design** - Test across all viewport sizes
4. **Accessibility** - Verify ARIA attributes and keyboard navigation
5. **Performance** - Monitor rendering performance

### Story Creation
1. **Clear naming** - Use descriptive story names
2. **Comprehensive coverage** - Include all variants and states
3. **Real examples** - Use realistic data and content
4. **Interactive demos** - Show component behavior
5. **Documentation** - Explain component purpose and usage

### Customization
1. **Use design tokens** - Leverage existing color and spacing values
2. **Extend, don't override** - Build upon existing styles
3. **Consistent patterns** - Follow established component patterns
4. **Performance first** - Optimize for rendering performance

## 🔍 Troubleshooting

### Common Issues

**Component not rendering**
- Check import paths
- Verify component exports
- Check for missing dependencies

**Styles not applying**
- Verify Tailwind CSS is loaded
- Check CSS class names
- Ensure design tokens are available

**Interactive features not working**
- Check event handler props
- Verify component state management
- Test in different viewport sizes

### Getting Help

1. **Check component stories** - Look for usage examples
2. **Review component props** - Check TypeScript definitions
3. **Test in isolation** - Use Storybook's isolated view
4. **Check console errors** - Look for JavaScript errors
5. **Review design system** - Ensure consistency with patterns

## 📖 Additional Resources

- [Storybook Documentation](https://storybook.js.org/)
- [React Best Practices](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Design System Guidelines](https://designsystem.digital.gov/)

## 🤝 Contributing

When adding new components or stories:

1. **Follow naming conventions** - Use consistent file and component names
2. **Include comprehensive stories** - Cover all variants and states
3. **Add documentation** - Explain component purpose and usage
4. **Test thoroughly** - Verify across all viewport sizes
5. **Update this README** - Keep documentation current

---

**Happy coding! 🎉**
