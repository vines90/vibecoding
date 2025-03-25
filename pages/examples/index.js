import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Examples() {
  // Sample examples data - in a real app, this would come from a database or API
  const examples = [
    {
      id: 'todo-app',
      title: 'To-Do App',
      description: 'A simple to-do application built entirely through vibe coding with React and TailwindCSS.',
      difficulty: 'Beginner',
      tools: ['Cursor', 'React', 'TailwindCSS'],
      image: '/images/example-todo.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that fetches and displays weather data from a public API.',
      difficulty: 'Intermediate',
      tools: ['GitHub Copilot', 'Vue.js', 'OpenWeatherMap API'],
      image: '/images/example-weather.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'markdown-editor',
      title: 'Markdown Editor',
      description: 'A real-time markdown editor with preview functionality and local storage saving.',
      difficulty: 'Intermediate',
      tools: ['ChatGPT', 'JavaScript', 'Marked.js'],
      image: '/images/example-markdown.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'e-commerce-store',
      title: 'E-Commerce Store',
      description: 'A functional e-commerce store with product listing, cart, and checkout functionality.',
      difficulty: 'Advanced',
      tools: ['Cursor', 'Next.js', 'Stripe API'],
      image: '/images/example-ecommerce.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'recipe-finder',
      title: 'Recipe Finder',
      description: 'An app that helps users find recipes based on available ingredients in their kitchen.',
      difficulty: 'Intermediate',
      tools: ['Replit', 'React', 'Spoonacular API'],
      image: '/images/example-recipe.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'quiz-app',
      title: 'Interactive Quiz App',
      description: 'A quiz application with multiple categories, scoring, and result sharing.',
      difficulty: 'Beginner',
      tools: ['ChatGPT', 'HTML/CSS/JS', 'Open Trivia API'],
      image: '/images/example-quiz.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vibe Coding Examples</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore real-world projects built with vibe coding techniques.
              Learn by example and get inspired for your next project.
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
                placeholder="Search examples..." 
                className="border rounded-md px-3 py-1 pl-9 w-64 text-gray-700"
              />
              <svg className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Example */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                    {examples[0].difficulty}
                  </span>
                  {examples[0].tools.map((tool) => (
                    <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">{examples[0].title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{examples[0].description}</p>
                
                <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    How to structure a React application using AI assistance
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Implementing CRUD operations with vibe coding
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Styling with TailwindCSS through natural language descriptions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Debugging and refining code with AI assistance
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href={`/examples/${examples[0].id}`} 
                    className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-lg font-medium transition-colors"
                  >
                    View Tutorial
                  </Link>
                  <a 
                    href={examples[0].demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white border border-primary text-primary hover:bg-primary/5 px-5 py-2 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={examples[0].codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-lg font-medium transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-64 lg:h-auto">
                <img 
                  src={examples[0].image} 
                  alt={examples[0].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.slice(1).map((example) => (
              <div key={example.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={example.image} alt={example.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {example.difficulty}
                    </span>
                    {example.tools.slice(0, 1).map((tool) => (
                      <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tool}
                      </span>
                    ))}
                    {example.tools.length > 1 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        +{example.tools.length - 1} more
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-gray-600 mb-6">{example.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href={`/examples/${example.id}`} 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      View Tutorial →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Example CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Own Vibe Coding Example</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have you created something cool with vibe coding? Share it with our community and inspire others!
          </p>
          <Link 
            href="/submit-example" 
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Submit Your Example
          </Link>
        </div>
      </section>
    </Layout>
  );
} 