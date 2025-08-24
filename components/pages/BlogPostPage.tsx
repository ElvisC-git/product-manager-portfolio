
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../../data/blog';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#0B172A]">Post not found</h2>
        <p className="mt-4 text-[#0B172A]/80">Sorry, we couldn't find the blog post you're looking for.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
           <ArrowLeftIcon className="mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 animate-fade-in">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group">
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to all articles
        </Link>
      </div>

      <article className="prose lg:prose-xl max-w-none">
        <header className="mb-10 border-b border-gray-200 pb-8">
          <p className="text-base font-medium text-indigo-600">{article.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B172A] sm:text-4xl">{article.title}</h1>
          <p className="mt-4 text-base text-[#0B172A]/70">{article.date}</p>
          <p className="mt-2 text-base text-[#0B172A]/70">By Wai Cheung</p>
        </header>
        
        <div className="pt-8">
          {article.content ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <p className="text-lg italic text-[#0B172A]/60">
              Full content for this article is coming soon. Stay tuned!
            </p>
          )}
        </div>
      </article>

      <style>
      {`
        .prose {
          color: #0B172A_e6;
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #0B172A;
        }
        .prose p, .prose ul, .prose ol, .prose blockquote {
          color: #0B172A_e6;
          font-family: 'Roboto', sans-serif;
          font-size: 1.1em;
          line-height: 1.8;
        }
        .prose .lead {
          font-size: 1.25em;
          line-height: 1.6;
          color: #0B172A;
        }
        .prose a {
          color: #4f46e5;
          transition: color 0.2s;
        }
        .prose a:hover {
          color: #4338ca;
        }
        .prose strong {
          color: #0B172A;
        }
        .prose blockquote {
          border-left-color: #a5b4fc;
          font-style: italic;
          color: #0B172A_b3;
        }
        .prose ul > li::before {
          background-color: #4f46e5;
        }
      `}
      </style>
    </div>
  );
};

export default BlogPostPage;