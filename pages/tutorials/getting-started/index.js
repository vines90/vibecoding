import Layout from '../../../components/Layout';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium mr-4">
              Beginner
            </span>
            <span className="mr-4">30 min</span>
            <span>Published: March 25, 2025</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">Getting Started with Vibe Coding</h1>
          <p className="text-xl text-gray-600">
            Learn the fundamentals of vibe coding and set up your environment for AI-assisted development.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>What is Vibe Coding?</h2>
          <p>
            Vibe coding is a term coined by AI expert Andrej Karpathy to describe a new approach to software development 
            where AI tools handle the heavy lifting of writing code while you focus on providing high-level guidance and ideas.
            It's a paradigm shift from traditional coding - instead of typing out every line of code yourself, you communicate 
            what you want in natural language, and the AI generates the code for you.
          </p>
          
          <blockquote>
            "The hottest new programming language is English." - Andrej Karpathy
          </blockquote>

          <p>
            This tutorial will walk you through setting up your environment for vibe coding and teach you the basics of this 
            new approach to programming.
          </p>

          <h2>Prerequisites</h2>
          <p>Before you begin, you'll need:</p>
          <ul>
            <li>A computer with internet access</li>
            <li>Basic understanding of what you want to create (no programming experience required!)</li>
            <li>Openness to a new way of thinking about coding</li>
          </ul>

          <h2>Step 1: Choose Your Vibe Coding Tool</h2>
          <p>
            There are several excellent tools for vibe coding, but we recommend starting with one of these:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cursor</h3>
              <p className="mb-4">
                An AI-powered code editor based on VS Code. It integrates AI directly into your workflow through 
                a sidebar chat called Composer.
              </p>
              <a 
                href="https://cursor.sh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Download Cursor →
              </a>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">ChatGPT</h3>
              <p className="mb-4">
                OpenAI's conversational AI can generate code from your descriptions. Great for beginners who 
                want a simple web interface.
              </p>
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Try ChatGPT →
              </a>
            </div>
          </div>

          <p>
            For this tutorial, we'll use <strong>Cursor</strong> because it provides a complete development environment 
            and has features specifically designed for vibe coding.
          </p>

          <h2>Step 2: Install and Set Up Cursor</h2>
          <ol>
            <li>Visit <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a> and download the installer for your operating system.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Launch Cursor once installation is complete.</li>
            <li>Sign in with your GitHub account or create a new account.</li>
            <li>You'll see a familiar VS Code interface with an additional AI Composer panel.</li>
          </ol>

          <p>
            After installation, open the AI Composer panel by clicking the "Composer" icon in the sidebar or pressing 
            <code>Ctrl+Shift+L</code> (or <code>Cmd+Shift+L</code> on Mac).
          </p>

          <h2>Step 3: Your First Vibe Coding Session</h2>
          <p>
            Let's create a simple web page using vibe coding. Here's how you can do it in Cursor:
          </p>

          <ol>
            <li>Create a new folder on your computer for this project.</li>
            <li>Open this folder in Cursor using File → Open Folder.</li>
            <li>Open the Composer panel.</li>
            <li>
              Type the following prompt: <code>Create a simple web page with a heading, a paragraph about vibe coding, and a button that shows an alert when clicked.</code>
            </li>
            <li>
              Wait for Cursor's AI to respond. It will generate HTML, CSS, and JavaScript code for you.
            </li>
            <li>
              Review the code, and click "Accept" to apply the changes to your project.
            </li>
          </ol>

          <p>
            You've just created your first web page using vibe coding! Open the HTML file in your browser to see the result.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-2">Example: Vibe Coding in Action</h3>
            <p className="mb-4"><strong>You ask the AI:</strong></p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
              "Create a function that calculates the factorial of a number."
            </pre>
            <p className="mb-4"><strong>AI generates:</strong></p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
{`function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case
  return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Outputs: 120`}
            </pre>
          </div>

          <h2>Step 4: Refining Your Results</h2>
          <p>
            The first result might not be exactly what you want. That's where the iterative nature of vibe coding shines.
            You can refine your results by giving more specific instructions or asking for changes:
          </p>

          <ul>
            <li>
              <strong>Be specific:</strong> Instead of "make it better," say "change the background color to light blue and increase the font size of the heading."
            </li>
            <li>
              <strong>Ask questions:</strong> If you don't understand some part of the generated code, ask "What does this line do?"
            </li>
            <li>
              <strong>Request modifications:</strong> You can say "Add a footer with copyright information" or "Change the button to be rounded with a green background."
            </li>
          </ul>

          <p>
            Remember, vibe coding is a conversation between you and the AI. The more clearly you communicate, the better the results you'll get.
          </p>

          <h2>Best Practices for Vibe Coding</h2>
          <ul>
            <li>
              <strong>Start small:</strong> Begin with simple projects and gradually increase complexity as you get comfortable.
            </li>
            <li>
              <strong>Be specific in your prompts:</strong> Clearly describe what you want, including design details, functionality, and behavior.
            </li>
            <li>
              <strong>Test frequently:</strong> Run the code after each significant change to catch issues early.
            </li>
            <li>
              <strong>Learn from the AI:</strong> Ask the AI to explain the code it generates to improve your understanding.
            </li>
            <li>
              <strong>Iterate:</strong> Vibe coding is rarely perfect on the first try. Refine your prompts based on initial results.
            </li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            Now that you've learned the basics of vibe coding, you're ready to explore more advanced topics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Link href="/tutorials/prompt-engineering" className="border rounded-lg p-4 hover:bg-gray-50 block">
              <h3 className="text-lg font-semibold mb-2">Effective Prompt Engineering for Coding</h3>
              <p className="text-gray-600">
                Learn how to write better prompts that get the exact code you want.
              </p>
            </Link>
            
            <Link href="/tutorials/cursor-ai" className="border rounded-lg p-4 hover:bg-gray-50 block">
              <h3 className="text-lg font-semibold mb-2">Mastering Cursor for Vibe Coding</h3>
              <p className="text-gray-600">
                Dive deeper into Cursor's advanced features for AI-assisted development.
              </p>
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            Vibe coding represents a fundamental shift in how we approach software development. By letting AI handle the 
            syntax and implementation details, you can focus on the creative aspects of programming and solve problems 
            at a higher level.
          </p>
          <p>
            Remember, the key to successful vibe coding is clear communication with the AI. Be specific, iterate on your 
            prompts, and don't be afraid to experiment.
          </p>
          <p>
            Happy vibe coding!
          </p>
        </div>

        {/* Author */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex items-center">
            <img 
              src="/images/author-avatar.jpg" 
              alt="Author" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold mb-1">Written by VibeCoding Team</h3>
              <p className="text-gray-600">
                Helping developers and non-developers alike harness the power of AI for coding.
              </p>
            </div>
          </div>
        </div>

        {/* Next/Prev Navigation */}
        <div className="mt-12 flex justify-between">
          <div></div>
          <Link href="/tutorials/prompt-engineering" className="text-primary hover:text-primary/80 font-medium">
            Next: Effective Prompt Engineering →
          </Link>
        </div>
      </article>
    </Layout>
  );
} 