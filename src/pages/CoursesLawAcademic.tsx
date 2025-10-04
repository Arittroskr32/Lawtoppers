import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SearchIcon, FilterIcon, BookIcon, ClockIcon, UsersIcon, StarIcon, ArrowRightIcon, CheckCircleIcon, ChevronDownIcon, TagIcon, XIcon, BarChartIcon, GraduationCapIcon, AwardIcon, BookOpenIcon, FileTextIcon, HeartIcon, ShieldIcon, BriefcaseIcon, BookmarkIcon, ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CoursesLawAcademic: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animatedElements, setAnimatedElements] = useState<{
    [key: string]: boolean;
  }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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
    name: 'All Courses',
    icon: <BookOpenIcon className="w-4 h-4" />
  }, {
    id: 'constitutional',
    name: 'Constitutional Law',
    icon: <ShieldIcon className="w-4 h-4" />
  }, {
    id: 'civil',
    name: 'Civil Law',
    icon: <BookIcon className="w-4 h-4" />
  }, {
    id: 'criminal',
    name: 'Criminal Law',
    icon: <BriefcaseIcon className="w-4 h-4" />
  }, {
    id: 'corporate',
    name: 'Corporate Law',
    icon: <FileTextIcon className="w-4 h-4" />
  }];
  const courses = [{
    id: 1,
    title: 'Constitutional Law Fundamentals',
    category: 'constitutional',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1250,
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.8,
    instructor: 'Dr. Amina Khan',
    description: 'Comprehensive introduction to constitutional principles, rights, and judicial interpretations.',
    price: '৳14,500',
    discount: '৳18,000',
    tags: ['Constitution', 'Fundamental Rights', 'Judicial Review'],
    features: ['Historical development of constitutional law', 'Structure of government and separation of powers', 'Fundamental rights and their limitations', 'Constitutional remedies and judicial review', 'Case studies and landmark judgments'],
    bestseller: true
  }, {
    id: 2,
    title: 'Civil Procedure Code',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 980,
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.9,
    instructor: 'Prof. Rahul Mehta',
    description: 'Master the intricacies of civil procedure and courtroom practices.',
    price: '৳16,000',
    discount: '৳20,000',
    tags: ['Civil Procedure', 'Pleadings', 'Court Practice'],
    features: ['Jurisdiction and res judicata', 'Pleadings and court procedures', 'Execution of decrees', 'Interim orders and injunctions', 'Appeals, reviews and revisions'],
    trending: true
  }, {
    id: 3,
    title: 'Criminal Law and Procedure',
    category: 'criminal',
    image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1100,
    duration: '11 weeks',
    level: 'Advanced',
    rating: 4.7,
    instructor: 'Justice Farida Ahmed',
    description: 'Comprehensive study of criminal offenses, procedures and defense strategies.',
    price: '৳15,500',
    discount: '৳19,000',
    tags: ['Criminal Law', 'Penal Code', 'Evidence'],
    features: ['General principles of criminal liability', 'Specific offenses and their elements', 'Criminal procedure and trial process', 'Bail provisions and sentencing', 'Analysis of landmark criminal cases']
  }, {
    id: 4,
    title: 'Corporate Law & Governance',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 850,
    duration: '9 weeks',
    level: 'Intermediate',
    rating: 4.6,
    instructor: 'Adv. Sarah Chowdhury',
    description: 'Understand corporate structures, regulations and governance principles.',
    price: '৳13,500',
    discount: '৳17,000',
    tags: ['Corporate', 'Company Law', 'Governance'],
    features: ['Company formation and incorporation', 'Corporate management and governance', 'Directors, duties, and liabilities', 'Shareholder rights and remedies', 'Corporate restructuring and insolvency'],
    popular: true
  }, {
    id: 5,
    title: 'Law of Evidence',
    category: 'criminal',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 920,
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.8,
    instructor: 'Dr. Kamal Hassan',
    description: 'Master the rules of evidence and their application in legal proceedings.',
    price: '৳12,000',
    discount: '৳15,000',
    tags: ['Evidence', 'Witnesses', 'Admissibility'],
    features: ['Facts and evidence classification', 'Relevancy and admissibility', 'Documentary and oral evidence', 'Burden of proof and presumptions', 'Expert testimony and scientific evidence']
  }, {
    id: 6,
    title: 'Administrative Law',
    category: 'constitutional',
    image: 'https://images.unsplash.com/photo-1589394104473-010bcf0a6e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 780,
    duration: '7 weeks',
    level: 'Advanced',
    rating: 4.5,
    instructor: 'Prof. Nusrat Jahan',
    description: 'Understand administrative bodies and their regulatory frameworks.',
    price: '৳11,500',
    discount: '৳14,500',
    tags: ['Administrative Law', 'Regulatory', 'Judicial Review'],
    features: ['Administrative authorities and their powers', 'Principles of natural justice', 'Judicial review of administrative actions', 'Delegated legislation', 'Administrative tribunals and remedies']
  }, {
    id: 7,
    title: 'Property Law',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 870,
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.7,
    instructor: 'Adv. Zubair Ahmed',
    description: 'Explore property rights, transfers, and dispute resolution mechanisms.',
    price: '৳13,000',
    discount: '৳16,500',
    tags: ['Property', 'Real Estate', 'Transfer of Property'],
    features: ['Types of property and ownership', 'Transfer of property and registration', 'Leases and licenses', 'Easements and covenants', 'Property disputes and remedies']
  }, {
    id: 8,
    title: 'Banking and Insurance Law',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 730,
    duration: '8 weeks',
    level: 'Advanced',
    rating: 4.6,
    instructor: 'Dr. Imran Khan',
    description: 'Comprehensive coverage of banking regulations and insurance contracts.',
    price: '৳14,000',
    discount: '৳17,500',
    tags: ['Banking', 'Insurance', 'Financial Regulation'],
    features: ['Banking structure and regulations', 'Banker-customer relationship', 'Insurance contracts and principles', 'Claims and dispute resolution', 'Regulatory compliance and reporting']
  }];
  // Testimonials data
  const testimonials = [{
    id: 1,
    name: 'Fahim Rahman',
    role: 'Law Student, Dhaka University',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: "The Constitutional Law course was exceptionally well-structured. The professor's explanations of complex concepts were clear and the case studies were highly relevant. I particularly appreciated the interactive discussions which helped deepen my understanding of constitutional principles."
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    role: 'Practicing Advocate',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.5,
    text: 'As a practicing lawyer, I found the Civil Procedure Code course extremely practical and applicable to my daily work. The course materials were comprehensive and up-to-date with recent amendments. The mock court sessions were particularly valuable in improving my advocacy skills.'
  }, {
    id: 3,
    name: 'Kamal Hossain',
    role: 'Judicial Service Aspirant',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 5,
    text: "The Criminal Law course provided an excellent foundation for my judicial service preparation. The faculty's expertise in breaking down complex legal concepts into understandable segments was remarkable. The regular assessments helped me track my progress effectively."
  }];
  const filteredCourses = courses.filter(course => (activeCategory === 'all' || course.category === activeCategory) && (searchTerm === '' || course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase()) || course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))));
  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'} ${i === Math.floor(rating) && rating % 1 > 0 ? 'text-amber-400 fill-amber-400 opacity-60' : ''}`} />)}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {rating}
        </span>
      </div>;
  };
  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300';
      case 'Advanced':
        return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };
  // Navigate to course details page
  const handleEnroll = (courseId: number) => {
    navigate(`/course-details/${courseId}`);
  };
  return <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80 z-10"></div>
          <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law academic courses" className="w-full h-full object-cover" />
          {/* Animated blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-3 px-6 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full text-indigo-300 text-sm font-semibold animate-fadeIn">
              Expert-Led Legal Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadeInDown bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white">
              Law Academic Courses
            </h1>
            <p className="text-xl text-indigo-100 mb-10 animate-fadeInUp max-w-3xl mx-auto leading-relaxed">
              Build a strong foundation in legal studies with our comprehensive
              academic courses taught by leading legal scholars and
              practitioners
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fadeIn">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center group relative overflow-hidden">
                <span className="relative z-10">Browse Courses</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-indigo-300/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Request Syllabus</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/10"></div>
              </button>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-14 rounded-full border-2 border-white/40 flex items-center justify-center cursor-pointer animate-fadeIn">
                <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-indigo-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/50 dark:border-indigo-500/10 group hover:-translate-y-2 transform">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCapIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                25+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Academic Courses
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/50 dark:border-indigo-500/10 group hover:-translate-y-2 transform">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <AwardIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                18
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert Professors
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/50 dark:border-indigo-500/10 group hover:-translate-y-2 transform">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                8,500+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Students Enrolled
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/50 dark:border-indigo-500/10 group hover:-translate-y-2 transform">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpenIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                95%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Courses Section */}
      <section id="courses" className="py-20 bg-white dark:bg-slate-900" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-3">
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-20 mr-4"></div>
              <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Explore Our Offerings
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-20 ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-3 text-gray-800 dark:text-white">
              Available Academic Courses
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
              Choose from our comprehensive academic courses designed by legal
              experts to help you excel in your legal studies and career
            </p>
          </div>
          {/* Search and Category Filter */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
              <div className="relative max-w-md w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500" />
                </div>
                <input type="text" placeholder="Search courses, instructors, or topics..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-12 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" />
                {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <XIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>}
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${activeCategory === category.id ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <span className={activeCategory === category.id ? 'text-white' : 'text-indigo-500 dark:text-indigo-400'}>
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </button>)}
            </div>
          </div>
          {/* Empty state when no courses match filter */}
          {filteredCourses.length === 0 && <div className="text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-2xl animate-fadeIn max-w-3xl mx-auto">
              <FilterIcon className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
                No courses found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or filter criteria to find what
                you're looking for
              </p>
              <button onClick={() => {
            setActiveCategory('all');
            setSearchTerm('');
          }} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Reset filters
              </button>
            </div>}
          {/* Courses Grid */}
          {filteredCourses.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visibleCourses.map((course, index) => <div key={course.id} className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 relative group transform ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:-translate-y-2 cursor-pointer`} style={{
            transitionDelay: `${Math.min(index, 3) * 100}ms`
          }} onMouseEnter={() => setHoveredCard(course.id)} onMouseLeave={() => setHoveredCard(null)} onClick={() => handleEnroll(course.id)}>
                  {/* Image Container with Overlay */}
                  <div className="relative overflow-hidden h-56">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                    {/* Special badges */}
                    {course.bestseller && <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber-500/90 text-white text-xs font-bold rounded-lg backdrop-blur-sm flex items-center animate-pulse-glow">
                        <StarIcon className="w-3.5 h-3.5 mr-1.5" />
                        Bestseller
                      </div>}
                    {course.trending && <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500/90 text-white text-xs font-bold rounded-lg backdrop-blur-sm flex items-center animate-pulse-glow">
                        <BarChartIcon className="w-3.5 h-3.5 mr-1.5" />
                        Trending
                      </div>}
                    {course.popular && <div className="absolute top-4 left-4 px-3 py-1.5 bg-purple-500/90 text-white text-xs font-bold rounded-lg backdrop-blur-sm flex items-center animate-pulse-glow">
                        <HeartIcon className="w-3.5 h-3.5 mr-1.5" />
                        Popular
                      </div>}
                    {/* Level Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm ${getLevelClass(course.level)} transform transition-transform duration-300 group-hover:scale-105`}>
                        {course.level}
                      </div>
                    </div>
                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 flex flex-col items-end">
                      <span className="text-white text-xl font-bold group-hover:animate-pulse-glow">
                        {course.price}
                      </span>
                      {course.discount && <span className="text-gray-300 text-sm line-through">
                          {course.discount}
                        </span>}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    {/* Title with animated underline on hover */}
                    <div className="relative mb-3 pb-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 h-14">
                        {course.title}
                      </h3>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                    </div>
                    {/* Instructor */}
                    <div className="flex items-center mb-4">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-2 group-hover:animate-bounce-slow">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.instructor}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 h-10">
                      {course.description}
                    </p>
                    {/* Ratings */}
                    <div className="mb-4">{renderStars(course.rating)}</div>
                    {/* Stats with Icons */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-5">
                      <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        <UsersIcon className="w-4 h-4 mr-1.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        <ClockIcon className="w-4 h-4 mr-1.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.slice(0, 3).map((tag, i) => <span key={i} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md flex items-center">
                          <TagIcon className="w-3 h-3 mr-1 text-indigo-500 dark:text-indigo-400" />
                          {tag}
                        </span>)}
                      {course.tags.length > 3 && <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{course.tags.length - 3} more
                        </span>}
                    </div>
                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <button onClick={e => {
                  e.stopPropagation();
                  handleEnroll(course.id);
                }} className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                        <span className="relative z-10">Enroll Now</span>
                        <ArrowRightIcon className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                  {/* Shine effect on hover */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine pointer-events-none"></div>
                </div>)}
            </div>}
          {/* Show More Button */}
          {filteredCourses.length > 4 && <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${animatedElements.main ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button onClick={() => setShowAll(!showAll)} className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl transition-all duration-500 relative group overflow-hidden">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {showAll ? 'Show Less' : 'View More Courses'}
                </span>
                <ChevronDownIcon className={`ml-2 w-5 h-5 inline-block transition-transform duration-300 relative z-10 ${showAll ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
              </button>
            </div>}
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-indigo-50 dark:bg-slate-800/50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${animatedElements.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
              Our Advantages
            </div>
            <h2 className="text-4xl font-bold mb-5 text-gray-800 dark:text-white">
              Why Choose Our Academic Courses?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our academic courses are designed to provide a comprehensive
              understanding of legal principles while developing practical
              skills essential for a successful legal career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <GraduationCapIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
            title: 'Expert Faculty',
            description: 'Learn from distinguished legal scholars, retired judges, and practicing attorneys with decades of experience in their respective fields.',
            color: 'indigo',
            delay: 0
          }, {
            icon: <BookOpenIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: 'Comprehensive Curriculum',
            description: 'Courses cover theoretical foundations, practical applications, case analyses, and current legal developments in each subject area.',
            color: 'blue',
            delay: 100
          }, {
            icon: <FileTextIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
            title: 'Updated Study Materials',
            description: 'Access to meticulously prepared study materials that include recent amendments, landmark judgments, and comparative analyses.',
            color: 'purple',
            delay: 200
          }, {
            icon: <BarChartIcon className="w-8 h-8 text-green-600 dark:text-green-400" />,
            title: 'Regular Assessments',
            description: 'Continuous evaluation through assignments, case studies, mock tests, and examinations to track your progress and identify areas for improvement.',
            color: 'green',
            delay: 300
          }, {
            icon: <UsersIcon className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
            title: 'Interactive Learning',
            description: 'Engage in discussions, debates, moot courts, and group activities that enhance critical thinking and legal reasoning skills.',
            color: 'amber',
            delay: 400
          }, {
            icon: <AwardIcon className="w-8 h-8 text-red-600 dark:text-red-400" />,
            title: 'Practical Application',
            description: 'Bridge the gap between theory and practice through case studies, legal drafting exercises, and simulated courtroom proceedings.',
            color: 'red',
            delay: 500
          }].map((feature, index) => <div key={index} className={`p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-indigo-100/30 dark:border-indigo-500/10 group transform ${animatedElements.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:-translate-y-2`} style={{
            transitionDelay: `${feature.delay}ms`
          }}>
                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-${feature.color}-600 dark:group-hover:text-${feature.color}-400`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                {/* Learn more link */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a href="#" className={`text-${feature.color}-600 dark:text-${feature.color}-400 font-medium flex items-center group-hover:underline`}>
                    Learn more
                    <ChevronRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section with horizontal animations */}
      <section className="py-20 bg-white dark:bg-slate-900" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${animatedElements.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-3 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 text-sm font-semibold">
              Success Stories
            </div>
            <h2 className="text-4xl font-bold mb-5 text-gray-800 dark:text-white">
              Student Testimonials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from our students about their learning experience with our
              academic courses
            </p>
          </div>
          {/* Testimonial tabs */}
          <div className="flex justify-center mb-10">
            {testimonials.map((testimonial, index) => <button key={testimonial.id} onClick={() => setActiveTab(index)} className={`mx-2 w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeTab === index ? 'bg-indigo-600 w-10' : 'bg-gray-300 dark:bg-gray-700'}`} aria-label={`View testimonial from ${testimonial.name}`} />)}
          </div>
          {/* Testimonial cards with horizontal animation */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-600/10 rounded-full filter blur-xl z-0"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600/10 rounded-full filter blur-xl z-0"></div>
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl transition-all duration-700 border border-indigo-100/50 dark:border-indigo-500/10 relative z-10 ${activeTab === index ? 'opacity-100 translate-x-0' : activeTab > index ? 'opacity-0 -translate-x-full absolute inset-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-xl object-cover border-2 border-indigo-300 dark:border-indigo-700" />
                      <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-1.5 rounded-lg">
                        <StarIcon className="w-4 h-4 fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
                {/* Quote marks */}
                <div className="absolute top-6 right-8 text-7xl text-indigo-200 dark:text-indigo-900/30 font-serif leading-none opacity-60">
                  "
                </div>
              </div>)}
          </div>
          {/* View all testimonials button */}
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              View all testimonials
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden" ref={ctaRef}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${animatedElements.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold animate-pulse-glow">
              Limited Time Offer - 20% Off
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Ready to Excel in Your Legal Studies?
            </h2>
            <p className="text-xl mb-10 text-indigo-100 animate-fadeInUp max-w-2xl mx-auto leading-relaxed" style={{
            animationDelay: '200ms'
          }}>
              Enroll in our academic courses today and take the first step
              towards building a strong foundation for your legal career
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-700/30 transition-all duration-300 animate-fadeIn flex items-center group" style={{
              animationDelay: '400ms'
            }}>
                <span>Enroll Now</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 animate-fadeIn" style={{
              animationDelay: '600ms'
            }}>
                Download Brochure
              </button>
            </div>
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="text-indigo-100">30-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="text-indigo-100">Lifetime Access</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="text-indigo-100">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default CoursesLawAcademic;