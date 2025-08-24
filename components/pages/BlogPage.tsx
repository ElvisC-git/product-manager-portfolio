
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { articles } from '../../data/blog';

const BlogPage = () => {
  return (
    <div className="space-y-12 py-16">
      <div className="space-y-8">
        {articles.map((article) => {
          const isExternal = article.link.startsWith('http');
          const commonClassName = "group block p-6 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/10 transform hover:-translate-y-1";

          const articleContent = (
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-indigo-600">{article.category}</p>
                <h3 className="mt-2 text-xl font-Medium text-[#0B172A] group-hover:text-indigo-600 transition-colors">{article.title}</h3>
                <p className="mt-2 text-[#0B172A]/80 font-roboto">{article.excerpt}</p>
                <p className="mt-4 text-xs text-[#0B172A]/70">{article.date}</p>
              </div>
              <div className="ml-4 flex-shrink-0 text-[#0B172A]/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-600">
                <ArrowRightIcon />
              </div>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClassName}
              >
                {articleContent}
              </a>
            );
          }

          return (
            <Link
              key={article.title}
              to={article.link}
              className={commonClassName}
            >
              {articleContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;