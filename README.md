# Minimal Portfolio Website

A clean, accessible personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui components. Features a strict black-and-white aesthetic with monospace typography.

## Features

- **Minimal Design**: Strict black & white palette with generous white space
- **Monospace Typography**: JetBrains Mono font throughout for a technical aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA+ contrast, semantic HTML, keyboard navigation
- **Fast**: Optimized with Next.js and Tailwind CSS
- **SEO Ready**: Meta tags and Open Graph support

## Pages

- **Home**: Hero section with call-to-action
- **Projects**: Grid of project cards with filtering
- **Project Detail**: Detailed project pages with problem/solution, gallery, and links
- **About**: Bio, skills, and timeline
- **Contact**: Contact form with alternative contact methods

## Getting Started

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Content

1. **Home Page** (`app/page.tsx`): Update hero text and stats
2. **Projects** (`app/projects/page.tsx`): Edit the `projects` array with your work
3. **Project Details** (`app/projects/[id]/page.tsx`): Update `projectDetails` object
4. **About** (`app/about/page.tsx`): Update bio, skills, and timeline
5. **Contact** (`app/contact/page.tsx`): Update email and social links

### Update Images

Replace placeholder images with your own:
- Update image URLs in project cards
- Add project screenshots to the `public` folder
- Update gallery images in project detail pages

### Customize Colors

Edit the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --border: #e5e5e5;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
}
\`\`\`

### Update Metadata

Edit `app/layout.tsx` to update:
- Site title
- Site description
- Open Graph image

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Font**: JetBrains Mono
- **Deployment**: Vercel

## Accessibility

This portfolio is built with accessibility in mind:
- High contrast (WCAG AA+)
- Semantic HTML
- Keyboard navigation
- Focus indicators
- Alt text for images
- Form labels

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Server-side rendering for fast initial load
- Responsive design for all devices

## Deployment

Deploy to Vercel with one click:

\`\`\`bash
npm run build
npm run start
\`\`\`

Or push to GitHub and connect to Vercel for automatic deployments.

## License

MIT License - feel free to use this template for your portfolio.
