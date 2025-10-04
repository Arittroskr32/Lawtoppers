import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LinkedinIcon, TwitterIcon, GlobeIcon } from 'lucide-react';
export const MentorsSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const mentors = [{
    id: 1,
    name: 'Dr. Kamal Ahmed',
    position: 'Former Supreme Court Judge',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    specialization: 'Constitutional Law'
  }, {
    id: 2,
    name: 'Advocate Nusrat Khan',
    position: 'Senior Lawyer, High Court',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    specialization: 'Criminal Law'
  }, {
    id: 3,
    name: 'Prof. Rashid Chowdhury',
    position: 'Law Professor, Dhaka University',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    specialization: 'International Law'
  }, {
    id: 4,
    name: 'Barrister Samira Rahman',
    position: 'Corporate Law Specialist',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    specialization: 'Corporate Law'
  }];
  return <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          {t('mentors.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => <div key={mentor.id} className="relative group animate-fadeIn" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img src={mentor.image} alt={mentor.name} className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              </div>
              <div className="relative bg-white dark:bg-slate-900 mx-4 -mt-12 p-4 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="absolute -right-2 -top-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center animate-pulse-glow">
                  {mentor.specialization}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {mentor.position}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <GlobeIcon className="w-4 h-4" />
                  </a>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};