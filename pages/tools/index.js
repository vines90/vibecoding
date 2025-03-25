import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Tools() {
  // Sample tools data - in a real app, this would come from a database or API
  const tools = [
    {
      id: 'cursor',
      name: 'Cursor',
      description: 'An AI-powered code editor based on VS Code that integrates AI directly into your development workflow.',
      category: 'IDE',
      pricing: 'Free & Paid',
      image: '/images/cursor-logo.png',
      url: 'https://cursor.sh',
      features: [
        'AI code completion',
        'Natural language to code conversion',
        'Code explanation and documentation',
        'Error fixing and debugging assistance'
      ]
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      description: 'An AI pair programmer that helps you write better code faster with context-aware suggestions.',
      category: 'IDE Plugin',
      pricing: 'Paid',
      image: '/images/github-copilot-logo.png',
      url: 'https://github.com/features/copilot',
      features: [
        'Code suggestions as you type',
        'Multi-line code completion',
        'Comment-to-code generation',
        'Available for multiple editors'
      ]
    },
    {
      id: 'replit',
      name: 'Replit',
      description: 'An online IDE with AI features that helps you build and deploy software without leaving your browser.',
      category: 'Online IDE',
      pricing: 'Free & Paid',
      image: '/images/replit-logo.png',
      url: 'https://replit.com',
      features: [
        'Browser-based development',
        'Integrated deployment',
        'Collaboration tools',
        'AI code assistance'
      ]
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'A conversational AI that can generate code, debug issues, and explain programming concepts.',
      category: 'Chatbot',
      pricing: 'Free & Paid',
      image: '/images/chatgpt-logo.png',
      url: 'https://chat.openai.com',
      features: [
        'Code generation from text descriptions',
        'Error troubleshooting',
        'Code explanations',
        'Cross-language support'
      ]
    },
    {
      id: 'claude',
      name: 'Claude',
      description: 'Anthropic\'s conversational AI assistant that excels at understanding complex prompts and generating code.',
      category: 'Chatbot',
      pricing: 'Free & Paid',
      image: '/images/claude-logo.png',
      url: 'https://claude.ai',
      features: [
        'Long context understanding',
        'Detailed code explanations',
        'Nuanced coding assistance',
        'Problem-solving capabilities'
      ]
    },
    {
      id: 'windsurf',
      name: 'Windsurf',
      description: 'An AI-powered code editor designed for automated workflows and smoother development experiences.',
      category: 'IDE',
      pricing: 'Paid',
      image: '/images/windsurf-logo.png',
      url: 'https://www.windsurf.io',
      features: [
        'Agentic code generation',
        'Automated workflow enhancements',
        'Integrated testing',
        'Seamless code modifications'
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vibe Coding Tools</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the best AI-powered tools that will transform your coding experience and boost your productivity.
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
                <option>All Categories</option>
                <option>IDE</option>
                <option>IDE Plugin</option>
                <option>Online IDE</option>
                <option>Chatbot</option>
              </select>
              <select className="border rounded-md px-3 py-1 text-gray-700">
                <option>All Pricing</option>
                <option>Free</option>
                <option>Paid</option>
                <option>Free & Paid</option>
              </select>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="border rounded-md px-3 py-1 pl-9 w-64 text-gray-700"
              />
              <svg className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <img src={tool.image} alt={tool.name} className="w-16 h-16 object-contain" />
                    <div className="flex space-x-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                        {tool.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                        {tool.pricing}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="mb-6 space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <Link href={`/tools/${tool.id}`} className="text-primary hover:text-primary/80 font-medium">
                      Learn More
                    </Link>
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tools Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not sure which tool is right for you? Compare their features to find the perfect match for your vibe coding needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Limitations</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Cursor</td>
                  <td className="px-6 py-4 whitespace-nowrap">IDE</td>
                  <td className="px-6 py-4 whitespace-nowrap">Free & Paid</td>
                  <td className="px-6 py-4">Comprehensive coding assistance in a familiar VS Code interface</td>
                  <td className="px-6 py-4">Higher learning curve for AI features</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">GitHub Copilot</td>
                  <td className="px-6 py-4 whitespace-nowrap">IDE Plugin</td>
                  <td className="px-6 py-4 whitespace-nowrap">Paid</td>
                  <td className="px-6 py-4">Inline code suggestions and completions</td>
                  <td className="px-6 py-4">Less interactive than chat-based tools</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Replit</td>
                  <td className="px-6 py-4 whitespace-nowrap">Online IDE</td>
                  <td className="px-6 py-4 whitespace-nowrap">Free & Paid</td>
                  <td className="px-6 py-4">Quick prototyping and browser-based development</td>
                  <td className="px-6 py-4">Performance limitations for complex projects</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">ChatGPT</td>
                  <td className="px-6 py-4 whitespace-nowrap">Chatbot</td>
                  <td className="px-6 py-4 whitespace-nowrap">Free & Paid</td>
                  <td className="px-6 py-4">General coding assistance and explanations</td>
                  <td className="px-6 py-4">No direct code execution or project management</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Claude</td>
                  <td className="px-6 py-4 whitespace-nowrap">Chatbot</td>
                  <td className="px-6 py-4 whitespace-nowrap">Free & Paid</td>
                  <td className="px-6 py-4">Detailed explanations and complex coding tasks</td>
                  <td className="px-6 py-4">No direct code execution or project management</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Windsurf</td>
                  <td className="px-6 py-4 whitespace-nowrap">IDE</td>
                  <td className="px-6 py-4 whitespace-nowrap">Paid</td>
                  <td className="px-6 py-4">Automated coding workflows</td>
                  <td className="px-6 py-4">Newer platform with smaller community</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Coding Experience?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start with our beginner-friendly tutorial to learn how to effectively use these tools for vibe coding.
          </p>
          <Link 
            href="/tutorials/getting-started" 
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Get Started with Vibe Coding
          </Link>
        </div>
      </section>
    </Layout>
  );
} 