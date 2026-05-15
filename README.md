# Autostar Motorsport Web application

Web app for Autostar Motorsport, a motorsport preparation and automotive services company based in Italy. Built with React + Vite and deployed on Vercel.

## Live Website

**Production URL:** [https://autostarmotorsport.vercel.app/](https://autostarmotorsport.vercel.app/)

Core Technologies

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 6.3
- **UI Library:** React-Bootstrap 2.10
- **Icons:** Bootstrap Icons 1.11
- **Animations:** AOS (Animate On Scroll) 2.3
- **Routing:** React Router DOM 7.0

## Privacy & Legal Compliance

- **Privacy Policy & Cookie Banner:** Iubenda
- **GDPR Compliant:** Cookie consent management and privacy policy integration

## Deployment & Hosting

- **Platform:** Vercel
- **CI/CD:** Automatic deployment from GitHub repository
- **Branch:** `dev` (development), `main` (production)

## Project Structure

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

## Local Development

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22.x

### Installation

```bash
# Clone the repository
git clone https://github.com/carolabonamico/autostarmotorsport-webapp.git

# Navigate to client directory
cd autostarmotorsport-webapp/client

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
