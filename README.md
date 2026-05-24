# Premium Developer Portfolio

> A cinematic, high-performance portfolio website built with modern web technologies. Production-ready and fully customizable.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### 🎬 Cinematic Experience
- **Splash Screen**: Premium 4.5s intro with profile image, rotating ring, and particle effects
- **Realistic Watching Eye**: Cursor-tracking eye with blink animation and realistic details
- **Light/Dark Mode**: Creative light bulb toggle with smooth transitions
- **Micro-Interactions**: Hover effects, ripples, and scroll animations throughout

### 🚀 Performance
- **60fps Animations**: GPU-accelerated transforms and optimized RAF loops
- **Lazy Loading**: Images and animations load only when needed
- **Reduced Motion**: Respects user accessibility preferences
- **Optimized Bundle**: Minimal dependencies, fast load times

### 📱 Fully Responsive
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Proper touch targets and gestures
- **Adaptive Animations**: Simplified on smaller screens

### 🎨 Modern Design
- **Dark Mode First**: Professional dark theme with optional light mode
- **Animated Previews**: Auto-generated mobile/web project previews
- **Custom Cursor**: Smooth, interactive cursor with hover states
- **Premium UI**: Glassmorphism, gradients, and depth layering

## 🛠️ Tech Stack

- **Framework**: Vite (Fast build tool)
- **Languages**: Vanilla JavaScript, CSS3, HTML5
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **No Heavy Dependencies**: Pure, lightweight code

## 📦 Installation

```bash
# Clone or download the project
cd portfolio-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Customization Guide

### 1. Personal Information

Edit `src/main.js` to update:
- Projects data
- Experience timeline
- Skills list
- Contact information

### 2. Profile Images

Replace images in `assets/images/`:
- `profile-splash.png` - Splash screen image (140x140px recommended)
- `hero-image.jpg` - Hero section image
- `about-image.jpg` - About section image

### 3. Colors & Theme

Edit `src/styles/design-tokens.css`:
```css
:root {
  --color-accent-primary: #06b6d4; /* Your brand color */
  --color-accent-secondary: #f59e0b; /* Secondary color */
}
```

### 4. Splash Screen Duration

Edit `src/splash.js`:
```javascript
this.duration = 4500; // Change to desired milliseconds
```

### 5. Eye Behavior

Edit `src/watching-eye.js`:
```javascript
this.maxMove = 15; // Maximum iris movement in pixels
```

## 📁 Project Structure

```
portfolio-website/
├── assets/
│   └── images/          # All images
├── src/
│   ├── styles/          # CSS files
│   │   ├── design-tokens.css
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── previews.css
│   │   ├── enhancements.css
│   │   ├── splash.css
│   │   ├── theme-toggle.css
│   │   └── watching-eye.css
│   ├── main.js          # Main application logic
│   ├── splash.js        # Splash screen
│   ├── theme-toggle.js  # Light/dark mode
│   └── watching-eye.js  # Eye animation
├── index.html           # Main HTML
├── package.json         # Dependencies
└── vite.config.js       # Build configuration
```

## 🎨 Design System

### Colors
- **Dark Mode**: Deep blue-black backgrounds with cyan accents
- **Light Mode**: Soft white backgrounds with maintained accents
- **Gradients**: Cyan to blue primary, amber to red secondary

### Typography
- **Font**: Inter (clean, modern sans-serif)
- **Hierarchy**: 72px hero → 42px sections → 16px body
- **Weights**: 300-900 range for emphasis

### Spacing
- **Consistent Scale**: 4px base unit
- **Sections**: 80-120px vertical padding
- **Components**: 16-24px internal padding

## ⚡ Performance Optimization

### Implemented
- ✅ GPU-accelerated animations
- ✅ RequestAnimationFrame for smooth 60fps
- ✅ Intersection Observer for lazy loading
- ✅ Debounced resize handlers
- ✅ Optimized image loading
- ✅ Minimal JavaScript bundle

### Lighthouse Scores (Target)
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

## 🧪 Testing Checklist

- [ ] Splash screen appears on first visit
- [ ] Theme toggle works and persists
- [ ] Eye follows cursor smoothly
- [ ] All animations are 60fps
- [ ] Responsive on mobile/tablet/desktop
- [ ] Reduced motion is respected
- [ ] All links work correctly
- [ ] Images load properly

## 📝 License

MIT License - Free to use for personal and commercial projects.

## 🤝 Support

For customization help or questions:
- Email: arayan713321@gmail.com
- GitHub: [@Arayan713321](https://github.com/Arayan713321)

## 🎉 Credits

Designed and developed by **Arayan Kumar Shaw**
Mobile-First Full-Stack Engineer

---

**Made with ❤️ and lots of ☕**
