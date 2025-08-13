# Firebase Portfolio - Developer Portfolio Website

A modern Next.js 15.3.3 portfolio website built with TypeScript, Tailwind CSS, and AI capabilities via Google Genkit. Features project gallery, work experience timeline, skills showcase, contact form, and AI-powered resume analysis. Deployed automatically to GitHub Pages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build
- Install dependencies: `npm install` -- takes 95 seconds. NEVER CANCEL. Set timeout to 3+ minutes.
- Build for production: `npm run build` -- takes 20 seconds. NEVER CANCEL. Set timeout to 2+ minutes.
- Type checking: `npm run typecheck` -- takes 6 seconds. Always run before committing.
- Linting: `npm run lint` -- first run takes 4+ minutes (installs ESLint config), subsequent runs take 3 seconds. NEVER CANCEL first run. Set timeout to 8+ minutes.

### Development
- Start dev server: `npm run dev` -- starts in 1 second on port 9002. Access at http://localhost:9002
- AI development tools (requires GEMINI_API_KEY in .env):
  - `npm run genkit:dev` -- interactive Genkit developer UI
  - `npm run genkit:watch` -- Genkit with file watching

### Environment Setup
- Copy `.env.example` to `.env` and add your GEMINI_API_KEY from https://aistudio.google.com/app/apikey
- AI features require the API key, but the main portfolio works without it

## Validation

### CRITICAL: Manual Testing Requirements
After making changes, ALWAYS run through these complete scenarios:

1. **Portfolio Navigation Test**:
   - Start dev server with `npm run dev`
   - Navigate to http://localhost:9002
   - Verify all sections load: Hero, Projects, Experience, Skills, Contact
   - Test navigation links in header (Projects, Experience, Skills, Contact)
   - Test skills tabs: Languages, Frameworks, Databases, Cloud & Infra, Tools, AI/ML
   - Toggle theme using the theme switcher (light/dark modes)
   - Test "View Resume" link opens resume.pdf
   - Test social media links in contact section

2. **Build and Export Test**:
   - Run `npm run build` and verify it completes successfully
   - Confirm `dist/` directory contains: index.html, _next/, assets, and all static files
   - Static files should include: favicon.ico, img.jpg, img1.png, resume.pdf

3. **Code Quality Validation**:
   - Always run `npm run typecheck` -- must pass with no errors
   - Always run `npm run lint` -- warnings are acceptable, errors are not
   - Check that changes don't break existing functionality

### Build and Test Timing
- `npm install`: 95 seconds. NEVER CANCEL. Set timeout to 200+ seconds.
- `npm run build`: 20 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `npm run lint` (first run): 4+ minutes. NEVER CANCEL. Set timeout to 480+ seconds.
- `npm run lint` (subsequent): 3 seconds. Set timeout to 30+ seconds.
- `npm run typecheck`: 6 seconds. Set timeout to 60+ seconds.

## Repository Structure

### Key Directories
- `src/app/` - Next.js app router pages (main page.tsx)
- `src/components/` - React components organized by feature
  - `src/components/home/` - Homepage sections (hero, projects, experience, skills, contact)
  - `src/components/layout/` - Layout components (header, footer)
  - `src/components/ui/` - Reusable UI components (Radix UI + Tailwind)
- `src/ai/` - AI features using Google Genkit
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations

### Important Files
- `package.json` - Dependencies and npm scripts
- `next.config.ts` - Next.js configuration with static export settings
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.env.example` - Environment variables template
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

### Configuration Notes
- Uses Next.js static export (`output: 'export'`) for GitHub Pages
- Base path configured as `/firebase-portfolio` for production
- Images are unoptimized for static hosting
- TypeScript and ESLint errors ignored during builds (configured for rapid prototyping)

## Deployment

### GitHub Pages
- Automatic deployment via `.github/workflows/deploy.yml`
- Triggered on push to `main` branch or manual workflow dispatch
- Uses Node.js 18, builds with `npm run build`, deploys `dist/` directory
- Deployment URL: `https://[username].github.io/firebase-portfolio`

### Manual Deployment Verification
- Push changes to `main` branch
- Check GitHub Actions tab for deployment status
- Verify deployed site at the GitHub Pages URL

## Common Issues and Solutions

### First-time Setup
- ESLint will auto-configure on first `npm run lint` run - this is expected
- If genkit commands fail, ensure GEMINI_API_KEY is set in .env file
- Node.js 18+ is required (as specified in GitHub workflow)

### Build Issues
- TypeScript errors are ignored during builds but should be fixed for code quality
- If build fails, check for syntax errors or missing dependencies
- Clear `.next` cache if experiencing build inconsistencies

### Development Server Issues
- Dev server runs on port 9002 (configured in package.json)
- If port conflicts occur, the server will automatically find an available port
- Turbopack is enabled for faster development builds

## AI Features (Optional)

### Resume Analysis
- Located in `src/ai/` directory
- Requires GEMINI_API_KEY environment variable
- Uses Google Genkit for AI-powered resume analysis and skills extraction
- Can be disabled without affecting main portfolio functionality

### Genkit Development
- `npm run genkit:dev` starts interactive developer UI
- `npm run genkit:watch` enables file watching for AI development
- Both commands require valid GEMINI_API_KEY

## Code Style and Standards

- TypeScript strict mode enabled
- ESLint with Next.js recommended configuration
- Tailwind CSS for styling with custom theme
- Component structure follows Next.js 15 app router conventions
- Uses Radix UI primitives for accessible components

## Performance Considerations

- Static site generation for optimal loading speed
- Image optimization disabled for static hosting compatibility
- Minimal JavaScript bundle size due to server-side rendering
- Tailwind CSS purging reduces final CSS bundle size