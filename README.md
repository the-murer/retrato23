# Retrato 23 - Luxury Photography Portfolio

A modern, elegant, and minimalist portfolio website for the photography brand Retrato 23. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

This website embodies luxury, sophistication, and artistic excellence, inspired by premium aesthetic clinics but adapted for photography. The design features:

- **Warm, sophisticated color palette**: Terracotta, beige, nude, and light brown tones
- **Elegant typography**: Serif fonts (Playfair Display, Cormorant Garamond) for titles, sans-serif (Inter) for body text
- **Minimalist aesthetic**: High focus on imagery with generous spacing and clean layouts
- **Smooth transitions**: Fade and parallax effects for enhanced user experience

## 🏗️ Project Structure

```
retrato-23/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections (Hero, Showcase, Services, etc.)
│   └── ui/                # Reusable UI components
├── public/                # Static assets
│   ├── showcase/          # Portfolio images
│   └── photographer/      # Photographer images
└── scripts/               # Utility scripts
```

## 🎯 Page Sections

### 1. Hero Section
- Warm gradient background (terracotta to beige)
- Large portrait photo as main highlight
- Elegant typography with brand messaging
- Call-to-action buttons for portfolio and booking

### 2. Showcase Section
- Split background (beige/gray)
- Grid of sample photography work
- Hover effects and category overlays
- Portfolio exploration CTA

### 3. Services Section
- Photography services with minimalist icons
- Categories: Portraits, Couples, Fashion & Editorial, Corporate, Events, Family
- Custom session information

### 4. About Section
- Light beige background
- Photographer's portrait and story
- Experience statistics
- Personal philosophy

### 5. Call-to-Action Section
- Strong terracotta gradient background
- Compelling booking messaging
- Contact and pricing CTAs

## 🎨 Color Palette

### Primary Colors (Terracotta)
- `terracotta-50`: #fef7f4
- `terracotta-500`: #ed7a4a
- `terracotta-600`: #de5d2a
- `terracotta-800`: #953d22

### Secondary Colors (Beige)
- `beige-50`: #fefefe
- `beige-200`: #faf8f5
- `beige-300`: #f5f1eb
- `beige-500`: #e0d5c8

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Playfair Display, Cormorant Garamond, Inter

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate placeholder images** (optional):
   ```bash
   node scripts/generate-placeholders.js
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Customization

### Colors
Update the color palette in `tailwind.config.ts` and `app/globals.css` to match your brand.

### Typography
Modify font imports in `app/layout.tsx` and font classes throughout components.

### Content
Update text content, images, and contact information in the respective component files.

### Images
Replace placeholder images in the `public/` directory with actual photography work.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Retrato 23** - Photography that values your essence.
