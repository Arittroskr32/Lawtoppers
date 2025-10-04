import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BriefcaseIcon, BookmarkIcon, TargetIcon, AwardIcon } from 'lucide-react';
export const JobPreparationSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const jobResources = [{
    id: 1,
    title: 'Judicial Service Preparation',
    description: 'Complete preparation for Bangladesh Judicial Service Examination',
    icon: <BriefcaseIcon className="w-10 h-10 text-purple-500 group-hover:text-white transition-colors duration-300" />,
    color: 'from-purple-500 to-pink-500',
    delay: 100
  }, {
    id: 2,
    title: 'Bar Council Examination',
    description: 'Comprehensive materials for Bar Council Enrollment Examination',
    icon: <BookmarkIcon className="w-10 h-10 text-indigo-500 group-hover:text-white transition-colors duration-300" />,
    color: 'from-indigo-500 to-violet-500',
    delay: 200
  }, {
    id: 3,
    title: 'Legal Advisor Jobs',
    description: 'Preparation for corporate legal advisor positions',
    icon: <TargetIcon className="w-10 h-10 text-teal-500 group-hover:text-white transition-colors duration-300" />,
    color: 'from-teal-500 to-emerald-500',
    delay: 300
  }, {
    id: 4,
    title: 'Mock Interviews',
    description: 'Practice with experienced professionals from the legal field',
    icon: <AwardIcon className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" />,
    color: 'from-amber-500 to-orange-500',
    delay: 400
  }];
  return <section id="job" className="relative py-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-indigo-900/90 z-10"></div>
        <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Career background" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          {t('job.title')}
        </h2>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
          {t('job.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobResources.map(item => <div key={item.id} className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-white/10 hover:-translate-y-2 transform animate-fadeIn flex flex-col h-full" style={{
          animationDelay: `${item.delay}ms`
        }}>
              {/* Hover overlay with animated gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-0`}></div>
              {/* Content with animated transitions */}
              <div className="p-6 relative z-10 flex flex-col flex-grow">
                <div className="mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300 relative">
                  {item.title}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </h3>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors duration-300 flex-grow">
                  {item.description}
                </p>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-white/20 text-white rounded-lg group-hover:bg-white group-hover:text-gray-800 transition-all duration-300 overflow-hidden relative w-full">
                    <span className="relative z-10">Explore</span>
                    <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 -z-0"></div>
                  </button>
                </div>
              </div>
              {/* Decorative elements with animations */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>
              {/* Animated shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
              {/* Particle effects on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(5)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}></div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};