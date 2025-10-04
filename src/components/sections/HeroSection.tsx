import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRightIcon } from 'lucide-react';
import { Users2Icon, BookOpenIcon, GraduationCapIcon, TrendingUpIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// CountUp component for animating numbers
const CountUp = ({
  end,
  duration = 2000
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  return <>{count.toLocaleString()}</>;
};
export const HeroSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Trigger animations after a short delay for better visual effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const stats = [{
    value: 10000,
    label: t('stats.students'),
    icon: <Users2Icon className="w-7 h-7" />,
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'border-blue-400 dark:border-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-500 dark:text-blue-400',
    glowColor: 'bg-blue-500/30',
    hoverGradient: 'bg-gradient-to-br from-blue-500 to-cyan-400'
  }, {
    value: 50,
    label: t('stats.courses'),
    icon: <BookOpenIcon className="w-7 h-7" />,
    color: 'from-violet-500 to-fuchsia-400',
    borderColor: 'border-violet-400 dark:border-violet-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-500 dark:text-violet-400',
    glowColor: 'bg-violet-500/30',
    hoverGradient: 'bg-gradient-to-br from-violet-500 to-fuchsia-400'
  }, {
    value: 25,
    label: t('stats.mentors'),
    icon: <GraduationCapIcon className="w-7 h-7" />,
    color: 'from-emerald-500 to-teal-400',
    borderColor: 'border-emerald-400 dark:border-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    glowColor: 'bg-emerald-500/30',
    hoverGradient: 'bg-gradient-to-br from-emerald-500 to-teal-400'
  }, {
    value: 95,
    label: t('stats.success'),
    icon: <TrendingUpIcon className="w-7 h-7" />,
    color: 'from-amber-500 to-orange-400',
    borderColor: 'border-amber-400 dark:border-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-500 dark:text-amber-400',
    glowColor: 'bg-amber-500/30',
    hoverGradient: 'bg-gradient-to-br from-amber-500 to-orange-400',
    isPercentage: true
  }];
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/80 dark:from-[#0A2342]/90 dark:to-[#0A2342]/80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law background" className="w-full h-full object-cover" />
      </div>
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 py-20 text-center">
        <div className={`max-w-3xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Primary CTA - Free Exam Campaign */}
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-[#CFAF61] dark:to-[#B79A46] text-white font-medium rounded-md hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-[#CFAF61]/30 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
              <span className="relative z-10">Free Exam Campaign</span>
              <ArrowRightIcon className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 dark:from-[#CFAF61]/80 dark:to-[#B79A46]/80 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 -z-5"></span>
            </button>
            <button
              className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-md border border-indigo-200 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
              onClick={() => navigate('/course/preview')}
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="container mx-auto px-4 relative z-20 pb-12 mt-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {stats.map((stat, index) => <div key={index} className={`group relative bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-${stat.borderColor.split(' ')[0]} dark:hover:border-[#CFAF61]/30 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-${stat.iconColor.split(' ')[0]}/20 dark:hover:shadow-[#CFAF61]/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{
          animationDelay: `${index * 150 + 300}ms`
        }}>
              {/* Hover gradient overlay with pulse effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
                <div className={`absolute inset-0 ${stat.hoverGradient} dark:bg-gradient-to-br dark:from-[#CFAF61]/30 dark:to-[#CFAF61]/10 opacity-80 group-hover:animate-pulse`}></div>
              </div>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6`}>
                  <div className={`${stat.iconColor} dark:text-[#CFAF61] group-hover:text-white transition-colors duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="ml-4 text-3xl font-bold text-white flex items-center">
                  <CountUp end={stat.value} />
                  {stat.isPercentage ? <span className="text-white/90 group-hover:animate-pulse">
                      %
                    </span> : stat.value >= 1000 && <span className="text-white/90 group-hover:animate-pulse">
                        +
                      </span>}
                </div>
              </div>
              <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </h3>
              {/* Enhanced decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 transition-all duration-500 transform rotate-45 group-hover:scale-125"></div>
              {/* Enhanced shine effect on hover */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
              {/* Glow effect on hover */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${stat.glowColor} dark:bg-[#CFAF61]/30 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500`}></div>
              {/* Particle effect on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(5)].map((_, i) => <div key={i} className="absolute w-1.5 h-1.5 bg-white rounded-full animate-float" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}></div>)}
              </div>
            </div>)}
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-[#CFAF61]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/10 dark:bg-[#CFAF61]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 dark:bg-[#CFAF61]/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </section>;
};