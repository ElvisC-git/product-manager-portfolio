import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '../AnimatedLogo';
import { MapPinIcon } from '../icons/MapPinIcon';
import { XIcon } from '../icons/XIcon';

const keyDecisions = [
  {
    title: 'Theme & Aesthetic',
    description: "It’s been my dream to bring the magic of the northern lights to my own website, so I defined the design vision for a delicate, airy 'aurora' theme and directed the AI on color palettes and visual effects.",
  },
  {
    title: 'Typography',
    description: "Curated the typography, pairing 'Tomorrow' and 'Rock Salt' for a technical feel, with 'Roboto' for highly readable blog content.",
  },
  {
    title: 'Layout & Spacing',
    description: 'Enhanced the user experience by directing the layout, spacing, and visual hierarchy to ensure intuitive navigation and readability.',
  },
  {
    title: 'Content & Copy',
    description: 'Crafted written content and copy to ensure the site speaks with my authentic voice.',
  },
  {
    title: 'Site Architecture',
    description: 'Guided the model to create a modular site architecture for maintainability, enabling easy page and blog post management.',
  },
  {
    title: 'Interaction Polish',
    description: 'Directed the model to create and polish animations and hover effects for a more engaging browsing experience.',
  },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex min-h-[calc(100vh-10rem)] flex-col-reverse items-center justify-end gap-12 pt-8 pb-16 text-left md:flex-row md:items-start md:justify-between">
        <div className="animate-fade-in">
           <div>
              <p className="max-w-md text-xl font-semibold leading-relaxed tracking-wide text-[#0B172A]">
                Senior Product Manager
              </p>
              <p className=" text-3xl md:text-4xl leading-tight tracking-wide text-[#0B172A] mt-1">
                Building what matters,
                <br />
                from <span className="font-rock-salt">concept</span> to
                <br />
                <span className="font-rock-salt">impace.</span>
              </p>
              <div className="flex items-center gap-3 mt-8 text-base text-[#0B172A]/80 font-share-tech-mono">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 text-indigo-600/70" />
                <span>Berlin, Germany</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="mt-4 text-base font-medium leading-6 text-[#0B172A]/80 hover:text-[#0B172A] transition-colors duration-300 group inline-flex items-center font-share-tech-mono"
            >
              <span className="mr-2 transition-transform duration-300 group-hover:-rotate-12">👋</span> Say Hi!
            </Link>
        </div>
        <AnimatedLogo />
      </div>
      <div className="text-center pb-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-[#0B172A]/50 font-share-tech-mono hover:text-[#0B172A]/80 transition-colors duration-300 underline underline-offset-2"
          aria-label="View website creation credits"
        >
          Built with Google AI Studio using gemini-2.5-flash
        </button>
      </div>
      
      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsModalOpen(false)}
        role="presentation"
        aria-modal="true"
        aria-labelledby="decision-log-title"
      >
        <div
          className={`relative w-full max-w-lg bg-white/95 rounded-lg shadow-2xl p-8 border border-slate-200/50 transition-all duration-300 ease-in-out ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-[#0B172A]/60 hover:text-[#0B172A] transition-colors"
            aria-label="Close"
          >
            <XIcon />
          </button>
          <h2 id="decision-log-title" className="text-xl font-bold text-[#0B172A]">The Making of This Site</h2>
          <p className="mt-2 text-sm text-[#0B172A]/80 font-roboto">
            This site was co-created with Google's Gemini model. While the AI handled the code, I made the key creative and content decisions:
          </p>
          <ul className="mt-6 space-y-3 text-sm font-roboto text-[#0B172A]/90">
            {keyDecisions.map(decision => (
              <li key={decision.title} className="flex items-start">
                <strong className="font-medium text-[#0B172A] w-32 flex-shrink-0">{decision.title}:</strong> 
                <span className="ml-2">{decision.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
