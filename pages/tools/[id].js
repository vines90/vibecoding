import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdBanner from '../../components/AdBanner';

// Mock tools data - in a real application, this would come from a database or API
const tools = [
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'The AI-first code editor',
    description: 'An AI-powered code editor based on VS Code that integrates AI capabilities directly into your workflow.',
    image: '/images/cursor-logo.png',
    website: 'https://cursor.sh',
    pricing: [
      { plan: 'Free', price: '$0', features: ['Basic AI code generation', 'Limited chat interactions', 'Community support'] },
      { plan: 'Pro', price: '$20/month', features: ['Advanced AI code generation', 'Unlimited chat interactions', 'Priority support', 'Access to GPT-4 model'] }
    ],
    rating: 4.8,
    categories: ['Code Editor', 'AI Assistant'],
    platforms: ['macOS', 'Windows', 'Linux'],
    features: [
      {
        title: 'AI-Powered Code Generation',
        description: 'Generate code from natural language descriptions or automatically complete your code as you type.',
        image: '/images/tools/cursor-feature-1.png'
      },
      {
        title: 'Smart Editing',
        description: 'Perform complex edits with natural language commands instead of multiple manual steps.',
        image: '/images/tools/cursor-feature-2.png'
      },
      {
        title: 'Code Understanding',
        description: 'Ask questions about your codebase and get detailed explanations in plain English.',
        image: '/images/tools/cursor-feature-3.png'
      },
      {
        title: 'Built on VS Code',
        description: 'Familiar interface and compatible with most VS Code extensions for a seamless transition.',
        image: '/images/tools/cursor-feature-4.png'
      }
    ],
    pros: [
      'Intuitive natural language interface',
      'Built on the popular VS Code editor',
      'Strong community and regular updates',
      'Excellent for both code generation and understanding'
    ],
    cons: [
      'Best features require paid subscription',
      'Occasional AI hallucinations',
      'Can be resource-intensive on older machines'
    ],
    tutorials: [
      { title: 'Getting Started with Cursor', link: '/tutorials/cursor-basics' },
      { title: 'Advanced Cursor Techniques', link: '/tutorials/cursor-advanced' }
    ],
    alternatives: ['GitHub Copilot', 'Replit', 'Codeium']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Your AI pair programmer',
    description: 'An AI pair programmer that helps you write better code faster by suggesting line completions and entire functions as you type.',
    image: '/images/github-copilot-logo.png',
    website: 'https://github.com/features/copilot',
    pricing: [
      { plan: 'Individual', price: '$10/month', features: ['AI code suggestions', 'Multiple editor support', 'Basic security features'] },
      { plan: 'Business', price: '$19/user/month', features: ['Team management', 'Advanced security features', 'Enterprise support', 'License management'] }
    ],
    rating: 4.7,
    categories: ['IDE Plugin', 'AI Assistant'],
    platforms: ['VS Code', 'Visual Studio', 'JetBrains IDEs', 'Neovim'],
    features: [
      {
        title: 'Real-time Code Suggestions',
        description: 'Get context-aware code suggestions as you type, helping you code faster and with fewer errors.',
        image: '/images/tools/copilot-feature-1.png'
      },
      {
        title: 'Multi-IDE Support',
        description: 'Works with all popular code editors including VS Code, JetBrains IDEs, and Neovim.',
        image: '/images/tools/copilot-feature-2.png'
      },
      {
        title: 'Whole Function Generation',
        description: 'Generate entire functions and methods based on your comments or function signatures.',
        image: '/images/tools/copilot-feature-3.png'
      },
      {
        title: 'GitHub Integration',
        description: 'Seamless integration with GitHub repositories and workflow.',
        image: '/images/tools/copilot-feature-4.png'
      }
    ],
    pros: [
      'Excellent code completion capabilities',
      'Support for multiple editors and IDEs',
      'Strong security and privacy features',
      'Backed by GitHub and Microsoft'
    ],
    cons: [
      'No free tier available',
      'Less conversational than some alternatives',
      'Occasional suggestion quality issues'
    ],
    tutorials: [
      { title: 'Getting Started with GitHub Copilot', link: '/tutorials/copilot-basics' },
      { title: 'GitHub Copilot Advanced Tips', link: '/tutorials/copilot-advanced' }
    ],
    alternatives: ['Cursor', 'Replit', 'Codeium']
  },
  {
    id: 'replit',
    name: 'Replit',
    tagline: 'Code, create, and learn together',
    description: 'An online IDE with AI features that helps you build and deploy software without leaving your browser.',
    image: '/images/replit-logo.png',
    website: 'https://replit.com',
    pricing: [
      { plan: 'Free', price: '$0', features: ['Basic IDE features', 'Limited AI coding assistance', 'Community support'] },
      { plan: 'Pro', price: '$10/month', features: ['Advanced IDE features', 'Enhanced AI coding assistance', 'Priority support', 'Boosted resources'] },
      { plan: 'Teams', price: '$20/user/month', features: ['Team collaboration', 'Private repls', 'Custom domains', 'Enhanced security'] }
    ],
    rating: 4.6,
    categories: ['Cloud IDE', 'AI Assistant', 'Educational Platform'],
    platforms: ['Web Browser'],
    features: [
      {
        title: 'Browser-Based Development',
        description: 'Code entirely in your browser with no setup required, making it easy to start new projects instantly.',
        image: '/images/tools/replit-feature-1.png'
      },
      {
        title: 'Ghostwriter AI Assistant',
        description: 'Built-in AI coding assistant that helps you generate, debug, and explain code.',
        image: '/images/tools/replit-feature-2.png'
      },
      {
        title: 'One-Click Deployment',
        description: 'Deploy your applications instantly with a single click, no configuration required.',
        image: '/images/tools/replit-feature-3.png'
      },
      {
        title: 'Collaborative Coding',
        description: 'Real-time collaboration features that let multiple people work on the same codebase simultaneously.',
        image: '/images/tools/replit-feature-4.png'
      }
    ],
    pros: [
      'No installation or setup required',
      'Excellent for learning and education',
      'Built-in deployment and hosting',
      'Strong collaboration features'
    ],
    cons: [
      'Performance limitations for complex projects',
      'Limited offline capabilities',
      'Resource constraints on free tier'
    ],
    tutorials: [
      { title: 'Getting Started with Replit', link: '/tutorials/replit-basics' },
      { title: 'Building and Deploying with Replit', link: '/tutorials/replit-deployment' }
    ],
    alternatives: ['Cursor', 'GitHub Copilot', 'CodeSandbox']
  }
];

