# Cloud Website - Interactive Next.js Project

A modern, interactive website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- ⚡ **Next.js 16** - Latest version with App Router
- ⚛️ **React 19** - Latest React with improved performance
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 📝 **TypeScript** - Full type safety
- ✨ **Framer Motion** - Smooth, interactive animations
- 🎮 **WebGL Support** - Three.js with React Three Fiber
- 🌙 **Dark Mode** - Automatic dark mode support
- 📱 **Responsive** - Mobile-first design

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **WebGL**: Three.js, React Three Fiber, React Three Drei
- **Type Safety**: TypeScript
- **Utilities**: clsx for className merging

## 📦 Project Structure

```
cloud-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   ├── webgl-demo/   # WebGL examples
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── webgl/       # WebGL components
│   │   │   ├── Scene.tsx
│   │   │   ├── RotatingCube.tsx
│   │   │   └── ... more
│   │   └── sections/    # Page sections
│   │       ├── Hero.tsx
│   │       └── Features.tsx
│   └── lib/             # Utility functions
│       └── utils.ts
├── public/              # Static assets
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Components

The project includes reusable components:

- **Button** (`src/components/ui/Button.tsx`) - Interactive button with variants (primary, secondary, outline) and sizes (sm, md, lg)
- **Card** (`src/components/ui/Card.tsx`) - Hover-animated card component

### Sections

- **Hero** (`src/components/sections/Hero.tsx`) - Animated hero section with gradient background
- **Features** (`src/components/sections/Features.tsx`) - Feature showcase with cards

### Styling

The project uses Tailwind CSS 4 with custom CSS variables defined in `globals.css`:

- Custom colors defined in `:root`
- Dark mode support via `@media (prefers-color-scheme: dark)`
- Smooth scrolling enabled

## 🌈 Animations

This project uses Framer Motion for smooth, performant animations:

- Page transitions
- Hover effects
- Scroll-triggered animations
- Entrance animations

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is automatically detected based on system preferences. The color scheme switches seamlessly between light and dark themes.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy via Vercel CLI or connect your GitHub repository.

### Deploy to Other Platforms

1. Build the project: `npm run build`
2. Start the server: `npm start`

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

---

Built with ❤️ using Next.js
