// import { Inter } from 'next/font/google';
// import Link from 'next/link';
// import Image from 'next/image';
// import './globals.css';
// import { AspectRatio } from "@/components/ui/aspect-ratio"
// import { ReactNode } from 'react';
// import Iphone15Pro from '@/components/magicui/iphone-15-pro';
// import { Reviews } from '@/components/Reviews';
// import { Marquee } from '@/components/magicui/marquee';
// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
// } from "@radix-ui/react-icons";

// import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
// import WorkflowSection from '@/components/TasksFlow';

// const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//   title: 'Mexete.io | Track Your Productivity & Fitness',
//   description: 'Track your to-dos and workouts, build streaks, and gain insights with analytics.',
// };


// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="min-h-screen flex flex-col bg-slate-50">
//           {/* Header */}
//           <header className="bg-white shadow-sm">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between h-14">
//                 <div className="flex items-center">
//                   {/* Logo */}
//                   <div className="flex-shrink-0 flex items-center">
//                     <Link href="/">
//                       {/* <span className="text-xl font-bold text-black">mexete.io</span> */}
//                       <Image alt='Logo' src="/logo_hq2.png" width={50} height={50} />
//                     </Link>
//                   </div>

//                   {/* Desktop Navigation - Minimal style like Things app */}
//                   <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                     <Link href="/" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                       Today
//                     </Link>
//                     <Link href="/upcoming" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                       Upcoming
//                     </Link>
//                     <Link href="/analytics" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                       Pricing
//                     </Link>
//                     <Link href="/workouts" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                       Blog
//                     </Link>
//                   </nav>
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="flex items-center sm:hidden">
//                   <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </header>

//           {/* Main content */}
//           <main className="flex-grow">
//             <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
//               <div className="flex flex-col md:flex-row items-center">
//                 {/* Left side - Text content */}
//                 <div className="md:w-1/2 space-y-6 mb-40">
//                   {/* Main headline - larger text */}
//                   <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//                     An easy and simple overview of your life
//                   </h1>

//                   {/* Three feature points */}
//                   <div className="space-y-3">
//                     <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Organize & Prioritize 🧠</h2>
//                     <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Track Key Metrics 🔑</h2>
//                     <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Keep momentum & Improve Consistency ⌛️</h2>
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex flex-col sm:flex-row gap-4 pt-3">
//                     <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors">
//                       Try free for 14 days
//                     </button>
//                     <button className="px-6 py-3 bg-white text-orange-500 font-medium rounded-lg border border-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors">
//                       See Plans
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right side - iPhone mockup */}
//                 <div className="md:w-1/2 relative" >
//                   <Iphone15Pro src="/Principal.png" className=" size-200" />
//                 </div>
//               </div>
//               <WorkflowSection/>
//               {/* REVIEWS */}
//               <div className="mt-20">
//                 <div className="mt-20">
//                   <h1 className="text-4xl md:text-1xl font-bold text-gray-900">
//                     What People Are Saying
//                   </h1>
//                   <h3 className="text-2xl md:text-xl font-bold text-gray-900">
//                     A simpler tool for those who just want to be on top of their goals.
//                   </h3>
//                   <Reviews />
//                   <div className="flex justify-center items-center space-x-4">
//                     <Link href={"/"}>
//                       <Image src="/instagram.jpg" alt="Instagram logo" width={30} height={30} />
//                     </Link>
//                     <Link href={"/"}>
//                       <Image src="/tiktok.svg" alt="TikTok logo" width={70} height={70} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>

//           {/* Footer - Minimal footer like Things app */}
//           <footer className="bg-white">
//             <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
//               <div className="text-center text-xs text-gray-400">
//                 &copy; {new Date().getFullYear()} mexete.io. All rights reserved.
//               </div>
//             </div>
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ReactNode } from 'react';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';
import { Reviews } from '@/components/Reviews';
import { Marquee } from '@/components/magicui/marquee';
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import WorkflowSection from '@/components/TasksFlow';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Mexete.io | Track Your Productivity & Fitness',
  description: 'Track your to-dos and workouts, build streaks, and gain insights with analytics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-slate-50">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-14">
                <div className="flex items-center">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <Image alt='Logo' src="/logo_hq2.png" width={50} height={50} />
                    </Link>
                  </div>

                  {/* Desktop Navigation - Minimal style like Things app */}
                  <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* <Link href="/" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Today
                    </Link> */}
                    <Link href="/upcoming" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Upcoming
                    </Link>
                    <Link href="/analytics" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Pricing
                    </Link>
                    <Link href="/workouts" className="text-gray-700 hover:text-orange-400 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Blog
                    </Link>
                  </nav>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-grow mt-20">
            <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center">
                {/* Centered Text content */}
                <div className="text-center max-w-2xl mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    An easy and simple overview of your life
                  </h1>

                  {/* Centered feature points */}
                  <div className="space-y-3 mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Organize & Prioritize 🧠</h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Track Key Metrics 🔑</h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Keep momentum & Improve Consistency ⌛️</h2>
                  </div>

                  {/* Centered Action buttons */}
                  <div className="flex justify-center gap-4 pt-3">
                    <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors">
                      Try free for 14 days
                    </button>
                    <button className="px-6 py-3 bg-white text-orange-500 font-medium rounded-lg border border-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors">
                      See Plans
                    </button>
                  </div>
                </div>

                {/* Centered iPhone mockup */}
                <div className="mb-12">
                  <Iphone15Pro src="/Principal.png" className="size-200" />
                </div>

                <WorkflowSection/>

                {/* REVIEWS */}
                <div className="mt-20 text-center">
                  <h1 className="text-4xl md:text-1xl font-bold text-gray-900">
                    What People Are Saying
                  </h1>
                  <h3 className="text-2xl md:text-xl font-bold text-gray-900 mb-8">
                    A simpler tool for those who just want to be on top of their goals.
                  </h3>
                  <Reviews />
                  <div className="flex justify-center items-center space-x-4 mt-8">
                    <Link href={"/"}>
                      <Image src="/instagram.jpg" alt="Instagram logo" width={30} height={30} />
                    </Link>
                    <Link href={"/"}>
                      <Image src="/tiktok.svg" alt="TikTok logo" width={70} height={70} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer - Minimal footer like Things app */}
          <footer className="bg-white">
            <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
              <div className="text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} mexete.io. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}