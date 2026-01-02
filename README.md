# 🎨 Modern 3D Portfolio Website

A stunning, premium 3D portfolio website for college students built with cutting-edge modern web technologies. Features smooth animations, interactive 3D scenes, and a futuristic design inspired by Apple, Tesla, and modern SaaS landing pages.

## ✨ Features

### 🌟 **Hero Section**
- Fullscreen 3D rotating cube with glassmorphism effects
- Animated floating 3D orbs
- Gradient text animations
- Smooth scroll indicator
- Call-to-action buttons with hover effects

### 📝 **About Me Section**
- Text reveal animation on scroll
- Floating 3D animated icons (React, JavaScript, Node.js)
- Glassmorphic cards
- Smooth parallax effects

### 💼 **Skills Section**
- Interactive 3D rotating skill spheres
- Multiple skill categories (Frontend, Backend, Tools)
- Hover glow effects
- Orbital arrangement of skills

### 🚀 **Projects Section**
- Interactive 3D project cards
- Tilt effect on mouse hover
- Tech stack badges
- Live link and GitHub buttons
- Gradient border animations

### 📊 **Experience & Education Timeline**
- Animated timeline with alternating layout
- Icons and color coding for different event types
- Smooth scroll animations
- Professional styling

### 📬 **Contact Section**
- Contact form with validation
- 3D floating orb that reacts to mouse movement
- Social media links (GitHub, LinkedIn, Instagram)
- Glassmorphic design

### 🧭 **Navigation & More**
- Sticky responsive navbar with smooth scrolling
- Mobile-friendly hamburger menu
- Elegant footer with links
- Dark theme with purple, pink, and cyan gradients
- Custom scrollbar styling

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | UI Framework |
| **Vite** | Build tool & dev server |
| **Three.js** | 3D graphics |
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Utility components (OrbitControls, etc.) |
| **Framer Motion** | Smooth animations |
| **Tailwind CSS** | Styling & responsive design |

## 📦 Installation

### Prerequisites
- Node.js 14+ and npm installed

### Setup

1. Navigate to the project directory:
```bash
cd PORTFOIO
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1024px+)

## 🎯 Customization

### Update Your Information

1. **Hero Section** - Edit [src/components/Hero3DScene.jsx](src/components/Hero3DScene.jsx)
   - Change name and title text
   - Customize button labels

2. **About Me** - Edit [src/components/AboutMe.jsx](src/components/AboutMe.jsx)
   - Update bio information
   - Add your achievements

3. **Skills** - Edit [src/components/Skills.jsx](src/components/Skills.jsx)
   - Modify skill categories
   - Update skill names and colors

4. **Projects** - Edit [src/components/Projects.jsx](src/components/Projects.jsx)
   - Add your project details
   - Update GitHub and live link URLs
   - Change tech stack tags

5. **Timeline** - Edit [src/components/Timeline.jsx](src/components/Timeline.jsx)
   - Add education entries
   - Add work experience
   - Update dates and descriptions

6. **Contact** - Edit [src/components/Contact.jsx](src/components/Contact.jsx)
   - Update social media links
   - Customize form fields

### Color Customization

Modify the color scheme in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  purple: { /* adjust purple shades */ },
  pink: { /* adjust pink shades */ },
  cyan: { /* adjust cyan shades */ },
}
```

## 📊 Performance

- ⚡ Fast with Vite
- 🎨 Optimized animations with Framer Motion
- 📦 Lazy-loaded 3D components
- 🌐 Efficient Three.js scene management

## 📄 License

This project is free to use and modify for personal and professional purposes.

## 🤝 Contributing

Feel free to fork, improve, and share!

## 📞 Support

If you have questions or need help customizing your portfolio, feel free to reach out.

---

**Built with ❤️ using modern web technologies** 🚀
