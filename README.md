# Humusway Global Export Website

A modern, animated Next.js website for **Humusway Global Export Private Limited** - showcasing premium organic products from India.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ⚡ Quick Start (Setup on New PC)

```bash
# 1. Clone the repository
git clone https://github.com/BhavyaSoni21/-Humusway-Global-.git
cd -Humusway-Global-

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: Requires Node.js 18.0+ ([Download here](https://nodejs.org/))

---

## 🌟 Features

✨ **Beautiful Animations** - Smooth animations throughout using Framer Motion  
🎨 **Interactive Particles** - Dynamic particle effects that respond to mouse movement  
🎯 **Modern UI** - Aurora backgrounds, tubelight navbar, and polished components  
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop  
🚀 **Fast Performance** - Built with Next.js 14 App Router for optimal speed  
♿ **Accessible** - ARIA labels and semantic HTML  
🎭 **Static Export Ready** - No backend required, perfect for static hosting

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.35 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **UI Components**: Custom shadcn/ui components
- **Icons**: Lucide React
- **Language**: TypeScript 5.3
- **Theme Management**: next-themes
- **Performance**: SWC Compiler, Optimized Package Imports

## 📄 Pages

### Main Pages
- 🏠 **Home** - Hero section with animated aurora background and particles
- ℹ️ **About** - Company information, mission statement, and values
- 📦 **Products** - Grid view of all products with animated cards
- 💼 **Services** - Export services and capabilities
- 📞 **Contact** - Interactive contact form with company details

### Product Detail Pages
1. **Vermi Compost Organic Fertilizer**
   - Image carousel with 3 product images
   - Detailed benefits and advantages
   - Key features with icons
   - Call-to-action buttons

2. **Turmeric Powder**
   - High-quality curcumin content information
   - Health benefits and cancer prevention properties
   - Scientific backing and research
   - Interactive image gallery

3. **Coco Peat**
   - Eco-friendly growing medium details
   - Water retention and pH balance information
   - Disease resistance properties
   - Agricultural applications

## 🚀 Getting Started

### Prerequisites

Before setting up the project, ensure you have:

- **Node.js** 18.0 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn** / **pnpm**
- **Git** ([Download here](https://git-scm.com/))

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/BhavyaSoni21/-Humusway-Global-.git
cd -Humusway-Global-
```

#### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14.2.35
- React 18
- Tailwind CSS
- Framer Motion
- And other dependencies

#### 3. Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

#### 4. View in Browser

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

---

### 🏗️ Build for Production

#### Standard Build

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server on port 3000.

#### Static Export

For deployment to static hosting platforms (Netlify, Vercel, GitHub Pages):

```bash
npm run build
```

The static files will be generated in the `.next` directory.

---

### ⚡ Performance Tips

- Development server uses **Turbopack** for faster builds
- Production builds are optimized with **SWC minification**
- Package imports are optimized for Framer Motion and Lucide React
- Clear cache if experiencing issues:
  ```bash
  rm -rf .next node_modules
  npm install
  ```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with navbar
│   ├── page.tsx                # Home page with particles
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── products/
│       ├── page.tsx            # Products listing
│       ├── vermi-compost/
│       │   └── page.tsx
│       ├── turmeric-powder/
│       │   └── page.tsx
│       └── coco-peat/
│           └── page.tsx
├── components/
│   └── ui/
│       ├── tubelight-navbar.tsx    # Animated navigation bar
│       ├── aurora-background.tsx   # Gradient background effect
│       ├── particles.tsx           # Interactive particle system
│       └── theme-toggle.tsx        # Theme switcher
├── lib/
│   └── utils.ts                # Utility functions (cn)
├── public/
│   └── images/
│       ├── Logo.png
│       ├── Verm1.png, Verm2.png, Verm3.png
│       ├── Term1.png, Term2.png, Term3.png
│       └── Coco1.png, Coco2.png, Coco3.png
└── package.json
```

## 🖼️ Adding Product Images

Place your product images in the `public/images/` directory:

**Required Images:**
- **Logo**: `Logo.png` (Company logo, ~200x200px recommended)
- **Vermi Compost**: `Verm1.png`, `Verm2.png`, `Verm3.png`
- **Turmeric**: `Term1.png`, `Term2.png`, `Term3.png`
- **Coco Peat**: `Coco1.png`, `Coco2.png`, `Coco3.png`

**Image Guidelines:**
- Format: PNG or JPG
- Recommended size: 1200x800px for product images
- Optimize images before adding (use tools like TinyPNG)

## 🎨 Customization

### Brand Colors

The primary color scheme uses blue (`#0477d1`). To change:

**1. Tailwind Config** (`tailwind.config.ts`):
```js
colors: {
  primary: '#0477d1',
  // Add more colors
}
```

**2. Global CSS** (`app/globals.css`):
```css
:root {
  --primary: #0477d1;
}
```

**3. Component Classes**:
Replace `text-[#0477d1]` and `bg-[#0477d1]` throughout components

### Particles Configuration

Adjust particles in each page component:

```tsx
<Particles
  className="absolute inset-0"
  quantity={80}      // Number of particles
  ease={80}          // Movement smoothness
  color="#0477d1"    // Particle color
  size={0.8}         // Particle size
  staticity={40}     // Mouse interaction strength
  refresh            // Regenerate on mount
/>
```

### Adding New Products

1. Add product images to `public/images/`
2. Update `app/products/page.tsx` products array
3. Create new folder: `app/products/[product-slug]/page.tsx`
4. Copy structure from existing product pages

## 📞 Company Information

**Humusway Global Export Private Limited**

- **Address**: Millennium Emerald Unit B1002, Datta Mandir Road, Wakad, Pune - 411057, India
- **Phone**: +91 9921789904 / +91 9168991898 / +91 9028378764
- **Email**: 

## � Troubleshooting

### Common Issues on New PC Setup

#### Port Already in Use
If port 3000 is busy:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

#### Node Version Issues
Check your Node.js version:
```bash
node --version  # Should be 18.0 or higher
```
Update if needed from [nodejs.org](https://nodejs.org/)

#### npm Install Fails
Try clearing cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
Clear Next.js cache:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next, node_modules
npm install

# Mac/Linux
rm -rf .next node_modules
npm install
```

#### Slow Performance
- Use latest Node.js LTS version
- Close unnecessary applications
- Run: `npm run dev -- --turbo` for faster builds

#### Git Clone Issues
If HTTPS clone fails, try:
```bash
git clone git@github.com:BhavyaSoni21/-Humusway-Global-.git
```

## �🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Other Platforms

- AWS Amplify
- GitHub Pages (with static export)
- Cloudflare Pages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👥 Author

**Humusway Global Export Private Limited**

For inquiries, contact: info@humuswayglobal.com

---

Built with ❤️ using Next.js

### Content

All content is hardcoded in the page components. Edit the respective page files:
- Company info: `app/about/page.tsx`
- Products: `app/products/[product]/page.tsx`
- Contact: `app/contact/page.tsx`

## Company Information

**Humusway Global Export Private Limited**

📍 Millennium Emerald Unit B1002, Datta Mandir Road, Wakad, Pune - 411057, India  
📞 +91 9921789904 / +91 9168991898 / +91 9028378764  
📧 info@humuswayglobal.com

## Products

1. **Vermi Compost Organic Fertilizer** - Premium organic fertilizer for sustainable agriculture
2. **Turmeric Powder** - High-quality turmeric with health benefits

## License

Private & Confidential - © 2026 Humusway Global Export Private Limited
