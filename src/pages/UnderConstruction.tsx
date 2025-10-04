import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ConstructionIcon } from 'lucide-react';
interface UnderConstructionProps {
  pageName: string;
}
const UnderConstruction: React.FC<UnderConstructionProps> = ({
  pageName
}) => {
  return <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl flex flex-col items-center justify-center text-center">
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-8 border border-gray-100 dark:border-gray-700 w-full">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-6 rounded-lg mb-6 inline-flex">
              <ConstructionIcon className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              {pageName} Page
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're working hard to bring you an amazing experience. This page
              is currently under construction and will be available soon.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-2.5 rounded-full w-2/3 animate-pulse"></div>
            </div>
            <a href="/" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-700 text-white font-medium rounded-md hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 inline-block">
              Return to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default UnderConstruction;