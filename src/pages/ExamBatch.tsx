import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SearchIcon, CalendarIcon, UsersIcon, ClockIcon, CheckCircleIcon, StarIcon, TrendingUpIcon, AwardIcon, BookOpenIcon, FileTextIcon, AlertCircleIcon, TagIcon, ArrowRightIcon, BarChartIcon, GraduationCapIcon, HeartIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-react';
const ExamBatch: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [animatedElements, setAnimatedElements] = useState<{
    [key: string]: boolean;
  }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const createObserver = (ref: React.RefObject<HTMLDivElement>, key: string) => {
      if (!ref.current) return null;
      return new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setAnimatedElements(prev => ({
            ...prev,
            [key]: true
          }));
        }
      }, {
        threshold: 0.2
      });
    };
    const observers: IntersectionObserver[] = [];
    // Main section
    const mainObserver = createObserver(sectionRef, 'main');
    if (mainObserver && sectionRef.current) {
      mainObserver.observe(sectionRef.current);
      observers.push(mainObserver);
    }
    // Features section
    const featuresObserver = createObserver(featuresRef, 'features');
    if (featuresObserver && featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
      observers.push(featuresObserver);
    }
    // Testimonials section
    const testimonialsObserver = createObserver(testimonialsRef, 'testimonials');
    if (testimonialsObserver && testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
      observers.push(testimonialsObserver);
    }
    // FAQ section
    const faqObserver = createObserver(faqRef, 'faq');
    if (faqObserver && faqRef.current) {
      faqObserver.observe(faqRef.current);
      observers.push(faqObserver);
    }
    // CTA section
    const ctaObserver = createObserver(ctaRef, 'cta');
    if (ctaObserver && ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
      observers.push(ctaObserver);
    }
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
  // Auto-rotating testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const categories = [{
    id: 'all',
    name: 'All Batches'
  }, {
    id: 'bar',
    name: 'BAR Council'
  }, {
    id: 'bjs',
    name: 'BJS'
  }, {
    id: 'academic',
    name: 'Academic'
  }];
  const examBatches = [{
    id: 1,
    title: 'BAR Council Exam Preparation Batch',
    category: 'bar',
    startDate: '2023-09-15',
    endDate: '2023-12-15',
    duration: '3 months',
    students: 125,
    classes: 36,
    mockExams: 12,
    success: '92%',
    rating: 4.8,
    instructors: ['Dr. Amina Khan', 'Prof. Rahul Mehta'],
    description: 'Comprehensive preparation for the BAR Council exam with focus on critical topics, mock tests, and expert guidance.',
    level: 'Advanced',
    price: '৳25,000',
    discount: '৳30,000',
    tags: ['BAR Council', 'Exam Prep', 'Mock Tests'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Weekly mock tests with detailed solutions', 'Personal mentoring sessions', 'Comprehensive study materials', 'Previous years question analysis', 'Performance tracking dashboard', '24/7 doubt clearing support'],
    color: 'blue',
    locations: ['Dhaka', 'Online'],
    trending: true
  }, {
    id: 2,
    title: 'BJS Exam Special Batch',
    category: 'bjs',
    startDate: '2023-10-01',
    endDate: '2024-01-31',
    duration: '4 months',
    students: 98,
    classes: 48,
    mockExams: 16,
    success: '88%',
    rating: 4.7,
    instructors: ['Justice Farida Ahmed', 'Adv. Zubair Ahmed'],
    description: 'Specialized batch for Bangladesh Judicial Service exam preparation with intensive training on case laws and judgement writing.',
    level: 'Advanced',
    price: '৳32,000',
    discount: '৳38,000',
    tags: ['BJS', 'Judiciary', 'Case Laws'],
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Specialized judgement writing sessions', 'One-on-one interview preparation', 'Extensive case law discussions', 'Monthly evaluation tests', 'Personalized feedback on written answers', 'Exclusive study materials'],
    color: 'purple',
    locations: ['Dhaka', 'Chittagong', 'Online'],
    popular: true
  }, {
    id: 3,
    title: 'Law Academic Excellence Batch',
    category: 'academic',
    startDate: '2023-08-20',
    endDate: '2023-11-20',
    duration: '3 months',
    students: 150,
    classes: 30,
    mockExams: 10,
    success: '95%',
    rating: 4.9,
    instructors: ['Dr. Kamal Hassan', 'Prof. Nusrat Jahan'],
    description: 'Designed for law students aiming for academic excellence in university exams with comprehensive coverage of core subjects.',
    level: 'Intermediate',
    price: '৳18,000',
    discount: '৳22,000',
    tags: ['Academic', 'University', 'Core Subjects'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Subject-wise comprehensive notes', 'Regular class tests and feedback', 'Special focus on important topics', 'Exam-oriented preparation strategy', 'Interactive doubt-clearing sessions', 'Online access to recorded lectures'],
    color: 'green',
    locations: ['Dhaka', 'Online'],
    bestValue: true
  }, {
    id: 4,
    title: 'BAR Council Fast Track Batch',
    category: 'bar',
    startDate: '2023-09-25',
    endDate: '2023-11-25',
    duration: '2 months',
    students: 80,
    classes: 24,
    mockExams: 8,
    success: '85%',
    rating: 4.6,
    instructors: ['Adv. Sarah Chowdhury', 'Dr. Imran Khan'],
    description: 'Accelerated preparation for BAR Council exam focusing on high-yield topics and intensive practice sessions.',
    level: 'Advanced',
    price: '৳20,000',
    discount: '৳24,000',
    tags: ['BAR Council', 'Fast Track', 'Intensive'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Accelerated coverage of syllabus', 'Focus on previous years pattern', 'Daily practice questions', 'Weekend mock exams', 'Targeted preparation strategy', 'Quick revision materials'],
    color: 'blue',
    locations: ['Dhaka', 'Online']
  }, {
    id: 5,
    title: 'BJS Weekend Batch',
    category: 'bjs',
    startDate: '2023-10-15',
    endDate: '2024-03-15',
    duration: '5 months',
    students: 65,
    classes: 40,
    mockExams: 15,
    success: '90%',
    rating: 4.7,
    instructors: ['Justice Imran Khan', 'Prof. Rahima Begum'],
    description: 'Weekend classes for working professionals preparing for Bangladesh Judicial Service exam with flexible schedule.',
    level: 'Advanced',
    price: '৳35,000',
    discount: '৳40,000',
    tags: ['BJS', 'Weekend', 'Working Professionals'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Weekend intensive sessions', 'Flexible timing for working professionals', 'Extended course duration for better retention', 'Comprehensive coverage of syllabus', 'Special focus on interview preparation', 'Online weekday doubt clearing sessions'],
    color: 'purple',
    locations: ['Dhaka', 'Online']
  }, {
    id: 6,
    title: 'Law Academic Foundation Batch',
    category: 'academic',
    startDate: '2023-08-01',
    endDate: '2023-10-31',
    duration: '3 months',
    students: 180,
    classes: 32,
    mockExams: 8,
    success: '92%',
    rating: 4.8,
    instructors: ['Dr. Sanjida Hossain', 'Adv. Fahim Ahmed'],
    description: 'Foundation course for first and second year law students covering basic legal principles and exam techniques.',
    level: 'Beginner',
    price: '৳15,000',
    discount: '৳18,000',
    tags: ['Academic', 'Foundation', 'Beginners'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Basic legal principles and concepts', 'Legal research methodology', 'Academic writing skills', 'Regular assignments and feedback', 'Foundation building for advanced courses', 'Study techniques and time management'],
    color: 'green',
    locations: ['Dhaka', 'Chittagong', 'Online']
  }];
  // Testimonials data
  const testimonials = [{
    id: 1,
    name: 'Asif Rahman',
    role: 'BAR Council, 2022',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: "The BAR Council Exam Batch at LAWTOPPERS was instrumental in my success. The mock tests and personalized feedback helped me identify my weak areas and work on them effectively. I can't thank the mentors enough for their guidance throughout my preparation journey."
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    role: 'BJS, 2023',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'I cleared the BJS exam on my first attempt thanks to the structured preparation and expert guidance at LAWTOPPERS. The interview preparation sessions were particularly helpful and gave me the confidence to face the panel. The study materials were comprehensive and up-to-date.'
  }, {
    id: 3,
    name: 'Kamal Hossain',
    role: 'Law Academic, 2023',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 4.5,
    text: "The academic excellence batch helped me secure top grades in my law school. The faculty's expertise and comprehensive study materials made complex legal concepts easy to understand. The regular tests and feedback sessions ensured I was always on track with my preparation."
  }];
  // FAQ data
  const filteredBatches = examBatches.filter(batch => (activeCategory === 'all' || batch.category === activeCategory) && (searchTerm === '' || batch.title.toLowerCase().includes(searchTerm.toLowerCase()) || batch.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))));
  const visibleBatches = showAll ? filteredBatches : filteredBatches.slice(0, 3);
  // Helper function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'} ${i === Math.floor(rating) && rating % 1 > 0 ? 'text-amber-400 fill-amber-400 opacity-60' : ''}`} />)}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {rating}
        </span>
      </div>;
  };
  // Get color classes based on batch color
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
  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };
  return <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      {/* Hero Section with enhanced animations */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/80 z-10"></div>
          <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law exam preparation" className="w-full h-full object-cover" />
          {/* Animated blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fadeInDown">
              এক্সাম ব্যাচ প্রোগ্রামস
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fadeInUp">
              আইন পরীক্ষায় সফলতা নিশ্চিত করতে তৈরি আমাদের বিশেষ এক্সাম ব্যাচ প্রোগ্রামে যোগ দিন। অভিজ্ঞ শিক্ষকের দিকনির্দেশনা, পূর্ণাঙ্গ উপকরণ এবং সুশৃঙ্খল প্রস্তুতির সুযোগ।
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center group overflow-hidden relative cursor-pointer">
                <span className="relative z-10">Explore Batches</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/20"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-center justify-center cursor-default">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce-slow"></div>
          </div>
        </div>
      </section>
      {/* Stats Section with enhanced animations */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-border-animation border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transform">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                <UsersIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                5,000+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Students Enrolled
              </p>
              <span className="border-left"></span>
              <span className="border-right"></span>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-border-animation border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transform">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                <CheckCircleIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                92%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              <span className="border-left"></span>
              <span className="border-right"></span>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-border-animation border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transform">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                <BookOpenIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                15+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized Batches
              </p>
              <span className="border-left"></span>
              <span className="border-right"></span>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-border-animation border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transform">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                <AwardIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                25+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Expert Mentors</p>
              <span className="border-left"></span>
              <span className="border-right"></span>
            </div>
          </div>
        </div>
      </section>
      {/* Main Exam Batches Section with enhanced animations */}
      <section id="exam-batches" className="py-16 bg-white dark:bg-slate-900" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-800 dark:text-gray-100">
              Available Exam Batches
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Choose from our specialized exam batch programs designed by legal
              experts to help you excel in your legal career examinations
            </p>
          </div>
          {/* Search and Category Filter */}
          <div className={`mb-12 transform transition-all duration-1000 delay-300 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
              <div className="relative max-w-md w-full group">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-indigo-500 transition-colors duration-300" />
                <input type="text" placeholder="Search exam batches..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2.5 rounded-full transition-all duration-500 hover-border-animation cursor-pointer ${activeCategory === category.id ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'}`} style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <span>{category.name}</span>
                  <span className="border-left"></span>
                  <span className="border-right"></span>
                </button>)}
            </div>
          </div>
          {/* Exam Batches Grid with enhanced animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visibleBatches.map((batch, index) => <div key={batch.id} className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border ${getBorderColorClass(batch.color)} relative group transform ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:-translate-y-2 cursor-pointer`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Image Container with enhanced overlay effects */}
                <div className="relative overflow-hidden h-48">
                  <img src={batch.image} alt={batch.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                  {/* Gradient Overlay with enhanced animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  {/* Special badges with animations */}
                  {batch.trending && <div className="absolute top-4 left-4 px-2.5 py-1 bg-red-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm flex items-center animate-pulse-glow">
                      <TrendingUpIcon className="w-3 h-3 mr-1" />
                      Trending
                    </div>}
                  {batch.popular && <div className="absolute top-4 left-4 px-2.5 py-1 bg-amber-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm flex items-center animate-pulse-glow">
                      <HeartIcon className="w-3 h-3 mr-1" />
                      Popular
                    </div>}
                  {batch.bestValue && <div className="absolute top-4 left-4 px-2.5 py-1 bg-green-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm flex items-center animate-pulse-glow">
                      <CheckCircleIcon className="w-3 h-3 mr-1" />
                      Best Value
                    </div>}
                  {/* Level Badge with enhanced styling */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getLevelClass(batch.level)} transform transition-transform duration-300 group-hover:scale-105`}>
                      {batch.level}
                    </div>
                  </div>
                  {/* Price Tag with enhanced animation */}
                  <div className="absolute bottom-4 right-4 flex items-center">
                    <span className="text-white text-lg font-bold group-hover:animate-pulse-glow">
                      {batch.price}
                    </span>
                    {batch.discount && <span className="text-gray-300 text-sm line-through ml-2">
                        {batch.discount}
                      </span>}
                  </div>
                </div>
                {/* Content with enhanced animations */}
                <div className="p-5">
                  {/* Title with animated underline on hover */}
                  <div className="relative mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {batch.title}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </div>
                  {/* Duration and Dates */}
                  <div className="flex justify-between mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <CalendarIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                      <span>{formatDate(batch.startDate)}</span>
                    </div>
                    <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <ClockIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                      <span>{batch.duration}</span>
                    </div>
                  </div>
                  {/* Description - visible on hover with enhanced animation */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    {batch.description}
                  </div>
                  {/* Locations */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {batch.locations.map((location, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full text-xs flex items-center">
                        <MapPinIcon className="w-3 h-3 mr-1" />
                        {location}
                      </span>)}
                  </div>
                  {/* Tags with enhanced animations */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {batch.tags.map((tag, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full text-xs flex items-center transform transition-transform duration-300 hover:scale-105">
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </span>)}
                  </div>
                  {/* Stats with enhanced hover animations */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <UsersIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400 group-hover:animate-pulse-glow" />
                      {batch.students} students
                    </div>
                    <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <FileTextIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400 group-hover:animate-pulse-glow" />
                      {batch.classes} classes
                    </div>
                    <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <TrendingUpIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400 group-hover:animate-pulse-glow" />
                      {batch.success} success
                    </div>
                  </div>
                  {/* Ratings with animated stars */}
                  <div className="mb-4">{renderStars(batch.rating)}</div>
                  {/* Action Button with enhanced hover effects */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button className="w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg border border-indigo-200 dark:border-indigo-800 hover:shadow-md hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center overflow-hidden relative group">
                      <span className="relative z-10">Enroll Now</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                {/* Enhanced border highlight effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
                {/* Shine effect on hover */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
              </div>)}
          </div>
          {/* Show More Button with enhanced animations */}
          {filteredBatches.length > 3 && <div className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="px-8 py-3.5 bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-md transition-all duration-500 relative group overflow-hidden hover-border-animation cursor-pointer" onClick={() => setShowAll(!showAll)}>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {showAll ? 'Show Less' : 'View More Batches'}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                <span className="border-left"></span>
                <span className="border-right"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 scale-0 rounded-md transition-transform duration-500 origin-bottom group-hover:scale-0"></span>
              </button>
            </div>}
        </div>
      </section>
      {/* Features Section with enhanced animations */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-12 transform transition-all duration-1000 ${animatedElements.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Why Choose Our Exam Batches?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our exam batch programs are designed with a focus on comprehensive
              preparation, expert guidance, and proven success strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <GraduationCapIcon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
            title: 'Expert Faculty',
            description: 'Learn from experienced judges, advocates, and law professors with proven track records in their respective fields.',
            color: 'indigo',
            delay: 0
          }, {
            icon: <BookOpenIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
            title: 'Comprehensive Materials',
            description: 'Access to meticulously prepared study materials, case digests, and up-to-date legal amendments.',
            color: 'blue',
            delay: 100
          }, {
            icon: <FileTextIcon className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
            title: 'Regular Mock Tests',
            description: 'Frequent mock exams with detailed analysis and personalized feedback to improve your performance.',
            color: 'purple',
            delay: 200
          }, {
            icon: <BarChartIcon className="w-7 h-7 text-green-600 dark:text-green-400" />,
            title: 'Performance Tracking',
            description: 'Monitor your progress with our advanced performance tracking system and identify areas for improvement.',
            color: 'green',
            delay: 300
          }, {
            icon: <UsersIcon className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
            title: 'Peer Learning',
            description: 'Engage in group discussions and collaborative learning sessions to enhance your understanding of complex legal concepts.',
            color: 'amber',
            delay: 400
          }, {
            icon: <AlertCircleIcon className="w-7 h-7 text-red-600 dark:text-red-400" />,
            title: 'Doubt Resolution',
            description: '24/7 doubt clearing support to address your questions and concerns throughout your preparation journey.',
            color: 'red',
            delay: 500
          }].map((feature, index) => <div key={index} className={`p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 hover-border-animation border border-gray-100 dark:border-gray-800 group transform ${animatedElements.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:-translate-y-2`} style={{
            transitionDelay: `${feature.delay}ms`
          }}>
                <div className={`w-14 h-14 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-${feature.color}-600 dark:group-hover:text-${feature.color}-400`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                <span className="border-left"></span>
                <span className="border-right"></span>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section with enhanced animations */}
      <section className="py-16 bg-white dark:bg-slate-900" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-12 transform transition-all duration-1000 ${animatedElements.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Hear from our successful students who have achieved their career
              goals with our exam batch programs
            </p>
          </div>
          {/* Testimonial tabs */}
          <div className="flex justify-center mb-8">
            {testimonials.map((testimonial, index) => <button key={testimonial.id} onClick={() => setActiveTab(index)} className={`mx-2 w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeTab === index ? 'bg-indigo-600 w-8' : 'bg-gray-300 dark:bg-gray-700'}`} aria-label={`View testimonial from ${testimonial.name}`} />)}
          </div>
          {/* Testimonial cards with horizontal animation */}
          <div className="max-w-3xl mx-auto relative h-[400px] md:h-[320px] mb-20">
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`absolute inset-0 bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-md transition-all duration-500 ${activeTab === index ? 'opacity-100 translate-x-0 z-10' : activeTab > index ? 'opacity-0 -translate-x-full -z-10' : 'opacity-0 translate-x-full -z-10'} hover-border-animation border border-gray-100 dark:border-gray-700 overflow-y-auto`}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-300 dark:border-indigo-700 shadow-md" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
                <span className="border-left"></span>
                <span className="border-right"></span>
                {/* Quote marks */}
                <div className="absolute top-6 right-8 text-6xl text-indigo-200 dark:text-indigo-900/30 font-serif leading-none opacity-60">
                  "
                </div>
              </div>)}
          </div>
          {/* View more testimonials button */}
          <div className={`text-center mt-8 transform transition-all duration-1000 delay-300 ${animatedElements.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="px-6 py-2.5 text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition-all duration-300 flex items-center mx-auto cursor-pointer">
              View More Success Stories
              <ExternalLinkIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section removed as requested */}
      {/* CTA Section with enhanced animations */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden" ref={ctaRef}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${animatedElements.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 animate-fadeIn">
              Ready to Excel in Your Legal Exams?
            </h2>
            <p className="text-lg mb-8 opacity-90 animate-fadeInUp" style={{
            animationDelay: '200ms'
          }}>
              Join our specialized exam batch programs and take the first step
              towards a successful legal career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3.5 bg-white text-indigo-700 font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-900/30 transition-all duration-300 animate-fadeIn group relative overflow-hidden cursor-pointer" style={{
              animationDelay: '400ms'
            }}>
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gray-100"></div>
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 animate-fadeIn relative overflow-hidden group cursor-pointer" style={{
              animationDelay: '600ms'
            }}>
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/20"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default ExamBatch;