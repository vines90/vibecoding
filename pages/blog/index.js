import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog() {
  // Sample blog posts data - in a real app, this would come from a database or API
  const posts = [
    {
      id: 'getting-started-with-vibe-coding',
      title: 'Getting Started with Vibe Coding: A Beginner\'s Guide',
      excerpt: 'Learn the basics of vibe coding and how to set up your environment for AI-assisted development.',
      date: 'March 25, 2025',
      author: 'VibeCoding Team',
      image: '/images/blog-1.jpg',
      readTime: '5 min read',
      tags: ['Beginners', 'Tutorial']
    },
    {
      id: 'advanced-vibe-coding-techniques',
      title: '10 Advanced Vibe Coding Techniques for Experienced Developers',
      excerpt: 'Take your AI-assisted coding to the next level with these advanced techniques and strategies.',
      date: 'March 23, 2025',
      author: 'Alex Chen',
      image: '/images/blog-2.jpg',
      readTime: '8 min read',
      tags: ['Advanced', 'Tips & Tricks']
    },
    {
      id: 'future-of-programming-vibe-coding',
      title: 'The Future of Programming: How Vibe Coding is Changing the Industry',
      excerpt: 'Explore how AI-assisted development is reshaping the future of the programming landscape and job market.',
      date: 'March 20, 2025',
      author: 'Sarah Johnson',
      image: '/images/blog-3.jpg',
      readTime: '6 min read',
      tags: ['Industry', 'Future']
    },
    {
      id: 'prompt-engineering-for-coders',
      title: 'Prompt Engineering for Coders: Getting Better Results from AI',
      excerpt: 'Learn effective prompt engineering techniques specifically tailored for code generation and modification.',
      date: 'March 18, 2025',
      author: 'Michael Torres',
      image: '/images/blog-4.jpg',
      readTime: '7 min read',
      tags: ['Prompting', 'Tips & Tricks']
    },
    {
      id: 'comparing-vibe-coding-tools',
      title: 'Comparing Vibe Coding Tools: Which One is Right for You?',
      excerpt: 'A comprehensive comparison of Cursor, GitHub Copilot, Replit, and other popular vibe coding tools.',
      date: 'March 15, 2025',
      author: 'Emily Wong',
      image: '/images/blog-5.jpg',
      readTime: '9 min read',
      tags: ['Tools', 'Comparison']
    },
    {
      id: 'how-vibe-coding-transformed-my-workflow',
      title: 'How Vibe Coding Transformed My Development Workflow',
      excerpt: 'A personal story of how embracing AI-assisted coding revolutionized one developer\'s productivity and enjoyment.',
      date: 'March 12, 2025',
      author: 'David Martinez',
      image: '/images/blog-6.jpg',
      readTime: '4 min read',
      tags: ['Case Study', 'Experience']
    }
  ];

  // Available tags for filtering
  const tags = ['All', 'Beginners', 'Advanced', 'Tips & Tricks', 'Tools', 'Industry', 'Prompting', 'Case Study', 'Experience', 'Future', 'Tutorial', 'Comparison'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vibe Coding Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, tutorials, and news about the revolutionary practice of AI-assisted coding.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="overflow-x-auto whitespace-nowrap pb-2 md:pb-0 max-w-full">
              <div className="flex space-x-2">
                {tags.map((tag) => (
                  <button 
                    key={tag} 
                    className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${tag === 'All' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="border rounded-md px-3 py-1 pl-9 w-64 text-gray-700"
              />
              <svg className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mr-3">
                    {posts[0].tags[0]}
                  </span>
                  <span className="mr-3">{posts[0].date}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{posts[0].excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src="/images/author-avatar.jpg" 
                      alt={posts[0].author} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{posts[0].author}</span>
                  </div>
                  <Link 
                    href={`/blog/${posts[0].id}`} 
                    className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-lg font-medium transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mr-3">
                      {post.tags[0]}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src="/images/author-avatar.jpg" 
                        alt={post.author} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary/80 font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-700 hover:bg-gray-50">2</button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-700 hover:bg-gray-50">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-700 hover:bg-gray-50">8</button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest vibe coding tips, tutorials, and news directly in your inbox. No spam, just valuable content.
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