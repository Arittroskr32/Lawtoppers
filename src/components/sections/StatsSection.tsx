import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Users2Icon, BookOpenIcon, GraduationCapIcon, TrendingUpIcon } from 'lucide-react';
export const StatsSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const stats = [{
    value: '10,000+',
    label: t('stats.students'),
    icon: <Users2Icon className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
  }, {
    value: '50+',
    label: t('stats.courses'),
    icon: <BookOpenIcon className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
  }, {
    value: '25+',
    label: t('stats.mentors'),
    icon: <GraduationCapIcon className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
  }, {
    value: '95%',
    label: t('stats.success'),
    icon: <TrendingUpIcon className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
  }];
  return <section className="relative py-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/95 to-gray-100/95 dark:from-slate-900/95 dark:to-slate-800/95 z-10"></div>
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law statistics background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <div key={index} className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100/50 dark:border-gray-800/50 hover:border-indigo-300 dark:hover:border-indigo-700">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="flex items-center justify-between mb-4">
                <div>{stat.icon}</div>
                <span className="text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/90 transition-colors duration-300">
                {stat.label}
              </p>
              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>)}
        </div>
      </div>
    </section>;
};