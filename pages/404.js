import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-xl">
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/tutorials"
            className="bg-white border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Browse Tutorials
          </Link>
        </div>
        
        <div className="mt-16">
          <p className="text-gray-500">
            Looking for something specific? Try using the search function in the header.
          </p>
        </div>
      </div>
    </Layout>
  );
} 