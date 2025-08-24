
import React from 'react';
import { BriefcaseIcon } from '../icons/BriefcaseIcon';

interface JourneyItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const journeyData: JourneyItem[] = [
  {
    year: 'May. 2025 - Present',
    role: 'Senior Product Manager',
    company: 'Hypatos GmbH, Berlin',
    description: 'Leading the...'
  },
  {
    year: 'Jan. 2023 – Apr. 2025',
    role: 'Product Manager',
    company: 'Hypatos GmbH, Berlin',
    description: 'Managed ...'
  },
  {
    year: 'Jan.2021 – Dec. 2022',
    role: 'Junior Product Manager',
    company: 'Hypatos GmbH, Berlin',
    description: 'Supported the product team ...'
  },
  {
    year: 'Apr. 2019 – Jan. 2021',
    role: 'Team Assistant',
    company: 'Hypatos GmbH, Berlin',
    description: '...'
  },
];

const ProductJourneyPage = () => {
  return (
    <div className="py-16">
      <div className="relative border-l-2 border-indigo-600/30 ml-4 pl-8 md:ml-6 md:pl-10 space-y-16 py-4">
        {journeyData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[45px] md:-left-[53px] top-1.5 h-6 w-6 rounded-full bg-slate-50 border-2 border-indigo-600 flex items-center justify-center">
               <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/10">
              <p className="text-sm font-medium text-indigo-600">{item.year}</p>
              <h3 className="mt-2 text-xl font-Medium text-[#0B172A]">{item.role}</h3>
              <p className="mt-1 text-md font-normal text-[#0B172A]/90">{item.company}</p>
              <p className="mt-4 text-[#0B172A]/80 font-roboto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductJourneyPage;