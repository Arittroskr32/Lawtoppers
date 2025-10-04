import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { UserCheckIcon, BookIcon, HeadphonesIcon, UsersIcon, PlayIcon, CheckCircleIcon, AwardIcon, TrendingUpIcon, ChevronRightIcon, StarIcon, ShieldCheckIcon, GraduationCapIcon } from 'lucide-react';
export const WhyBestSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  // Intersection Observer for scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const features = [{
    id: 1,
    title: t('why.expert'),
    description: 'Learn from experienced judges, lawyers, and legal scholars',
    icon: <UserCheckIcon className="w-10 h-10" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    gradientFrom: 'from-blue-600/20',
    gradientTo: 'to-blue-400/20',
    delay: 100,
    stats: [{
      icon: <CheckCircleIcon />,
      text: '50+ Expert Mentors'
    }, {
      icon: <AwardIcon />,
      text: 'Top Rated'
    }]
  }, {
    id: 2,
    title: t('why.content'),
    description: 'Up-to-date course materials and case studies',
    icon: <BookIcon className="w-10 h-10" />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    gradientFrom: 'from-purple-600/20',
    gradientTo: 'to-purple-400/20',
    delay: 200,
    stats: [{
      icon: <CheckCircleIcon />,
      text: 'Weekly Updates'
    }, {
      icon: <AwardIcon />,
      text: 'Comprehensive'
    }]
  }, {
    id: 3,
    title: t('why.support'),
    description: 'Round-the-clock assistance for all your queries',
    icon: <HeadphonesIcon className="w-10 h-10" />,
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    gradientFrom: 'from-green-600/20',
    gradientTo: 'to-green-400/20',
    delay: 300,
    stats: [{
      icon: <CheckCircleIcon />,
      text: '24/7 Support'
    }, {
      icon: <AwardIcon />,
      text: 'Quick Response'
    }]
  }, {
    id: 4,
    title: t('why.community'),
    description: 'Join a network of aspiring and practicing legal professionals',
    icon: <UsersIcon className="w-10 h-10" />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
    gradientFrom: 'from-amber-600/20',
    gradientTo: 'to-amber-400/20',
    delay: 400,
    stats: [{
      icon: <CheckCircleIcon />,
      text: '15,000+ Members'
    }, {
      icon: <AwardIcon />,
      text: 'Active Community'
    }]
  }];
  const testimonials = ['LAWTOPPERS helped me clear my judicial exams in the first attempt!', 'The mentors at LAWTOPPERS are truly exceptional and supportive.', 'The structured curriculum made complex legal concepts easy to understand.'];
  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, this would play an actual video
    // For now, we'll just toggle the play state for UI demonstration
  };
  return <section className="py-16 bg-gray-50 dark:bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {t('why.title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Feature Cards */}
          <div className="space-y-6 h-full flex flex-col justify-between">
            {features.map(feature => <div key={feature.id} className={`flex gap-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md transition-all duration-300 group hover:shadow-lg border border-transparent hover:border-${feature.color.split(' ')[0]}/30 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{
            transitionDelay: `${feature.delay}ms`
          }} onMouseEnter={() => setHoveredFeature(feature.id)} onMouseLeave={() => setHoveredFeature(null)}>
                {/* Subtle background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out -z-10 rounded-xl ${feature.gradientFrom} ${feature.gradientTo}`}></div>
                <div className={`${feature.bgColor} ${feature.color} p-4 rounded-xl self-start transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
                  {feature.icon}
                  {/* Subtle shine effect on hover */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {feature.description}
                  </p>
                  {/* Additional stats that appear on hover with smoother animation */}
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden" style={{
                transitionDelay: hoveredFeature === feature.id ? '100ms' : '0ms'
              }}>
                    {feature.stats.map((stat, idx) => <div key={idx} className="flex items-center">
                        <div className={`w-5 h-5 mr-2 ${feature.color}`}>
                          {stat.icon}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                          {stat.text}
                        </span>
                      </div>)}
                  </div>
                </div>
              </div>)}
          </div>
          {/* Right Column - Video Section */}
          <div className={`transform transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg h-full flex flex-col hover:shadow-xl transition-all duration-300">
              {/* Video Header with more professional design */}
              <div className="bg-gradient-to-r from-slate-800 to-indigo-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center">
                      Our Methodology
                      <StarIcon className="w-5 h-5 ml-2 text-yellow-400" />
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Learn how we prepare students for success
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-full p-2">
                    <AwardIcon className="w-6 h-6 text-indigo-300" />
                  </div>
                </div>
              </div>
              {/* Video Player with enhanced professional look */}
              <div ref={videoRef} className="relative h-72 bg-gray-900 overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Video thumbnail" className={`w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'opacity-50 scale-105' : 'opacity-90 group-hover:scale-105'}`} />
                {/* Enhanced play button overlay */}
                {!isPlaying && <button onClick={handlePlayVideo} className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-indigo-900/50 transition-all duration-300 hover:scale-110 group">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-indigo-700 transition-all duration-300 group-hover:scale-105">
                        <PlayIcon className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div className="absolute -inset-1 border-2 border-white/30 rounded-full animate-ping opacity-70"></div>
                    </div>
                  </button>}
                {/* Video is playing state */}
                {isPlaying && <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <div className="text-center px-8 animate-fadeIn">
                      <h4 className="text-xl font-bold text-white mb-4">
                        Our Teaching Approach
                      </h4>
                      <p className="text-white/90 mb-6">
                        At LAWTOPPERS, we combine theoretical knowledge with
                        practical applications through case studies, mock
                        trials, and interactive sessions led by experienced
                        legal professionals.
                      </p>
                      <div className="inline-flex items-center text-indigo-300 hover:text-indigo-200 transition-colors duration-300 group">
                        <span className="font-medium">
                          Learn more about our methodology
                        </span>
                        <ChevronRightIcon className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>}
                {/* Video hover overlay with quick stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 pointer-events-none">
                  <div className="flex gap-4">
                    <div className="flex items-center text-white">
                      <GraduationCapIcon className="w-5 h-5 mr-2 text-indigo-400" />
                      <span>200+ Lessons</span>
                    </div>
                    <div className="flex items-center text-white">
                      <ShieldCheckIcon className="w-5 h-5 mr-2 text-indigo-400" />
                      <span>Quality Assured</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Success metrics with enhanced design */}
              <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 flex-grow">
                <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <TrendingUpIcon className="w-6 h-6 text-indigo-500 mr-3" />
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    Our Success Metrics
                  </h4>
                </div>
                {/* Stats with improved visual hierarchy */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      95%
                    </div>
                    <div className="text-xs font-medium text-blue-800 dark:text-blue-300 mt-1 group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-300">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      15K+
                    </div>
                    <div className="text-xs font-medium text-purple-800 dark:text-purple-300 mt-1 group-hover:text-purple-900 dark:group-hover:text-purple-200 transition-colors duration-300">
                      Students
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      4.9/5
                    </div>
                    <div className="text-xs font-medium text-emerald-800 dark:text-emerald-300 mt-1 group-hover:text-emerald-900 dark:group-hover:text-emerald-200 transition-colors duration-300">
                      Rating
                    </div>
                  </div>
                </div>
                {/* Testimonial with improved design */}
                <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-lg relative overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                  <p className="text-gray-700 dark:text-gray-300 italic text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    "{testimonials[0]}"
                  </p>
                  <p className="text-right text-xs text-gray-500 dark:text-gray-400 mt-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    — Recent Graduate, Class of 2023
                  </p>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine"></div>
                  {/* Quote marks */}
                  <div className="absolute top-1 right-2 text-4xl text-indigo-300/30 dark:text-indigo-700/30 font-serif leading-none opacity-60">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};