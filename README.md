
# Autostar Motorsport Web application

> Web app for Autostar Motorsport, a motorsport preparation and automotive services company based in Italy. Built with React + Vite and deployed on Vercel.

---

## 🌐 Live Website

**Production URL:** [https://autostar-motorsport.vercel.app](https://autostar-motorsport.vercel.app)

---

## 📦 Tech Stack

### Core Technologies
- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 6.3
- **UI Library:** React-Bootstrap 2.10
- **Icons:** Bootstrap Icons 1.11
- **Animations:** AOS (Animate On Scroll) 2.3
- **Routing:** React Router DOM 7.0

### Privacy & Legal Compliance
- **Privacy Policy & Cookie Banner:** Iubenda
- **GDPR Compliant:** Cookie consent management and privacy policy integration

### Deployment & Hosting
- **Platform:** Vercel
- **CI/CD:** Automatic deployment from GitHub repository
- **Branch:** `dev` (development), `main` (production)

---

## 📄 Project Structure

```
client/
├── public/
│   ├── images/          # Static images organized by section
│   │   ├── home/
│   │   ├── ligier/
│   │   └── ...
│   ├── videos/          # Video assets
│   │   └── ligier/
│   └── pdf/             # PDF documents and certificates
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SpecsCard.jsx
│   │   └── ...
│   ├── data/            # Static data and content
│   │   ├── home.js
│   │   ├── motorsport.js
│   │   ├── news.js
│   │   ├── preparazioni.js
│   │   ├── storia.js
│   │   └── team.js
│   ├── hooks/           # Custom React hooks
│   │   └── useAutoScroll.js
│   ├── pages/           # Page components (route components)
│   │   ├── Home.jsx
│   │   ├── Motorsport.jsx
│   │   ├── NewsMotori.jsx
│   │   ├── NewsArticle.jsx
│   │   ├── Preparazioni.jsx
│   │   ├── Storia.jsx
│   │   ├── Team.jsx
│   │   └── Contatti.jsx
│   ├── styles/          # CSS modules and stylesheets
│   │   ├── main.css
│   │   ├── responsive.css
│   │   └── components/  # Component-specific styles
│   │       ├── Buttons.css
│   │       ├── Cards.css
│   │       ├── Carousel.css
│   │       ├── Footer.css
│   │       ├── MediaGallery.css
│   │       ├── Navbar.css
│   │       ├── Sections.css
│   │       ├── Services.css
│   │       ├── Timeline.css
│   │       └── Utilities.css
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── eslint.config.js     # ESLint configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22.x

---

## � Local Development

### Installation

```bash
# Clone the repository
git clone https://github.com/carolabonamico/autostar-website.git

# Navigate to client directory
cd autostar-website/client

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🎨 Key Features

### Homepage
- **Hero Carousel:** Dynamic image carousel with smooth transitions
- **Services Overview:** Grid layout showcasing main automotive services
- **Latest News:** Display of most recent news articles
- **Call-to-Action Sections:** Strategic placement for user engagement

### Motorsport Section
- **Media Gallery:** Professional photo and video gallery with responsive layout
- **Technical Specifications:** Detailed specs for Ligier JSP320 LMP3
- **Flexible Grid System:** Large, medium, and small content items with aspect ratio preservation

### News & Articles
- **Dynamic News Feed:** Filterable news articles by category
- **Article Detail Pages:** Individual pages for each news article
- **Category Filtering:** Easy navigation through different news categories

### Preparazioni (Services)
- **Service Cards:** Detailed service offerings with images and descriptions
- **Feature Lists:** Bulleted features for each service
- **Service Images:** Visual representation of each service category

### Team Section
- **Team Members:** Grid layout of team profiles
- **Company Values:** Visual representation of company principles
- **Certifications:** Display of professional certifications and credentials

### Storia (History)
- **Timeline Component:** Visual timeline of company milestones
- **Historical Photos:** Image gallery showcasing company evolution

### Contact Page
- **Contact Information:** Phone, email, and address details
- **Business Hours:** Operating hours display
- **Social Media Links:** Integration with company social profiles

---

## 🔒 Privacy & Legal

### Iubenda Integration
- **Cookie Banner:** Automatic cookie consent management
- **Privacy Policy:** Embedded Iubenda privacy policy
- **Cookie Policy:** Detailed cookie usage information
- **GDPR Compliance:** Full compliance with EU privacy regulations

### Implementation
The website uses Iubenda's JavaScript SDK for:
- Cookie consent collection and management
- Privacy policy display and updates
- Cookie policy documentation
- Consent preference storage

---

## 🎨 Design System

### CSS Architecture
- **Modular Approach:** Component-based CSS files
- **CSS Custom Properties:** Centralized design tokens
- **BEM-inspired Naming:** Clear and consistent class naming
- **Responsive Breakpoints:** 
  - Mobile: < 768px
  - Tablet: 768px - 991px
  - Desktop: 992px - 1399px
  - Large Desktop: >= 1400px

### Color Palette
- **Primary (Red):** `var(--light-red)`, `var(--dark-red)`
- **Neutral Grays:** `var(--medium-gray)`, `var(--light-gray)`
- **Background:** Dynamic light/dark theme support

---

## 📱 Responsive Design

- **Mobile-First:** Optimized for mobile devices
- **Touch-Friendly:** Large tap targets and gesture support
- **Adaptive Images:** Responsive images with proper sizing
- **Flexible Layouts:** CSS Grid and Flexbox for fluid layouts

---

## 🚀 Deployment

### Vercel Configuration
- **Auto-Deploy:** Automatic deployment on push to `main` branch
- **Preview Deployments:** Automatic preview URLs for pull requests
- **Environment:** Production environment variables configured in Vercel dashboard

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## 📊 Performance Optimizations

- **Code Splitting:** React lazy loading for route-based components
- **Image Optimization:** Proper image sizing and formats
- **CSS Optimization:** Modular CSS loading
- **Lazy Loading:** AOS animations with intersection observer
- **Preload Strategy:** `preload="auto"` for video content

---

## 🛠️ Development Tools

- **ESLint:** Code quality and consistency
- **Vite:** Fast development server with HMR (Hot Module Replacement)
- **React DevTools:** Component debugging and profiling

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```