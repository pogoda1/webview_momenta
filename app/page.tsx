'use client'
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";
import bridge from '@vkontakte/vk-bridge';
import Script from "next/script";
bridge.send('VKWebAppInit');

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      tg.ready();
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />

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
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100 border-b-2 border-blue-600 pb-1 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pb-24 md:pb-0">
        <div className="w-full max-w-3xl px-4 sm:px-16 py-12 md:py-32">
          <div className="flex flex-col items-center justify-between gap-8 sm:items-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Welcome to Our Platform
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Discover amazing content and insights. Start your journey with our{" "}
                <Link
                  href="/blog"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  blog
                </Link>
                {" "}or explore the{" "}
                <a
                  href="https://nextjs.org/learn"
                  className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base font-medium w-full sm:flex-row">
              <Link
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="/blog"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View Blog
              </Link>
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Documentation
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Tab Bar for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-black shadow-[0_-2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around h-20 px-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1.5 px-6 py-2 active:scale-95 transition-transform"
          >
            <div className="relative">
              {/* Filled icon for active state */}
              <svg
                className="w-7 h-7 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              {/* Active indicator dot */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Home</span>
          </Link>
          <Link
            href="/blog"
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Blog</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
