import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pb-16 pt-20 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.2),transparent_40%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Master <span className="gradient-text">Vibe Coding</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-xl mx-auto md:mx-0">
                Learn how to leverage AI tools to code faster, better, and with less effort. 
                <span className="text-white font-semibold"> Vibe coding is the future of programming.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/tutorials" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/tools" className="btn-secondary">
                  Explore Tools
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="glass-card p-6 shadow-glow-lg transform rotate-1 hover:rotate-0 transition-all duration-500">
                <pre className="text-gray-100 relative overflow-visible">
                  <div className="absolute -top-2 -right-2 flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <code className="language-javascript">{`// Traditional coding:
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Vibe coding:
"Create a function that sorts 
 an array of numbers"

// AI generates for you! 🚀`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/20 to-transparent opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What is <span className="gradient-text">Vibe Coding</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vibe coding is a new approach to software development where AI handles the syntax details 
              while you focus on the high-level concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Faster Development</h3>
              <p className="text-gray-400">Build projects in hours instead of days or weeks. AI handles the repetitive parts of coding.</p>
            </div>
            
            <div className="card p-8 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Focus on Concepts</h3>
              <p className="text-gray-400">Concentrate on the problem you're solving rather than getting bogged down in syntax details.</p>
            </div>
            
            <div className="card p-8 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Learn As You Go</h3>
              <p className="text-gray-400">Understand programming concepts by seeing AI-generated code and asking for explanations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Essential <span className="gradient-text">Vibe Coding</span> Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These powerful AI tools will transform your coding experience and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 hover:-translate-y-1">
              <img src="/images/cursor-logo.png" alt="Cursor" className="w-16 h-16 mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Cursor</h3>
              <p className="text-gray-400 mb-4">An AI-powered code editor based on VS Code that integrates AI directly into your workflow.</p>
              <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="card p-6 hover:-translate-y-1">
              <img src="/images/github-copilot-logo.png" alt="GitHub Copilot" className="w-16 h-16 mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">GitHub Copilot</h3>
              <p className="text-gray-400 mb-4">An AI pair programmer that helps you write better code faster with context-aware suggestions.</p>
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="card p-6 hover:-translate-y-1">
              <img src="/images/replit-logo.png" alt="Replit" className="w-16 h-16 mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Replit</h3>
              <p className="text-gray-400 mb-4">An online IDE with AI features that helps you build and deploy software without leaving your browser.</p>
              <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="card p-6 hover:-translate-y-1">
              <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="w-16 h-16 mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">ChatGPT</h3>
              <p className="text-gray-400 mb-4">A conversational AI that can generate code, debug issues, and explain programming concepts.</p>
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/tools" className="btn-primary inline-flex items-center">
              View All Tools <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Vibe Coding?</h2>
                <p className="mb-8 text-gray-300">Join thousands of developers who have revolutionized their coding workflow with AI assistance.</p>
                <Link href="/tutorials/getting-started" className="btn-primary inline-flex items-center">
                  Get Started Now <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-12 flex items-center">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">Comprehensive tutorials for beginners</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">Real-world project examples</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">Tips for optimal AI prompting</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">Supportive community of vibe coders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Vibe Coding</span> Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, techniques, and tools in the vibe coding ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img src="/images/blog-1.jpg" alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Beginners</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">Getting Started with Vibe Coding: A Beginner's Guide</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">Learn the basics of vibe coding and how to start implementing it in your workflow.</p>
                <Link href="/blog/getting-started-with-vibe-coding" className="text-primary font-medium hover:underline inline-flex items-center group">
                  Read More <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img src="/images/blog-2.jpg" alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Advanced</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">10 Advanced Vibe Coding Techniques for Experienced Developers</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">Take your AI-assisted coding to the next level with these advanced techniques.</p>
                <Link href="/blog/advanced-vibe-coding-techniques" className="text-primary font-medium hover:underline inline-flex items-center group">
                  Read More <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img src="/images/blog-3.jpg" alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Future</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">The Future of Programming: How Vibe Coding is Changing the Industry</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">Explore how AI-assisted development is reshaping the future of the programming industry.</p>
                <Link href="/blog/future-of-programming-vibe-coding" className="text-primary font-medium hover:underline inline-flex items-center group">
                  Read More <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary inline-flex items-center">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 