# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages. The deployment is triggered on:
- Push to the `main` branch
- Manual workflow dispatch

### Setup Instructions

1. Go to your repository's Settings → Pages
2. Set the Source to "GitHub Actions"
3. Push changes to the `main` branch or manually trigger the workflow

The site will be automatically built and deployed to `https://[username].github.io/[repository-name]`

### Local Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` directory.

<!-- Trigger deployment refresh -->
