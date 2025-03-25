import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdBanner from '../../components/AdBanner';

// Mock blog data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 'getting-started-with-vibe-coding',
    title: 'Getting Started with Vibe Coding: A Beginner\'s Guide',
    date: 'March 25, 2025',
    author: 'VibeCoding Team',
    image: '/images/blog-1.jpg',
    authorImage: '/images/author-avatar.jpg',
    readTime: '5 min read',
    tags: ['Beginners', 'Tutorial'],
    content: `
      <p class="mb-4">Vibe coding is revolutionizing how developers work by leveraging AI to handle the tedious aspects of programming. This beginner's guide will help you get started with vibe coding and set up your environment for AI-assisted development.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">What is Vibe Coding?</h2>
      
      <p class="mb-4">Vibe coding is a term coined by Andrej Karpathy, referring to a programming approach where AI tools handle the heavy lifting of writing code while humans focus on providing high-level guidance and ideas. Instead of writing every line of code manually, developers describe what they want to accomplish, and AI generates the corresponding code.</p>
      
      <p class="mb-4">This approach is rapidly gaining popularity because it allows developers to:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Focus on problem-solving rather than syntax</li>
        <li>Prototype ideas quickly</li>
        <li>Learn new frameworks and languages faster</li>
        <li>Reduce boilerplate code</li>
        <li>Increase productivity dramatically</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Essential Tools for Vibe Coding</h2>
      
      <p class="mb-4">To get started with vibe coding, you'll need the right AI tools. Here are the most popular options:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Cursor</h3>
      
      <p class="mb-4">Cursor is an AI-powered code editor based on VS Code that integrates AI capabilities directly into your workflow. It allows you to generate, edit, and understand code through natural language prompts.</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-medium mb-2">Key features:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Natural language code generation</li>
          <li>Contextual code explanations</li>
          <li>Automatic code refactoring</li>
          <li>Built on VS Code's foundation</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. GitHub Copilot</h3>
      
      <p class="mb-4">GitHub Copilot is an AI pair programmer that helps you write better code faster by suggesting line completions and entire functions as you type. It integrates with popular code editors like VS Code, Neovim, and JetBrains IDEs.</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-medium mb-2">Key features:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Real-time code suggestions</li>
          <li>Multi-line function generation</li>
          <li>Works with multiple programming languages</li>
          <li>Adapts to your coding style</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with Vibe Coding</h2>
      
      <p class="mb-4">Now that you understand what vibe coding is and the tools available, let's look at how to get started:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Step 1: Choose Your Tool</h3>
      
      <p class="mb-4">Select one of the AI coding tools mentioned above. For beginners, we recommend starting with Cursor as it has a user-friendly interface and powerful features specifically designed for vibe coding.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Step 2: Set Up Your Environment</h3>
      
      <p class="mb-4">Download and install your chosen tool. Most AI coding tools have straightforward installation processes. For example, to install Cursor:</p>
      
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
        <p>// Visit cursor.sh</p>
        <p>// Download the version for your operating system</p>
        <p>// Run the installer and follow the prompts</p>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Step 3: Learn Effective Prompting</h3>
      
      <p class="mb-4">The key to successful vibe coding is learning how to communicate effectively with AI tools. Here are some tips for writing effective prompts:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Be specific about what you want the code to accomplish</li>
        <li>Mention the programming language and frameworks you're using</li>
        <li>Provide context about your project</li>
        <li>Include any specific requirements or constraints</li>
        <li>Break complex tasks into smaller, manageable requests</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Step 4: Start with Small Projects</h3>
      
      <p class="mb-4">Begin with small, well-defined projects to get comfortable with vibe coding. For example, try creating a simple to-do list application or a weather app. As you gain confidence, you can tackle more complex projects.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Common Vibe Coding Workflows</h2>
      
      <p class="mb-4">Here are some common workflows for vibe coding:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Feature Development</h3>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Describe the feature you want to implement</li>
        <li>Review and refine the generated code</li>
        <li>Test the functionality</li>
        <li>Ask the AI to fix any issues or optimize the code</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Debugging</h3>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Paste the error message and relevant code</li>
        <li>Ask the AI to identify and fix the issue</li>
        <li>Implement the suggested fix</li>
        <li>Verify that the problem is resolved</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Vibe coding represents a significant shift in how developers approach programming. By leveraging AI tools, you can focus on solving problems and building great software rather than getting caught up in syntax and implementation details.</p>
      
      <p class="mb-4">As you become more comfortable with vibe coding, you'll discover new workflows and techniques that work best for your projects. The key is to experiment, learn from your experiences, and continuously refine your approach.</p>
      
      <p class="mb-4">Ready to take your vibe coding skills to the next level? Check out our <a href="/tutorials" class="text-primary hover:underline">tutorials</a> for more advanced techniques and best practices.</p>
    `
  },
  {
    id: 'advanced-vibe-coding-techniques',
    title: '10 Advanced Vibe Coding Techniques for Experienced Developers',
    date: 'March 23, 2025',
    author: 'Alex Chen',
    image: '/images/blog-2.jpg',
    authorImage: '/images/author-avatar.jpg',
    readTime: '8 min read',
    tags: ['Advanced', 'Tips & Tricks'],
    content: `
      <p class="mb-4">Once you've mastered the basics of vibe coding, it's time to explore advanced techniques that can further enhance your productivity and code quality. This article presents 10 advanced vibe coding techniques specifically for experienced developers.</p>
      
      <p class="mb-4">These techniques will help you leverage AI tools more effectively to tackle complex problems and streamline your development workflow.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Iterative Refinement with Context</h2>
      
      <p class="mb-4">Instead of trying to get perfect code in one prompt, use an iterative approach where you build context over multiple interactions:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Start with a high-level request</li>
        <li>Review the generated code and provide specific feedback</li>
        <li>Ask for improvements or modifications based on your requirements</li>
        <li>Gradually refine until you achieve the desired result</li>
      </ol>
      
      <p class="mb-4">This approach allows the AI to better understand your needs and preferences over time, resulting in more accurate and tailored code.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Framework-Specific Prompting</h2>
      
      <p class="mb-4">Tailor your prompts to the specific frameworks and libraries you're using. For example, instead of asking for "a React component that shows a list," be more specific:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Create a React functional component using TypeScript that displays a paginated list of users. Use React Query for data fetching and styled-components for styling. Include error handling and loading states."</p>
      </div>
      
      <p class="mb-4">The more specific you are about the frameworks and patterns you're using, the more accurate and useful the generated code will be.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. System Design Through Dialog</h2>
      
      <p class="mb-4">For complex features or systems, engage in a dialog with the AI to explore different approaches before writing any code:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Describe the system or feature you want to build</li>
        <li>Ask the AI to propose different architectural approaches</li>
        <li>Discuss trade-offs and considerations for each approach</li>
        <li>Select an approach and then proceed to implementation</li>
      </ol>
      
      <p class="mb-4">This collaborative design process can help you identify potential issues and make better architectural decisions before committing to a specific implementation.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Test-Driven Vibe Coding</h2>
      
      <p class="mb-4">Combine test-driven development (TDD) with vibe coding for robust, well-tested code:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Ask the AI to write tests for a feature based on your requirements</li>
        <li>Review and refine the tests to ensure they cover all scenarios</li>
        <li>Request implementation code that passes the tests</li>
        <li>Iterate on both tests and implementation as needed</li>
      </ol>
      
      <p class="mb-4">This approach ensures that your code is not only functional but also thoroughly tested from the beginning.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Code Transformation Patterns</h2>
      
      <p class="mb-4">Use AI to transform your code from one pattern or style to another:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Transform this class-based React component into a functional component with hooks while maintaining the same functionality."</p>
      </div>
      
      <p class="mb-4">This technique is particularly useful when refactoring legacy code or adapting to new programming paradigms.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Documentation Generation</h2>
      
      <p class="mb-4">Leverage AI to automatically generate comprehensive documentation for your code:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Generate detailed JSDoc comments for this function, including parameter descriptions, return value, and usage examples."</p>
      </div>
      
      <p class="mb-4">This ensures that your code is well-documented, making it more maintainable and accessible to other developers.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Code Review Assistance</h2>
      
      <p class="mb-4">Use AI as a preliminary code reviewer before submitting your code for human review:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Review this code for potential bugs, performance issues, security vulnerabilities, and adherence to best practices. Suggest improvements where applicable."</p>
      </div>
      
      <p class="mb-4">This can help catch common issues early and improve your code quality before it goes through formal review.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Performance Optimization</h2>
      
      <p class="mb-4">Ask AI to analyze and optimize your code for performance:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"This function is causing performance issues in our application. Analyze it and suggest optimizations while maintaining the same functionality."</p>
      </div>
      
      <p class="mb-4">AI can often identify inefficient algorithms, unnecessary re-renders, or resource-intensive operations that might be slowing down your application.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Cross-Platform Adaptation</h2>
      
      <p class="mb-4">Use AI to adapt your code for different platforms or environments:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Convert this React web component to a React Native component that provides the same functionality on mobile devices."</p>
      </div>
      
      <p class="mb-4">This can significantly reduce the effort required to maintain multiple versions of your application for different platforms.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. API Integration Acceleration</h2>
      
      <p class="mb-4">Streamline the process of integrating with third-party APIs:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-mono">"Create a service module in TypeScript that integrates with the Stripe API for payment processing. Include functions for creating customers, processing payments, and handling subscriptions."</p>
      </div>
      
      <p class="mb-4">AI can quickly generate boilerplate code for API integrations, saving you time and effort in reading documentation and implementing standard patterns.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">These advanced vibe coding techniques can significantly enhance your productivity and code quality when working with AI coding tools. As you incorporate these techniques into your workflow, you'll find that you can tackle more complex problems and deliver higher-quality solutions in less time.</p>
      
      <p class="mb-4">Remember that vibe coding is not about replacing your skills as a developer but augmenting them. The most effective approach combines your expertise and judgment with the AI's ability to generate and transform code quickly.</p>
      
      <p class="mb-4">As AI coding tools continue to evolve, staying up-to-date with the latest techniques and best practices will help you maintain your competitive edge as a developer.</p>
    `
  },
  // More blog posts can be added here
];

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the current blog post based on the ID from the URL
  const post = blogPosts.find(post => post.id === id);
  
  // If the post is not found or the page is still loading, show a loading state
  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">Loading article...</p>
        </div>
      </Layout>
    );
  }
  
  // Sample related posts - in a real app, these would be dynamically generated
  const relatedPosts = blogPosts
    .filter(p => p.id !== id)
    .filter(p => p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center mt-6">
            <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
            <span className="mr-4">{post.author}</span>
            <span className="mr-4">·</span>
            <span className="mr-4">{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-lg" />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <div className="flex items-start">
              <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-lg mb-2">{post.author}</h3>
                <p className="text-gray-600">
                  An experienced developer and educator passionate about AI-assisted coding and making programming more accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advertisement */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner type="horizontal" className="mx-auto" />
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`} className="mt-3 text-primary font-medium hover:underline inline-block">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Comment Section Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Comments</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500 text-center py-8">
              Comments are coming soon! We're working on implementing a comment system to facilitate discussion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Next/Previous Article Navigation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between border-t pt-8">
            <Link href="/blog" className="mb-4 sm:mb-0 text-primary hover:text-primary/80 font-medium">
              ← Back to All Articles
            </Link>
            <div className="flex space-x-4">
              <button className="text-primary hover:text-primary/80 font-medium disabled:text-gray-400 disabled:cursor-not-allowed">
                ← Previous Article
              </button>
              <button className="text-primary hover:text-primary/80 font-medium">
                Next Article →
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 