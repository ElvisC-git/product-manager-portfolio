
import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'An enterprise-level AI analytics platform that provides actionable insights from vast datasets.',
    imageUrl: 'https://picsum.photos/seed/alpha/600/400',
    tags: ['SaaS', 'AI/ML', 'B2B', 'Data Visualization']
  },
  {
    title: 'Project Beta',
    description: 'A consumer-facing mobile app designed to simplify personal finance management and budgeting.',
    imageUrl: 'https://picsum.photos/seed/beta/600/400',
    tags: ['Mobile', 'FinTech', 'B2C', 'UX/UI']
  },
  {
    title: 'Project Gamma',
    description: 'A scalable e-commerce platform with a focus on personalized shopping experiences.',
    imageUrl: 'https://picsum.photos/seed/gamma/600/400',
    tags: ['E-commerce', 'Personalization', 'Growth']
  },
  {
    title: 'Project Delta',
    description: 'An internal tool that streamlined development workflows, increasing team productivity by 25%.',
    imageUrl: 'https://picsum.photos/seed/delta/600/400',
    tags: ['Internal Tools', 'Developer Experience', 'Agile']
  }
];

const MyWorkPage = () => {
  return (
    <div className="space-y-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/10 transform hover:-translate-y-1">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0B172A]">{project.title}</h3>
              <p className="mt-2 text-[#0B172A]/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkPage;