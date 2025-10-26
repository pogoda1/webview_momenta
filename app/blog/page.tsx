import Image from "next/image";
import Link from "next/link";

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
}

// Mock blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introduction to Next.js 16",
    excerpt: "Learn the new features and improvements in Next.js 16, including the latest React features and performance optimizations.",
    date: "January 15, 2025",
    author: "Alex Johnson",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Building Modern Web Applications",
    excerpt: "Discover the best practices for creating scalable and maintainable web applications with modern frameworks and tools.",
    date: "January 10, 2025",
    author: "Sarah Chen",
    category: "Development",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "The Future of React Development",
    excerpt: "Exploring the latest trends in React development and how they're shaping the future of frontend engineering.",
    date: "January 5, 2025",
    author: "Michael Brown",
    category: "React",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "CSS-in-JS vs Utility CSS",
    excerpt: "A comprehensive comparison between CSS-in-JS solutions and utility-first CSS frameworks like Tailwind.",
    date: "December 28, 2024",
    author: "Emily Davis",
    category: "CSS",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "TypeScript Best Practices",
    excerpt: "Master TypeScript with these essential tips and best practices for building robust type-safe applications.",
    date: "December 20, 2024",
    author: "David Lee",
    category: "TypeScript",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "Optimizing Performance in React",
    excerpt: "Learn advanced techniques for optimizing React applications, from memoization to code splitting and lazy loading.",
    date: "December 15, 2024",
    author: "Lisa Wang",
    category: "React",
    readTime: "10 min read",
  },
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex flex-col bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-20">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {post.readTime}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {post.author}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {post.date}
              </span>
            </div>
          </div>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pb-24 md:pb-0">
      {/* Header for Desktop */}
      <header className="hidden md:block sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Logo"
                width={100}
                height={20}
              />
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100 border-b-2 border-blue-600 pb-1 transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Discover the latest insights, tutorials, and updates from our team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Bottom Tab Bar for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-black shadow-[0_-2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around h-20 px-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1.5 px-6 py-2 active:scale-95 transition-transform"
          >
            {/* Outline icon for inactive state */}
            <svg
              className="w-7 h-7 text-zinc-500 dark:text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Home</span>
          </Link>
          <Link
            href="/blog"
            className="flex flex-col items-center justify-center gap-1.5 px-6 py-2 active:scale-95 transition-transform"
          >
            <div className="relative">
              {/* Filled icon for active state */}
              <svg
                className="w-7 h-7 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              {/* Active indicator dot */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Blog</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
