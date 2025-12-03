# Elevate Growth Solutions - Marketing Agency Website

## Overview

This is a boutique marketing agency website for Elevate Growth Solutions, built as a modern single-page application with React and Express. The site showcases full-stack marketing services, portfolio work, and provides contact methods for potential clients. It features a professional, brand-focused design with a teal color palette and serif typography, replicating the aesthetic of their existing Squarespace site.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React SPA with Client-Side Routing**
- Single-page application using React 18 with Vite as the build tool
- Client-side routing implemented with Wouter (lightweight alternative to React Router)
- Component-based architecture with reusable UI components organized in `/client/src/components`
- Styling via Tailwind CSS with custom design system defined in `design_guidelines.md`

**Design System**
- Uses shadcn/ui component library ("new-york" style variant) for consistent UI patterns
- Custom brand colors: Primary teal (#266D82), Medium teal (#3D95B4), Accent teal (#4AC0D8)
- Typography hierarchy: Noto Serif for headings, Lora for body text, Montserrat for UI elements
- Responsive breakpoints following Tailwind's standard mobile-first approach

**State Management**
- TanStack Query (React Query) for server state and data fetching
- Query client configured with custom fetch wrapper for API requests
- No global state management - relies on component composition and React Query cache

**Page Structure**
- Home: Hero, value propositions, 4-step process section, free 90-day growth starter pack lead magnet, testimonials
- Services: Service grid with detailed offerings, FAQ section with 6 questions
- Behind Elevate: Founder bio with credentials display (Digital Marketing cert, UX Design cert, 5+ years experience)
- Portfolio: Redirects to external portfolio site (tysencreager.com)
- Contact: Simple contact page with email CTA
- Privacy Policy & Terms: Legal pages with formatted text content

**SEO Optimization**
- All pages include unique meta titles and descriptions
- Open Graph and Twitter Card tags for social media sharing
- SEO component dynamically updates meta tags on each page route

### Backend Architecture

**Express.js Server**
- Minimal Express setup serving as API backend and static file server
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves pre-built static assets from `/dist/public`
- Session-based architecture prepared (connect-pg-simple imported) but not actively implemented

**Route Structure**
- API routes prefixed with `/api` (routes defined in `server/routes.ts`)
- Currently minimal backend logic - primarily serves the frontend
- Request/response logging middleware for API endpoints

**Storage Layer**
- Abstracted storage interface defined in `server/storage.ts`
- In-memory storage implementation (MemStorage) for user data
- Designed to be swappable with database implementations
- User schema includes id, username, password fields

### Database & ORM

**Drizzle ORM with PostgreSQL**
- Drizzle ORM configured for PostgreSQL database
- Schema defined in `shared/schema.ts` using Drizzle's schema builder
- Uses Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Migration system configured to output to `/migrations` directory
- Currently defines basic users table with UUID primary keys

**Schema Structure**
- Users table: id (UUID), username (unique), password
- Zod validation schemas auto-generated from Drizzle schemas
- Shared schema between client and server via `@shared` path alias

### Build & Development Workflow

**Development Environment**
- Vite dev server with React Fast Refresh for instant HMR
- Express backend runs concurrently via `tsx` (TypeScript execution)
- Replit-specific plugins for error overlay and dev banner
- Cartographer plugin for visual code navigation in Replit

**Production Build**
- Vite builds frontend to `/dist/public`
- esbuild bundles backend to `/dist/index.js` as ESM
- Single production command runs compiled Express server
- Static assets served from built directory

**Type Safety**
- Full TypeScript coverage across client and server
- Strict mode enabled with comprehensive compiler options
- Path aliases: `@/` for client, `@shared/` for shared code, `@assets/` for images
- Zod schemas provide runtime validation matching TypeScript types

### File Organization

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components
│   │   ├── lib/         # Utilities and query client
│   │   └── hooks/       # Custom React hooks
├── server/              # Express backend
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API route definitions
│   └── storage.ts      # Data storage abstraction
├── shared/             # Shared code (schemas, types)
├── attached_assets/    # Static images and documents
└── migrations/         # Database migration files
```

## External Dependencies

### Core Frameworks & Libraries
- **React 18**: Frontend UI library
- **Express.js**: Backend web server
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development across stack

### UI Component Library
- **shadcn/ui**: Headless component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, etc.)
- **lucide-react**: Icon library
- **class-variance-authority**: Variant-based component styling

### Data & State Management
- **TanStack Query (React Query)**: Server state management and caching
- **React Hook Form**: Form state and validation
- **Zod**: Runtime schema validation
- **Drizzle ORM**: Type-safe ORM for database operations

### Database
- **PostgreSQL**: Primary database (via Neon serverless)
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Drizzle Kit**: Database migrations and schema management

### Routing & Navigation
- **Wouter**: Lightweight client-side routing library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production builds
- **PostCSS & Autoprefixer**: CSS processing
- **Replit plugins**: Development environment enhancements

### Third-Party Services & Social Media
- **Google Fonts**: Typography (Noto Serif, Lora, Montserrat)
- **Email**: Contact form uses mailto: links to tysen@elevategrowth.solutions
- **External Portfolio**: Redirects to tysencreager.com for portfolio showcase
- **Social Media**: Instagram (@elevategrowthsolutions) and LinkedIn (personal profile) links in footer

### Assets & Media
- Static images stored in `/attached_assets` directory
- Privacy policy and terms of service as text files
- Brand logo and hero images for marketing pages

## Key Components

### Conversion & Lead Generation
- **FAQ Component** (`client/src/components/FAQ.tsx`): Accordion-style FAQ section for services page
- **Process Component** (`client/src/components/Process.tsx`): 4-step visual process for home page
- **Lead Magnet Component** (`client/src/components/LeadMagnet.tsx`): Free 90-Day Growth Starter Pack CTA with mailto
- **Credentials Component** (`client/src/components/Credentials.tsx`): Display certifications and experience
- **SEO Component** (`client/src/components/SEO.tsx`): Dynamic meta tags for all pages

### Social Proof & Trust Building
- Testimonial section with client reviews
- Credentials display with certifications (Digital Marketing, UX Design, 5+ years experience)
- FAQ section addressing common objections and questions

### Calls-to-Action
- Hero CTA: "Learn More" button linking to services
- Lead Magnet: "Free 90-Day Growth Starter Pack" with mailto CTA
- Contact CTAs throughout site with email buttons
- Footer social media links (Instagram, LinkedIn)