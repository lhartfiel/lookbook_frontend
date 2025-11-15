# Lookbook Frontend

A Next.js-based frontend application for browsing and searching hairstyles using AI-powered natural language search.

## Features

- 🔍 **AI-Powered Search**: Natural language search using vector embeddings and OpenAI
- 💇 **Style Gallery**: Browse hairstyles with detailed information and multiple angles
- ❤️ **Favorites**: Save and manage your favorite hairstyles
- 🎨 **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ♿ **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Font Awesome
- **Image Lightbox**: Yet Another React Lightbox

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd lookbook-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files. Development uses Turbopack for faster builds.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
lookbook-frontend/
├── src/
│   └── app/
│       ├── apis/                      # API service layer
│       │   ├── fetch_styles.tsx      # Search API calls
│       │   └── fetch_favorites.tsx   # Favorites API calls
│       ├── components/               # React components
│       │   ├── Common/               # Reusable UI components
│       │   │   ├── Button.tsx        # Button component
│       │   │   ├── Card.tsx          # Style card component
│       │   │   ├── Footer.tsx        # Footer component
│       │   │   ├── Tag.tsx           # Tag display component
│       │   │   └── ToggleMode.tsx    # Dark mode toggle
│       │   ├── BaseLayout.tsx        # Base layout wrapper
│       │   ├── Chatbot.tsx           # Search interface
│       │   ├── Favorites.tsx         # Favorites display
│       │   ├── FavoritesLoader.tsx   # Favorites data loader
│       │   ├── StyleResults.tsx      # Search results grid
│       │   ├── StyleDetail.tsx       # Individual style view
│       │   ├── StyleGallery.tsx      # Image lightbox gallery
│       │   └── StyleTextResponse.tsx # AI response display
│       ├── state/                    # Zustand store
│       │   └── store.ts              # Global state management
│       ├── favorites/                # Favorites page route
│       │   └── page.tsx
│       ├── style/[id]/               # Dynamic style detail route
│       │   └── page.tsx
│       ├── favicons/                 # Favicon assets
│       ├── layout.tsx                # Root layout
│       ├── page.tsx                  # Home page
│       ├── providers.tsx             # React Query provider
│       └── globals.css               # Global styles
├── public/                           # Static assets
│   └── lookbook_logo.svg            # Logo
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── package.json                      # Dependencies
└── netlify.toml                      # Netlify deployment config
```

## Deployment to Netlify

### Prerequisites

- A Netlify account
- Backend API deployed (e.g., on PythonAnywhere)

### Deployment Steps

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify**:

   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Configure Build Settings**:

   - **Base directory**: `lookbook-frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

4. **Set Environment Variables**:
   Go to Site settings → Environment variables and add:

   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com/api/
   ```

5. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Future commits to your main branch will trigger automatic deployments

### Configuration Files

#### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

#### `next.config.ts`

Key configurations for deployment:

- `unoptimized: true` - Disables Next.js image optimization for static hosting
- `remotePatterns` - Allows images from your backend domain

### Post-Deployment

1. **Update Backend CORS**:
   Add your Netlify domain to Django's `CORS_ALLOWED_ORIGINS`:

   ```python
   CORS_ALLOWED_ORIGINS = [
       "https://your-site.netlify.app"
   ]
   ```

2. **Test the Deployment**:
   - Search functionality
   - Image loading
   - Favorites persistence
   - Dark mode toggle

### Troubleshooting

**Images not loading:**

- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check that backend CORS includes your Netlify domain
- Ensure backend static files are configured properly

**API requests failing:**

- Check environment variables in Netlify dashboard
- Verify backend is accessible from Netlify
- Check browser console for CORS errors

**Build failures:**

- Review build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors locally first

## Environment Variables

| Variable              | Description          | Example                        |
| --------------------- | -------------------- | ------------------------------ |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.example.com/api/` |

## Key Features Implementation

### Search

- Natural language queries processed by backend AI
- Results displayed in responsive grid
- AI-generated response explains the results

### Favorites

- Stored in browser localStorage
- Synced with Zustand store
- Persists across sessions
- Dedicated favorites page

### Style Details

- Full-screen image gallery
- Multiple angle views
- Stylist information
- Hair characteristics (length, texture, thickness, maintenance)
- Tags for additional attributes

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized images for different screen sizes

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Your License Here]

## Support

For issues or questions, please open an issue in the repository.
