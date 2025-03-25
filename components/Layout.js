import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark bg-mesh-pattern">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <span className="font-bold text-2xl gradient-text group-hover:opacity-90 transition-opacity">
                  <span className="text-primary">Vibe</span>Coding
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-medium text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/tutorials" className="font-medium text-gray-200 hover:text-white transition-colors">
                Tutorials
              </Link>
              <Link href="/tools" className="font-medium text-gray-200 hover:text-white transition-colors">
                Tools
              </Link>
              <Link href="/examples" className="font-medium text-gray-200 hover:text-white transition-colors">
                Examples
              </Link>
              <Link href="/blog" className="font-medium text-gray-200 hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-surface border-t border-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">VibeCoding</h3>
              <p className="text-gray-400">Helping you master AI-dependent programming practices.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tutorials" className="hover:text-primary transition-colors">Tutorials</Link></li>
                <li><Link href="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
                <li><Link href="/examples" className="hover:text-primary transition-colors">Examples</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://twitter.com/vibecoding" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="https://github.com/vibecoding" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://discord.gg/vibecoding" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Newsletter</h4>
              <p className="text-gray-400 mb-2">Stay updated with the latest vibe coding tips and news.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-surface-light text-gray-300 rounded-l border border-surface-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-surface-light mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} VibeCoding. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 