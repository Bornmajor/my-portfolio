# My Portfolio

A modern, responsive portfolio website built with Next.js, React, and TypeScript. Showcasing projects, skills, work experience, and case studies with a clean and professional design.

## Features

- **Responsive Design** - Mobile-friendly interface that works seamlessly across all devices
- **Dark Mode Support** - Theme provider for dark/light mode switching
- **Project Showcase** - Display of completed projects with descriptions and images
- **Experience Timeline** - Professional work experience section
- **Skills Section** - Organized showcase of technical skills
- **Case Studies** - Detailed project case studies with insights
- **Navigation Menu** - Smooth, intuitive navigation experience
- **Type-Safe** - Built with TypeScript for better code quality

## Project Structure

```
├── app/                    # Next.js app directory
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── ui/                # Reusable UI components
│   │   └── sections/      # Major page sections
│   └── theme-provider.tsx # Theme configuration
├── data/                  # JSON data files
│   ├── case-studies.json
│   ├── experience.json
│   ├── projects.json
│   └── skills.json
├── types/                 # TypeScript type definitions
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework** - [Next.js 15+](https://nextjs.org)
- **Language** - [TypeScript](https://www.typescriptlang.org)
- **Styling** - CSS Modules & Tailwind CSS
- **Components** - React with TypeScript
- **Deployment** - Ready for Vercel, Netlify, or any Node.js hosting

## Customization

All content is managed through JSON files in the `data/` directory:
- Update project information in `data/projects.json`
- Modify experience in `data/experience.json`
- Add skills in `data/skills.json`
- Add case studies in `data/case-studies.json`

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com), the creators of Next.js:

1. Push your repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

For other hosting platforms, build and deploy the production build:
```bash
npm run build
npm run start
```

## License

This project is open source and available under the MIT License.
