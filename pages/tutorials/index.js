import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Tutorials() {
  // Sample tutorial data - in a real app, this would come from a database or API
  const tutorials = [
    {
      id: 'getting-started',
      title: 'Getting Started with Vibe Coding',
      description: 'Learn the fundamentals of vibe coding and set up your environment for AI-assisted development.',
      level: 'Beginner',
      duration: '30 min',
      image: '/images/tutorial-1.jpg',
    },
    {
      id: 'prompt-engineering',
      title: 'Effective Prompt Engineering for Coding',
      description: 'Master the art of writing effective prompts that get the AI to generate exactly the code you want.',
      level: 'Intermediate',
      duration: '45 min',
      image: '/images/tutorial-2.jpg',
    },
    {
      id: 'cursor-ai',
      title: 'Mastering Cursor for Vibe Coding',
      description: 'Learn how to use Cursor, one of the most powerful AI coding tools, for maximum productivity.',
      level: 'Beginner',
      duration: '40 min',
      image: '/images/tutorial-3.jpg',
    },
    {
      id: 'github-copilot-tips',
      title: 'GitHub Copilot Tips and Tricks',
      description: 'Advanced techniques to get the most out of GitHub Copilot in your development workflow.',
      level: 'Intermediate',
      duration: '35 min',
      image: '/images/tutorial-4.jpg',
    },
    {
      id: 'chatgpt-coding',
      title: 'Using ChatGPT for Code Generation',
      description: 'How to effectively use ChatGPT to generate, debug, and explain code for your projects.',
      level: 'Beginner',
      duration: '25 min',
      image: '/images/tutorial-5.jpg',
    },
    {
      id: 'complex-projects',
      title: 'Building Complex Projects with AI',
      description: 'Strategies for managing larger projects when using AI-assisted coding techniques.',
      level: 'Advanced',
      duration: '60 min',
      image: '/images/tutorial-6.jpg',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vibe Coding Tutorials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn how to harness the power of AI to code more efficiently and effectively.
              Our step-by-step tutorials will take you from beginner to vibe coding master.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Filter by:</span>
              <select className="border rounded-md px-3 py-1 text-gray-700">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="border rounded-md px-3 py-1 text-gray-700">
                <option>All Tools</option>
                <option>Cursor</option>
                <option>GitHub Copilot</option>
                <option>ChatGPT</option>
                <option>Replit</option>
              </select>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                className="border rounded-md px-3 py-1 pl-9 w-64 text-gray-700"
              />
              <svg className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {tutorial.level}
                    </span>
                    <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  <Link href={`/tutorials/${tutorial.id}`} className="text-primary hover:text-primary/80 font-medium">
                    Start Tutorial →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get New Tutorials in Your Inbox</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest vibe coding tutorials, tips, and updates.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 