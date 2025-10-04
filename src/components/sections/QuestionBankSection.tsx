import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, FilterIcon, BookOpenIcon, FileTextIcon, BookmarkIcon, DownloadIcon, ExternalLinkIcon, CheckCircleIcon, StarIcon, TagIcon, CalendarIcon, LayoutGridIcon, ListIcon, ArrowRightIcon } from 'lucide-react';
export const QuestionBankSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [transitionState, setTransitionState] = useState<'idle' | 'exit' | 'enter' | 'sliding'>('idle');
  const [pendingFilter, setPendingFilter] = useState<string | null>(null);
  const [pendingViewMode, setPendingViewMode] = useState<'grid' | 'list' | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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
  // Handle filter change with smoother transition
  const handleFilterChange = (filterId: string) => {
    if (filterId !== activeFilter && !animating && transitionState === 'idle') {
      setAnimating(true);
      setTransitionState('exit');
      setPendingFilter(filterId);
    }
  };
  // Handle view mode change with smoother transition
  const handleViewModeChange = (mode: 'grid' | 'list') => {
    if (mode !== viewMode && !animating && transitionState === 'idle') {
      setAnimating(true);
      setTransitionState('sliding');
      setPendingViewMode(mode);
    }
  };
  // Handle transition phases
  useEffect(() => {
    if (transitionState === 'exit') {
      // After exit animation completes
      const timer = setTimeout(() => {
        if (pendingFilter !== null) {
          setActiveFilter(pendingFilter);
          setPendingFilter(null);
        }
        setTransitionState('enter');
      }, 200); // Reduced duration for faster transition
      return () => clearTimeout(timer);
    } else if (transitionState === 'sliding') {
      // After sliding animation completes
      const timer = setTimeout(() => {
        if (pendingViewMode !== null) {
          setViewMode(pendingViewMode);
          setPendingViewMode(null);
          setTransitionState('enter');
        }
      }, 200); // Reduced duration for faster transition
      return () => clearTimeout(timer);
    } else if (transitionState === 'enter') {
      // After enter animation completes
      const timer = setTimeout(() => {
        setTransitionState('idle');
        setAnimating(false);
      }, 300); // Reduced duration for faster animation
      return () => clearTimeout(timer);
    }
  }, [transitionState, pendingFilter, pendingViewMode]);
  const filters = [{
    id: 'all',
    name: 'All Questions',
    icon: <FileTextIcon className="w-4 h-4" />
  }, {
    id: 'civil',
    name: 'Civil Law',
    icon: <BookmarkIcon className="w-4 h-4" />
  }, {
    id: 'criminal',
    name: 'Criminal Law',
    icon: <BookmarkIcon className="w-4 h-4" />
  }, {
    id: 'constitutional',
    name: 'Constitutional Law',
    icon: <BookmarkIcon className="w-4 h-4" />
  }];
  const questions = [{
    id: 1,
    title: 'Civil Procedure Code 2023',
    category: 'civil',
    year: 2023,
    questions: 45,
    downloads: 1250,
    solved: 876,
    difficulty: 'Advanced',
    tags: ['Procedure', 'Civil Law', 'Latest'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'blue',
    bgGradient: 'from-blue-500/60 to-cyan-400/60'
  }, {
    id: 2,
    title: 'Criminal Law MCQs 2023',
    category: 'criminal',
    year: 2023,
    questions: 60,
    downloads: 980,
    solved: 720,
    difficulty: 'Intermediate',
    tags: ['MCQ', 'Criminal Law', 'Latest'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'purple',
    bgGradient: 'from-purple-500/60 to-pink-400/60'
  }, {
    id: 3,
    title: 'Constitutional Law 2023',
    category: 'constitutional',
    year: 2023,
    questions: 50,
    downloads: 1540,
    solved: 1100,
    difficulty: 'Advanced',
    tags: ['Constitution', 'Rights', 'Latest'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'green',
    bgGradient: 'from-green-500/60 to-emerald-400/60'
  }, {
    id: 4,
    title: 'Civil Procedure Code 2022',
    category: 'civil',
    year: 2022,
    questions: 40,
    downloads: 2200,
    solved: 1950,
    difficulty: 'Intermediate',
    tags: ['Procedure', 'Civil Law', 'Previous Year'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'blue',
    bgGradient: 'from-blue-500/60 to-cyan-400/60'
  }, {
    id: 5,
    title: 'Criminal Law MCQs 2022',
    category: 'criminal',
    year: 2022,
    questions: 55,
    downloads: 1850,
    solved: 1600,
    difficulty: 'Beginner',
    tags: ['MCQ', 'Criminal Law', 'Previous Year'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'purple',
    bgGradient: 'from-purple-500/60 to-pink-400/60'
  }, {
    id: 6,
    title: 'Constitutional Law 2022',
    category: 'constitutional',
    year: 2022,
    questions: 48,
    downloads: 1750,
    solved: 1480,
    difficulty: 'Advanced',
    tags: ['Constitution', 'Rights', 'Previous Year'],
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'green',
    bgGradient: 'from-green-500/60 to-emerald-400/60'
  }];
  const filteredQuestions = questions.filter(question => (activeFilter === 'all' || question.category === activeFilter) && (searchTerm === '' || question.title.toLowerCase().includes(searchTerm.toLowerCase())));
  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500 dark:text-blue-400';
      case 'purple':
        return 'text-purple-500 dark:text-purple-400';
      case 'green':
        return 'text-green-500 dark:text-green-400';
      default:
        return 'text-indigo-500 dark:text-indigo-400';
    }
  };
  const getBgColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 dark:bg-blue-900/20';
      case 'purple':
        return 'bg-purple-50 dark:bg-purple-900/20';
      case 'green':
        return 'bg-green-50 dark:bg-green-900/20';
      default:
        return 'bg-indigo-50 dark:bg-indigo-900/20';
    }
  };
  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700';
      case 'purple':
        return 'border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700';
      case 'green':
        return 'border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700';
      default:
        return 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700';
    }
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };
  // Navigate to QuestionBank page
  const handleViewAllQuestionBanks = () => {
    navigate('/question-bank');
  };
  return <section id="questions" className="py-16 bg-gray-50 dark:bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            {t('questions.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {t('questions.subtitle')}
          </p>
        </div>
        {/* Search and Filter */}
        <div className={`flex flex-col md:flex-row gap-4 mb-10 justify-between transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative max-w-md w-full group">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-indigo-500 transition-colors duration-300" />
            <input type="text" placeholder="Search questions..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100" />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="flex items-center gap-3">
            {/* View mode toggle */}
            <div className="flex bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 p-1">
              <button onClick={() => handleViewModeChange('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300'}`} disabled={animating}>
                <LayoutGridIcon className="w-5 h-5" />
              </button>
              <button onClick={() => handleViewModeChange('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300'}`} disabled={animating}>
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter, index) => <button key={filter.id} onClick={() => handleFilterChange(filter.id)} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-500 ease-in-out flex items-center gap-2 hover-border-animation ${activeFilter === filter.id ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800'}`} style={{
              animationDelay: `${index * 100}ms`
            }} disabled={animating}>
                  {filter.icon}
                  <span>{filter.name}</span>
                  <span className="border-left"></span>
                  <span className="border-right"></span>
                </button>)}
            </div>
          </div>
        </div>
        {/* Question Grid/List with Improved Animation */}
        <div className="relative min-h-[200px]" ref={containerRef}>
          <div className={`transition-all duration-300 ease-in-out ${transitionState === 'exit' || transitionState === 'sliding' ? 'opacity-0' : transitionState === 'enter' ? 'opacity-100 animate-fadeIn' : 'opacity-100'}`} ref={contentRef} style={{
          height: transitionState === 'sliding' ? '200px' : 'auto',
          transition: 'height 200ms ease-in-out, opacity 200ms ease-in-out'
        }}>
            {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuestions.map((item, index) => <div key={item.id} className={`bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out border ${getBorderColorClass(item.color)} relative group overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:-translate-y-2`} style={{
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }} onMouseEnter={() => setSelectedCard(item.id)} onMouseLeave={() => setSelectedCard(null)}>
                    {/* Subtle background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out -z-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`}></div>
                    </div>
                    {/* Top section with icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${getBgColorClass(item.color)} ${getColorClass(item.color)} transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-3`}>
                        {item.icon}
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(item.difficulty)} transform transition-transform duration-300 group-hover:scale-105`}>
                          {item.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transform transition-transform duration-300 group-hover:scale-105">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    {/* Title with animated underline */}
                    <div className="relative mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-500 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {item.title}
                      </h3>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full text-xs flex items-center transform transition-transform duration-300 hover:scale-105">
                          <TagIcon className="w-3 h-3 mr-1" />
                          {tag}
                        </span>)}
                    </div>
                    {/* Stats */}
                    <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        <FileTextIcon className="w-4 h-4 mr-1 group-hover:animate-pulse-glow" />
                        <span>{item.questions} questions</span>
                      </div>
                      <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        <DownloadIcon className="w-4 h-4 mr-1 group-hover:animate-pulse-glow" />
                        <span>{item.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    {/* Progress bar with animation */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 dark:text-gray-400">
                          Solved
                        </span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {Math.round(item.solved / item.downloads * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-700 ease-in-out bg-gradient-to-r ${item.bgGradient} group-hover:animate-pulse-glow`} style={{
                    width: `${item.solved / item.downloads * 100}%`
                  }}></div>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 px-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                        <BookOpenIcon className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                        <span className="relative z-10">View</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      </button>
                      <button className="flex-1 py-2 px-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                        <DownloadIcon className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                        <span className="relative z-10">Download</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      </button>
                    </div>
                    {/* Subtle shine effect on hover */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                  </div>)}
              </div> : <div className="space-y-4">
                {filteredQuestions.map((item, index) => <div key={item.id} className={`bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out border ${getBorderColorClass(item.color)} relative group overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:-translate-y-1`} style={{
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }}>
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Icon */}
                      <div className={`p-4 rounded-lg ${getBgColorClass(item.color)} ${getColorClass(item.color)} transition-all duration-500 ease-in-out self-start transform group-hover:scale-110 group-hover:rotate-3`}>
                        {item.icon}
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-500 ease-in-out relative">
                            {item.title}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                          </h3>
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(item.difficulty)} transform transition-transform duration-300 group-hover:scale-105`}>
                              {item.difficulty}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transform transition-transform duration-300 group-hover:scale-105">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full text-xs flex items-center transform transition-transform duration-300 hover:scale-105">
                              <TagIcon className="w-3 h-3 mr-1" />
                              {tag}
                            </span>)}
                        </div>
                        <div className="flex flex-wrap md:items-center gap-4 mb-3">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                            <FileTextIcon className="w-4 h-4 mr-1 group-hover:animate-pulse-glow" />
                            <span>{item.questions} questions</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                            <DownloadIcon className="w-4 h-4 mr-1 group-hover:animate-pulse-glow" />
                            <span>
                              {item.downloads.toLocaleString()} downloads
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                            <CheckCircleIcon className="w-4 h-4 mr-1 group-hover:animate-pulse-glow" />
                            <span>{item.solved.toLocaleString()} solved</span>
                          </div>
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex md:flex-col gap-2">
                        <button className="flex-1 py-2 px-4 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                          <BookOpenIcon className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                          <span className="relative z-10">View</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                        </button>
                        <button className="flex-1 py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                          <DownloadIcon className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                          <span className="relative z-10">Download</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                        </button>
                      </div>
                    </div>
                    {/* Subtle shine effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine"></div>
                  </div>)}
              </div>}
          </div>
        </div>
        {/* View All Button */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button onClick={handleViewAllQuestionBanks} className="px-8 py-3.5 bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-all duration-500 relative group overflow-hidden hover-border-animation">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              View All Question Banks
            </span>
            <ArrowRightIcon className="w-5 h-5 ml-2 inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            <span className="border-left"></span>
            <span className="border-right"></span>
          </button>
        </div>
      </div>
    </section>;
};