
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ProductJourneyPage from './components/pages/ProductJourneyPage';
import AboutMePage from './components/pages/AboutMePage';
import ContactMePage from './components/pages/ContactMePage';
import BlogPage from './components/pages/BlogPage';
import MyWorkPage from './components/pages/MyWorkPage';
import BlogPostPage from './components/pages/BlogPostPage';
import { HomeIcon } from './components/icons/HomeIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { WorkIcon } from './components/icons/WorkIcon';
import { BlogIcon } from './components/icons/BlogIcon';
import { ContactIcon } from './components/icons/ContactIcon';

// Centralized route configuration. To hide a page, set `published` to `false`.
const appRoutes = [
  { name: 'Home', path: '/', element: <HomePage />, icon: <HomeIcon />, published: true },
  { name: 'My Product Journey', path: '/journey', element: <ProductJourneyPage />, icon: <BriefcaseIcon />, published: true },
  { name: 'My Work', path: '/work', element: <MyWorkPage />, icon: <WorkIcon />, published: false },
  { name: 'Blog', path: '/blog', element: <BlogPage />, icon: <BlogIcon />, published: true },
  { name: 'About Me', path: '/about', element: <AboutMePage />, icon: null, published: false },
  { name: 'Contact Me', path: '/contact', element: <ContactMePage />, icon: <ContactIcon />, published: true },
];

const publishedRoutes = appRoutes.filter(route => route.published);

const AppContent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('rgba(45, 212, 191, 0.15)');

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      setMousePosition({ x: clientX, y: clientY });

      // Define corner colors (r, g, b)
      const colorTopLeft = { r: 16, g: 185, b: 129 }; // Green
      const colorTopRight = { r: 168, g: 85, b: 247 }; // Purple
      const colorBottomLeft = { r: 45, g: 212, b: 191 }; // Teal
      const colorBottomRight = { r: 236, g: 72, b: 153 }; // Vibrant Pink

      // Define corner opacities
      const opacityTopLeft = 0.2;
      const opacityTopRight = 0.2;
      const opacityBottomLeft = 0.2;
      const opacityBottomRight = 0.3; // Pink remains more opaque

      // Calculate ratios
      const xRatio = clientX / innerWidth;
      const yRatio = clientY / innerHeight;

      // Interpolate top row colors
      const rTop = colorTopLeft.r * (1 - xRatio) + colorTopRight.r * xRatio;
      const gTop = colorTopLeft.g * (1 - xRatio) + colorTopRight.g * xRatio;
      const bTop = colorTopLeft.b * (1 - xRatio) + colorTopRight.b * xRatio;

      // Interpolate bottom row colors
      const rBottom = colorBottomLeft.r * (1 - xRatio) + colorBottomRight.r * xRatio;
      const gBottom = colorBottomLeft.g * (1 - xRatio) + colorBottomRight.g * xRatio;
      const bBottom = colorBottomLeft.b * (1 - xRatio) + colorBottomRight.b * xRatio;

      // Interpolate vertically for colors
      const r = rTop * (1 - yRatio) + rBottom * yRatio;
      const g = gTop * (1 - yRatio) + gBottom * yRatio;
      const b = bTop * (1 - yRatio) + bBottom * yRatio;

      // Interpolate horizontally for opacities
      const opacityTop = opacityTopLeft * (1 - xRatio) + opacityTopRight * xRatio;
      const opacityBottom = opacityBottomLeft * (1 - xRatio) + opacityBottomRight * xRatio;

      // Interpolate vertically for opacity
      const finalOpacity = opacityTop * (1 - yRatio) + opacityBottom * yRatio;

      setCursorColor(`rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${finalOpacity.toFixed(2)})`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full bg-slate-50 overflow-x-hidden"
    >
      {/* Dim light cursor effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-colors duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${cursorColor}, transparent 80%)`,
        }}
      />
      
      {/* Aurora Background Effect */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50 mix-blend-multiply">
        <div className="absolute top-0 left-0 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-[100px] animate-aurora-1"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-gradient-to-tl from-teal-500 via-cyan-500 to-sky-500 opacity-20 blur-[100px] animate-aurora-2"></div>
      </div>
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto flex h-24 max-w-5xl items-center justify-between px-6 sm:px-8">
          <Link to="/" className="text-2xl md:text-3xl font-medium text-[#0B172A] transition-colors duration-300 hover:text-indigo-600">
            Wai Cheung
          </Link>
          <Header navLinks={publishedRoutes} />
        </div>
      </header>

      <main className="relative z-10 pt-24">
        <div className="container mx-auto max-w-5xl px-6 sm:px-8">
          <Routes>
            {publishedRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>
      </main>
      
      <style>
        {`
          @keyframes aurora-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(40px, 60px) scale(1.2); }
          }
          @keyframes aurora-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-60px, -40px) scale(1.2); }
          }
          .animate-aurora-1 {
            animation: aurora-1 15s infinite alternate ease-in-out;
          }
          .animate-aurora-2 {
            animation: aurora-2 20s infinite alternate ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out 200ms forwards;
          }
          .animate-fade-in-delayed {
            opacity: 0;
            animation: fadeIn 0.8s ease-out 400ms forwards;
          }
          @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-flow {
            background-size: 200% 200%;
            animation: gradient-flow 3s ease infinite;
          }
          @keyframes pulse-sweep {
            0% { background-position: -100% center; }
            100% { background-position: 200% center; }
          }
          .underline-pulse-sweep {
            background-image: linear-gradient(
                to right,
                transparent,
                rgba(255, 255, 255, 0.7),
                transparent
            );
            background-size: 60% 100%;
            background-repeat: no-repeat;
            animation: pulse-sweep 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
