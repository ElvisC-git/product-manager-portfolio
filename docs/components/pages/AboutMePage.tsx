import React from 'react';
import { GlobeIcon } from '../icons/GlobeIcon';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';

const skills = [
  'Product Strategy & Vision', 'Roadmap Planning', 'Agile Methodologies',
  'User Research & Analysis', 'Data-Driven Decisions', 'Stakeholder Management',
  'Go-to-Market Strategy', 'A/B Testing & Experimentation', 'Team Leadership'
];

const AboutMePage = () => {
  return (
    <div className="space-y-12 pt-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/profile/200/200" 
            alt="Wai Cheung" 
            className="rounded-full h-40 w-40 object-cover border-4 border-indigo-600/50"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#0B172A]">Hello, I'm Wai Cheung.</h3>
          <p className="mt-4 text-lg text-[#0B172A]/80">
            I am a seasoned product leader with over 8 years of experience in creating and scaling digital products across various industries, including SaaS, FinTech, and E-commerce. My passion lies at the intersection of technology, business, and user experience.
          </p>
          <p className="mt-4 text-lg text-[#0B172A]/80">
            I believe in building products not just for users, but with them. By fostering a culture of collaboration, curiosity, and data-informed decision-making, I guide cross-functional teams to deliver solutions that are not only innovative but also solve real-world problems and drive business growth.
          </p>
          <p className="mt-6 text-lg text-[#0B172A]/80 font-share-tech-mono italic">
            Passionate about turning complex problems into simple, elegant solutions.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="font-share-tech-mono flex items-center gap-3 text-base text-[#0B172A]/80">
              <GlobeIcon className="h-5 w-5 flex-shrink-0 text-indigo-600/70" />
              <div className="flex items-center gap-x-1.5 tracking-wider text-sm">
                <span>EN | DE | CN |</span>
                <div className="relative group">
                  <span className="cursor-default text-slate-400" aria-describedby="lang-tooltip-no">NO</span>
                  <div 
                    id="lang-tooltip-no" 
                    role="tooltip" 
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-2 flex items-center text-xs text-indigo-700/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                  >
                    <ArrowLeftIcon className="h-4 w-4 mr-1 text-indigo-500/80"/>
                    <span>Work in progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h3 className="text-2xl font-bold text-[#0B172A] text-center">Core Expertise</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <span key={skill} className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-[#0B172A]/90 border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;