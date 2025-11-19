# Ocean-Themed Portfolio Website 🌊

A modern, glassmorphism-styled portfolio website with stunning animations and ocean theme.

## 🚀 Tech Stack

- **React 18+** - UI library
- **Vite 5+** - Build tool
- **Tailwind CSS 3+** - Styling
- **Framer Motion 11+** - Animations
- **React Icons** - Icon library

## ✨ Features

- 🌊 Ocean-themed gradient background with animated waves
- 💎 Glassmorphism design with frosted glass effects
- ✨ Smooth scroll animations and parallax effects
- 🎯 Interactive hover effects and micro-interactions
- 📱 Fully responsive design
- 🎨 Custom cursor glow effect
- ⚡ Lightning-fast performance with Vite

## 🎨 Sections

1. **Hero** - Eye-catching introduction with animated text
2. **About** - Personal introduction and background
3. **Skills** - Tech stack with animated icons
4. **Projects** - Featured projects with links
5. **Achievements** - Accomplishments and certifications
6. **Contact** - Social links and contact information

## 🛠️ Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change "Your Name" to your actual name
   - Update the description text
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Customize the about text to reflect your journey

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills based on your expertise
   - Update skill categories

4. **Projects Section** (`src/components/Projects.jsx`)
   - Replace with your actual projects
   - Add project images (optional)
   - Update GitHub and live demo links

5. **Achievements Section** (`src/components/Achievements.jsx`)
   - Add your real achievements
   - Update dates and descriptions

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update all social media links
   - Change usernames and handles

## 🚀 Getting Started

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Customization

The ocean theme uses these primary colors:
- Deep Blue: `#0a192f`
- Medium Blue: `#112240`
- Cyan: `#64FFDA` (accent)
- Teal: `#14B8A6` (accent)

To change colors, edit `tailwind.config.js` and the gradient values in components.

## 📦 Deployment

Deploy to:
- **Vercel**: `npm run build` then drag `dist` folder
- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `dist`
- **GitHub Pages**: Use `gh-pages` package

## 🎯 Performance Tips

- Images: Add project images in `public/` folder
- Optimize images before adding (use WebP format)
- Lazy load images for better performance

## 📝 License

Free to use for personal portfolios!

---

Built with ❤️ using React + Vite + Framer Motion
