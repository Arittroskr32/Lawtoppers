import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDownIcon, BookIcon, ClockIcon, UsersIcon, BadgeIcon, StarIcon, ArrowRightIcon, SearchIcon, FilterIcon, XIcon, LayoutGridIcon, ListIcon, CheckCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const CoursesSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [transitionState, setTransitionState] = useState<'idle' | 'exit' | 'enter' | 'sliding'>('idle');
  const [pendingFilter, setPendingFilter] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
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
  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);
  // Handle transition phases
  useEffect(() => {
    if (transitionState === 'exit') {
      // After exit animation completes
      const timer = setTimeout(() => {
        if (pendingFilter !== null) {
          setActiveCategory(pendingFilter);
          setPendingFilter(null);
        }
        setTransitionState('enter');
      }, 200); // Reduced duration for faster transition
      return () => clearTimeout(timer);
    } else if (transitionState === 'sliding') {
      // After sliding animation completes
      const timer = setTimeout(() => {
        setShowAll(!showAll);
        setTransitionState('enter');
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
  }, [transitionState, pendingFilter, showAll]);
  // Handle toggle show more/less with animation
  const handleToggleShow = () => {
    if (!animating && transitionState === 'idle') {
      setAnimating(true);
      setTransitionState('sliding');
    }
  };
  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory && !animating && transitionState === 'idle') {
      setAnimating(true);
      setTransitionState('exit');
      setPendingFilter(category);
    }
  };
  const categories = [{
    id: 'all',
    name: t('courses.all'),
    icon: <FilterIcon className="w-4 h-4" />
  }, {
    id: 'civil',
    name: t('courses.civil'),
    icon: <BookIcon className="w-4 h-4" />
  }, {
    id: 'criminal',
    name: t('courses.criminal'),
    icon: <BookIcon className="w-4 h-4" />
  }, {
    id: 'constitutional',
    name: t('courses.constitutional'),
    icon: <BookIcon className="w-4 h-4" />
  }];
  const courses = [{
    id: 1,
    title: 'Civil Procedure Code',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1250,
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.9,
    instructor: 'Dr. Amina Khan',
    description: 'Master the intricacies of civil procedure and courtroom practices.',
    price: '৳16,000',
    discount: '৳20,000'
  }, {
    id: 2,
    title: 'Criminal Law Basics',
    category: 'criminal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 980,
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.7,
    instructor: 'Prof. Rahul Mehta',
    description: 'Comprehensive introduction to criminal law principles and applications.',
    price: '৳12,000',
    discount: '৳16,000'
  }, {
    id: 3,
    title: 'Constitutional Rights',
    category: 'constitutional',
    image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1540,
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.8,
    instructor: 'Justice Farida Ahmed',
    description: 'Explore constitutional principles and their application in modern contexts.',
    price: '৳14,500',
    discount: '৳18,500'
  }, {
    id: 4,
    title: 'Contract Law',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 870,
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.6,
    instructor: 'Adv. Sarah Chowdhury',
    description: 'Learn the fundamentals of contract formation, execution, and remedies.',
    price: '৳10,500',
    discount: '৳13,500'
  }, {
    id: 5,
    title: 'Evidence Law',
    category: 'criminal',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1100,
    duration: '9 weeks',
    level: 'Advanced',
    rating: 4.9,
    instructor: 'Dr. Kamal Hassan',
    description: 'Master the rules of evidence and their application in criminal proceedings.',
    price: '৳15,000',
    discount: '৳19,000'
  }, {
    id: 6,
    title: 'Administrative Law',
    category: 'constitutional',
    image: 'https://images.unsplash.com/photo-1589394104473-010bcf0a6e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 760,
    duration: '8 weeks',
    level: 'Advanced',
    rating: 4.7,
    instructor: 'Prof. Nusrat Jahan',
    description: 'Understand administrative bodies and their regulatory frameworks.',
    price: '৳13,500',
    discount: '৳17,500'
  }, {
    id: 7,
    title: 'Property Law',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 950,
    duration: '7 weeks',
    level: 'Intermediate',
    rating: 4.5,
    instructor: 'Adv. Zubair Ahmed',
    description: 'Explore property rights, transfers, and dispute resolution mechanisms.',
    price: '৳12,500',
    discount: '৳16,000'
  }, {
    id: 8,
    title: 'Criminal Procedure',
    category: 'criminal',
    image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1300,
    duration: '11 weeks',
    level: 'Advanced',
    rating: 4.8,
    instructor: 'Justice Imran Khan',
    description: 'Comprehensive study of criminal procedure and courtroom strategies.',
    price: '৳16,000',
    discount: '৳20,000'
  }];
  // Filter courses by category and search term
  const filteredCourses = courses.filter(course => (activeCategory === 'all' || course.category === activeCategory) && (searchTerm === '' || course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase())));
  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {rating}
        </span>
      </div>;
  };
  // Navigate to course details page
  const handleEnroll = (courseId: number) => {
    navigate(`/course-details/${courseId}`);
  };
  // Handle search toggle
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchTerm('');
    }
  };
  return <section id="courses" className="relative py-16 overflow-hidden" ref={sectionRef}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 dark:from-slate-900/95 dark:to-slate-900/90 z-10"></div>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Education background" className="w-full h-full object-cover opacity-10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800 dark:text-gray-100">
            {t('courses.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Explore our comprehensive courses designed by legal experts to help
            you excel in your legal career
          </p>
        </div>
        {/* Search and Filter Bar - Matching QuestionBankSection layout */}
        <div className={`flex flex-col md:flex-row gap-4 mb-8 justify-between transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Search on left side */}
          <div className="relative max-w-md w-full group">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-indigo-500 transition-colors duration-300" />
            <input type="text" placeholder="Search courses..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100" />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
            {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <XIcon className="w-5 h-5" />
              </button>}
          </div>
          {/* Category Filters on right side */}
          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0">
            {categories.map((category, index) => <button key={category.id} onClick={() => handleCategoryChange(category.id)} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-500 ease-in-out flex items-center gap-2 hover-border-animation ${activeCategory === category.id ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800'}`} style={{
            animationDelay: `${index * 100}ms`
          }} disabled={animating}>
                <div className={activeCategory === category.id ? 'text-white' : 'text-indigo-500 dark:text-indigo-400'}>
                  {category.icon}
                </div>
                <span>{category.name}</span>
                <span className="border-left"></span>
                <span className="border-right"></span>
              </button>)}
          </div>
          {/* Filter Count Badge - Only show when filtering */}
          {searchTerm && <div className="py-2 px-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium animate-fadeIn flex items-center md:hidden">
              <FilterIcon className="w-4 h-4 mr-2" />
              {filteredCourses.length}{' '}
              {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </div>}
        </div>
        {/* Empty state when no courses match filter */}
        {filteredCourses.length === 0 && <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/50 rounded-xl animate-fadeIn">
            <FilterIcon className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button onClick={() => {
          setActiveCategory('all');
          setSearchTerm('');
        }} className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Reset filters
            </button>
          </div>}
        {/* Courses Grid with Improved Animation */}
        {filteredCourses.length > 0 && <div className="relative min-h-[200px]" ref={containerRef}>
            <div ref={gridRef} className={`transition-all duration-300 ease-in-out ${transitionState === 'exit' || transitionState === 'sliding' ? 'opacity-0' : transitionState === 'enter' ? 'opacity-100 animate-fadeIn' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visibleCourses.map((course, index) => <div key={course.id} className={`relative group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl dark:shadow-gray-900/30 border border-gray-100/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:-translate-y-2`} style={{
              transitionDelay: `${Math.min(index, 3) * 100}ms`
            }} onMouseEnter={() => setHoveredCard(course.id)} onMouseLeave={() => setHoveredCard(null)}>
                    {/* Image Container with Overlay */}
                    <div className="relative overflow-hidden h-48">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                      {/* Level Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${course.level === 'Advanced' ? 'bg-red-500/70 text-white' : course.level === 'Intermediate' ? 'bg-amber-500/70 text-white' : 'bg-green-500/70 text-white'} transform transition-transform duration-300 group-hover:scale-105`}>
                          {course.level}
                        </div>
                      </div>
                      {/* Price Tag with Animation */}
                      <div className="absolute bottom-4 right-4 flex items-center">
                        <span className="text-white text-lg font-bold group-hover:animate-pulse-glow">
                          {course.price}
                        </span>
                        {course.discount && <span className="text-gray-300 text-sm line-through ml-2">
                            {course.discount}
                          </span>}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      {/* Title with animated underline on hover */}
                      <div className="relative mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {course.title}
                        </h3>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                      </div>
                      {/* Instructor */}
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-2 group-hover:animate-bounce-slow">
                          {course.instructor.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {course.instructor}
                        </span>
                      </div>
                      {/* Description - visible on hover with animation */}
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                        {course.description}
                      </div>
                      {/* Ratings */}
                      <div className="mb-4">{renderStars(course.rating)}</div>
                      {/* Stats with Icons */}
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          <UsersIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400 group-hover:animate-pulse-glow" />
                          {course.students.toLocaleString()} students
                        </div>
                        <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          <ClockIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400 group-hover:animate-pulse-glow" />
                          {course.duration}
                        </div>
                      </div>
                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <button onClick={() => handleEnroll(course.id)} className="w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg border border-indigo-200 dark:border-indigo-800 hover:shadow-md hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center overflow-hidden relative group">
                          <span className="relative z-10">View Details</span>
                          <ArrowRightIcon className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                    {/* Border highlight effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
                    {/* Shine effect on hover */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                  </div>)}
              </div>
            </div>
          </div>}
        {/* Show More Button with Enhanced Animation */}
        {filteredCourses.length > 4 && <div className="text-center mt-12">
            <button onClick={handleToggleShow} className="px-8 py-3.5 bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-all duration-500 relative group overflow-hidden hover-border-animation" disabled={animating}>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {showAll ? 'Show Less' : t('courses.showMore')}
              </span>
              <ChevronDownIcon className={`ml-2 w-5 h-5 inline-block transition-transform duration-300 relative z-10 ${showAll ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              <span className="border-left"></span>
              <span className="border-right"></span>
            </button>
          </div>}
      </div>
    </section>;
};