export default function ToolDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the current tool based on the ID from the URL
  const tool = tools.find(tool => tool.id === id);
  
  // If the tool is not found or the page is still loading, show a loading state
  if (!tool) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">Loading tool information...</p>
        </div>
      </Layout>
    );
  }
  
  // Find alternative tools based on the current tool's alternatives
  const alternativeTools = tools.filter(t => tool.alternatives.includes(t.name));
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-2/3">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                {tool.categories.map(category => (
                  <span key={category} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.name}</h1>
              <p className="text-xl mb-6">{tool.tagline}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a 
                  href={tool.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Visit Website
                </a>
                <Link href="/tutorials" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors">
                  View Tutorials
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img src={tool.image} alt={tool.name} className="w-32 h-32 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-700 mb-6">{tool.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xl font-bold">{tool.rating}/5</span>
                </div>
                
                {/* Platforms */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">Available on</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.platforms.map(platform => (
                      <span key={platform} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Feature Highlights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Feature Highlights</h2>
                <div className="space-y-8">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                      <div className={`bg-gray-100 rounded-lg p-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                          <span>Feature Image</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pros and Cons */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Pros and Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Pros</h3>
                    <ul className="space-y-3">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Cons</h3>
                    <ul className="space-y-3">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-gray-50 p-4 border-b">
                  <h3 className="text-xl font-bold">Pricing</h3>
                </div>
                <div className="p-4">
                  {tool.pricing.map((tier, index) => (
                    <div key={index} className={`${index > 0 ? 'border-t pt-4 mt-4' : ''}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{tier.plan}</span>
                        <span className="text-lg font-bold text-primary">{tier.price}</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tutorials */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-gray-50 p-4 border-b">
                  <h3 className="text-xl font-bold">Tutorials</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {tool.tutorials.map((tutorial, index) => (
                      <li key={index}>
                        <Link href={tutorial.link} className="flex items-center text-primary hover:underline">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                          {tutorial.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Advertisement */}
              <AdBanner type="sidebar" className="mx-auto mb-8" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Alternative Tools */}
      {alternativeTools.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Alternative Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alternativeTools.map((alt) => (
                <Link 
                  key={alt.id} 
                  href={`/tools/${alt.id}`} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={alt.image} alt={alt.name} className="w-12 h-12 mr-4" />
                      <h3 className="font-bold text-lg">{alt.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{alt.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(alt.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-primary font-medium">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Try {tool.name}?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your vibe coding journey with {tool.name} and experience the power of AI-assisted development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started with {tool.name}
            </a>
            <Link 
              href="/tools" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Compare All Tools
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 