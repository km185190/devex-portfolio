# DevEx Portfolio - Development Guide

A modern portfolio and blog focused on DevOps and Developer Experience, built with Astro and deployed on Cloudflare Pages.

## Development Environment Setup

### Prerequisites

```bash
node -v  # v18.x or higher
pnpm -v  # v8.x or higher
```

### Initial Setup

```bash
# Clone the repository
git clone [your-repo-url]
cd devex-portfolio

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
.
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── blog/      # Blog-specific components
│   │   ├── shared/    # Shared components
│   │   └── ui/        # Basic UI components
│   ├── content/       # Content collections
│   │   ├── blog/      # Blog posts
│   │   ├── authors/   # Author information
│   │   └── series/    # Series configurations
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route components
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
└── package.json
```

## Available Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Content Management

### Creating Blog Posts

Create new blog posts in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: "2024-02-11"
author: "your-author-id"
category: "DevOps"
tags: ["developer-experience", "devops", "automation"]
series: "series-id"
draft: false
---

Your content here...
```

### Series Configuration

Define series in `src/content/series/`:

```yaml
# src/content/series/devex-foundations.yaml
title: "DevEx Foundations"
description: "A comprehensive guide to Developer Experience"
order:
  - "building-better-experiences"
  - "manual-to-automated"
  - "technical-foundations"
```

### Author Profiles

Create author profiles in `src/content/authors/`:

```yaml
# src/content/authors/your-name.yaml
name: "Your Name"
bio: "Brief biography"
avatar: "/images/avatar.jpg"
social:
  twitter: "username"
  github: "username"
  linkedin: "username"
```

## Styling

### Tailwind CSS

- Uses Tailwind CSS with Typography plugin
- Custom theme configuration in `tailwind.config.cjs`
- Global styles in `src/styles/global.css`

### Adding Custom Styles

1. Extend Tailwind theme:

```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      // Your custom extensions
    }
  }
}
```

2. Add custom CSS:

```css
/* src/styles/global.css */
@layer components {
  .your-custom-class {
    /* Your styles */
  }
}
```

## Development Workflow

### Code Style

- TypeScript for type safety
- Strict mode enabled
- Path aliases configured for clean imports

### Working with Components

Create new components in appropriate directories:

```typescript
// src/components/ui/Button.astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const { variant = 'primary', size = 'md' } = Astro.props;
---

<button class:list={[
  'button',
  `button--${variant}`,
  `button--${size}`
]}>
  <slot />
</button>
```

### Type Safety

Utilize TypeScript features:

```typescript
// src/types/index.ts
export interface BlogPost {
  title: string;
  slug: string;
  // ... other properties
}
```

## Deployment

### Local Preview

```bash
# Build the site
pnpm build

# Preview the build
pnpm preview
```

### Cloudflare Pages

1. Push changes to main branch
2. Cloudflare Pages automatically builds and deploys

#### Environment Variables

Required in Cloudflare Pages dashboard:

```
NODE_VERSION=18
ENVIRONMENT=production
```

## Common Tasks

### Adding a New Blog Post

1. Create markdown file in `src/content/blog/`
2. Add frontmatter metadata
3. Write content
4. Preview in development server
5. Deploy when ready

### Creating a New Component

1. Create component file in appropriate directory
2. Define TypeScript interface for props
3. Implement component
4. Import and use in pages or other components

### Modifying Styles

1. Update Tailwind config if needed
2. Add custom CSS in global.css if required
3. Use Tailwind classes in components
4. Test in different screen sizes

## Troubleshooting

Common issues and solutions:

### Build Errors

```bash
# Clear cache and dependencies
pnpm clean

# Reinstall dependencies
pnpm install

# Try build again
pnpm build
```

### Content Issues

- Verify frontmatter format
- Check file locations
- Validate content collection schema

## Getting Help

- Check [Astro documentation](https://docs.astro.build)
- Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
- File issues in repository

## Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

Would you like me to:
1. Add more specific troubleshooting guides?
2. Include example component implementations?
3. Add deployment workflow details?
4. Expand any section?