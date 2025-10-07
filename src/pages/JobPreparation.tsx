import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowRightIcon, BookOpenIcon, BriefcaseIcon, ScaleIcon, GavelIcon, FileTextIcon, GraduationCapIcon, UsersIcon, DownloadIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, StarIcon, CalendarIcon, SearchIcon, MessageCircleIcon, AwardIcon } from 'lucide-react';
const JobPreparation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Intersection Observer for scroll reveal animations
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
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const courseCategories = [{
    id: 1,
    title: 'Judiciary Exam Preparation',
    description: "Comprehensive preparation for judicial service exams with practice tests, previous years' papers, and mock interviews.",
    icon: <GavelIcon className="w-10 h-10" />,
    color: 'navy',
    students: 1250,
    courses: 8,
    rating: 4.9
  }, {
    id: 2,
    title: 'Corporate Law Job Preparation',
    description: 'Master contract drafting, corporate compliance, and gain internship guidance for corporate legal roles.',
    icon: <BriefcaseIcon className="w-10 h-10" />,
    color: 'gold',
    students: 980,
    courses: 6,
    rating: 4.8
  }, {
    id: 3,
    title: 'Advocacy & Litigation Skills',
    description: 'Develop courtroom skills, participate in moot court training, and learn case research methods.',
    icon: <ScaleIcon className="w-10 h-10" />,
    color: 'navy',
    students: 1100,
    courses: 7,
    rating: 4.7
  }, {
    id: 4,
    title: 'Legal Drafting & Documentation',
    description: 'Learn to draft petitions, contracts, agreements, legal notices, and other essential legal documents.',
    icon: <FileTextIcon className="w-10 h-10" />,
    color: 'gold',
    students: 850,
    courses: 5,
    rating: 4.6
  }, {
    id: 5,
    title: 'Soft Skills for Lawyers',
    description: 'Enhance your communication, presentation, and negotiation techniques essential for legal professionals.',
    icon: <MessageCircleIcon className="w-10 h-10" />,
    color: 'navy',
    students: 750,
    courses: 4,
    rating: 4.8
  }, {
    id: 6,
    title: 'Legal Research Methodology',
    description: 'Master the art of legal research, case analysis, and legal writing for academic and professional success.',
    icon: <SearchIcon className="w-10 h-10" />,
    color: 'gold',
    students: 920,
    courses: 6,
    rating: 4.7
  }];
  const featuredPrograms = [{
    id: 1,
    title: 'Judiciary Master Prep – 6 Months Intensive',
    description: 'Our flagship program designed to prepare candidates for judicial service examinations with comprehensive study materials, mock tests, and personalized mentoring.',
    features: ['Daily practice sessions', 'Weekly mock tests', 'One-on-one mentoring', 'Interview preparation', '24/7 doubt clearing'],
    duration: '6 months',
    price: '৳45,000',
    discount: '৳60,000',
    nextBatch: 'July 15, 2023',
    enrolled: 250,
    success: '85% success rate'
  }];
  const resources = [{
    id: 1,
    title: 'Previous Year Question Papers',
    description: "Collection of last 10 years' judicial service exam papers with solutions",
    type: 'PDF',
    size: '25 MB',
    downloads: 1250,
    icon: <FileTextIcon className="w-8 h-8" />
  }, {
    id: 2,
    title: 'Legal Maxims Handbook',
    description: 'Comprehensive list of legal maxims with explanations and case references',
    type: 'PDF',
    size: '12 MB',
    downloads: 980,
    icon: <BookOpenIcon className="w-8 h-8" />
  }, {
    id: 3,
    title: 'Constitutional Law Notes',
    description: 'Detailed notes on constitutional law with case studies and amendments',
    type: 'PDF',
    size: '18 MB',
    downloads: 1540,
    icon: <FileTextIcon className="w-8 h-8" />
  }, {
    id: 4,
    title: 'Interview Preparation Guide',
    description: 'Tips, common questions, and strategies for judicial service interviews',
    type: 'PDF',
    size: '10 MB',
    downloads: 870,
    icon: <FileTextIcon className="w-8 h-8" />
  }];
  const progressStages = [{
    id: 1,
    title: 'Foundation',
    description: 'Build strong fundamentals in key legal subjects',
    duration: '2 months',
    completed: true
  }, {
    id: 2,
    title: 'Advanced Concepts',
    description: 'Deep dive into complex legal principles and case laws',
    duration: '2 months',
    completed: true
  }, {
    id: 3,
    title: 'Practice & Revision',
    description: 'Rigorous practice with mock tests and targeted revisions',
    duration: '1 month',
    completed: false,
    active: true
  }, {
    id: 4,
    title: 'Mock Interviews',
    description: 'Simulated interview sessions with experienced professionals',
    duration: '2 weeks',
    completed: false
  }, {
    id: 5,
    title: 'Final Preparation',
    description: 'Last-minute tips, strategies, and confidence building',
    duration: '1 week',
    completed: false
  }];
  const testimonials = [{
    id: 1,
    name: 'Fahim Rahman',
    position: 'Assistant Judge, Dhaka',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The judiciary preparation program was instrumental in my success. The structured approach, quality study materials, and mock interviews gave me the edge I needed to excel in the examination.',
    program: 'Judiciary Exam Preparation'
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Legal Advisor, Standard Chartered Bank',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The corporate law preparation course equipped me with practical skills that are highly valued in the industry. The internship guidance helped me secure a position at a leading multinational bank.',
    program: 'Corporate Law Job Preparation'
  }, {
    id: 3,
    name: 'Kamal Hossain',
    position: 'Advocate, Supreme Court',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    quote: 'The advocacy and litigation skills program transformed my approach to legal practice. The moot court sessions and case analysis workshops significantly improved my courtroom confidence.',
    program: 'Advocacy & Litigation Skills'
  }];
  return <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#1E3A8A"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              ল’ অ্যাসপিরেন্টদের জন্য জব প্রিপারেশন
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              আইন-সংক্রান্ত ক্যারিয়ারে সফল হতে সাহায্য করবে আমাদের সুশৃঙ্খল কোর্স, বিশেষজ্ঞ পরামর্শ এবং প্র্যাকটিস রিসোর্স।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#1E3A8A] text-white font-medium rounded-md hover:shadow-lg transition-all duration-300 flex items-center group">
                <span>Get Started</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] font-medium rounded-md hover:bg-gray-50 transition-all duration-300">
                Explore Programs
              </button>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <GraduationCapIcon className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">85%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <UsersIcon className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">5,000+</h3>
                <p className="text-gray-600">Students Placed</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <AwardIcon className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">25+</h3>
                <p className="text-gray-600">Expert Mentors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Categories Section */}
      <section className="py-16 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Specialized Preparation Programs
            </h2>
            <p className="text-lg text-gray-600">
              Tailored courses designed to help you excel in various legal
              career paths
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => <div key={category.id} className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`,
            transitionDuration: '500ms',
            transitionProperty: 'all'
          }}>
                <div className={`p-6 ${category.color === 'navy' ? 'bg-[#1E3A8A]/5' : 'bg-[#D4AF37]/5'}`}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${category.color === 'navy' ? 'text-[#1E3A8A] bg-[#1E3A8A]/10' : 'text-[#D4AF37] bg-[#D4AF37]/10'}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UsersIcon className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                      {category.students} students
                    </div>
                    <div className="flex items-center">
                      <BookOpenIcon className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                      {category.courses} courses
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(category.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300'}`} />)}
                    <span className="ml-2 text-sm text-gray-600">
                      {category.rating}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <button className="w-full py-2 px-4 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E3A8A]/90 transition-colors duration-300 flex items-center justify-center">
                    <span>Enroll Now</span>
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Featured Program Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold rounded-full mb-3">
              FEATURED PROGRAM
            </span>
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Our Premier Preparation Program
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive training designed to maximize your chances of
              success
            </p>
          </div>
          {featuredPrograms.map(program => <div key={program.id} className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#D4AF37]">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <div className="uppercase tracking-wide text-sm text-[#1E3A8A] font-semibold mb-1">
                    Premium Program
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-[#1E3A8A] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>Next Batch: {program.nextBatch}</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>{program.enrolled} enrolled</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 p-8 bg-[#1E3A8A]/5 flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-[#1E3A8A]">
                        {program.price}
                      </span>
                      {program.discount && <span className="text-lg text-gray-500 line-through ml-2">
                          {program.discount}
                        </span>}
                    </div>
                    <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                      <div className="flex items-center justify-center mb-2">
                        <AwardIcon className="w-5 h-5 text-[#D4AF37] mr-2" />
                        <span className="font-semibold text-gray-900">
                          {program.success}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Among our previous students
                      </p>
                    </div>
                  </div>
                  <button className="py-3 px-6 bg-[#D4AF37] text-white rounded-md hover:bg-[#D4AF37]/90 transition-colors duration-300 font-medium text-center">
                    Enroll Today
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students who have successfully achieved their career
              goals
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mb-8">
              {testimonials.map((_, index) => <button key={index} onClick={() => setActiveTestimonial(index)} className={`mx-2 w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-[#1E3A8A] w-8' : 'bg-gray-300'}`} aria-label={`View testimonial ${index + 1}`} />)}
            </div>
            {/* Testimonials */}
            <div className="relative h-[300px] md:h-[250px]">
              {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`absolute inset-0 bg-white p-8 rounded-xl shadow-md transition-all duration-500 flex flex-col md:flex-row items-start gap-6 ${activeTestimonial === index ? 'opacity-100 translate-x-0 z-10' : activeTestimonial > index ? 'opacity-0 -translate-x-full -z-10' : 'opacity-0 translate-x-full -z-10'}`}>
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]" />
                      <div className="absolute -bottom-2 -right-2 bg-[#1E3A8A] text-white p-1.5 rounded-full">
                        <StarIcon className="w-4 h-4 fill-[#D4AF37]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#1E3A8A] font-medium">
                        {testimonial.position}
                      </p>
                      <span className="text-sm text-gray-500">
                        {testimonial.program}
                      </span>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  {/* Quote marks */}
                  <div className="absolute top-6 right-8 text-6xl text-[#D4AF37]/20 font-serif leading-none">
                    "
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Downloadable Resources
            </h2>
            <p className="text-lg text-gray-600">
              Access our collection of study materials, question papers, and
              guides
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {resources.map(resource => <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center mb-4 text-[#1E3A8A]">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span>{resource.size}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <DownloadIcon className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <button className="w-full py-2 px-4 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E3A8A]/90 transition-colors duration-300 flex items-center justify-center">
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    <span>Download</span>
                  </button>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] font-medium rounded-md hover:bg-gray-50 transition-all duration-300 flex items-center mx-auto">
              <span>View All Resources</span>
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
      {/* Progress Tracker Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Your Path to Success
            </h2>
            <p className="text-lg text-gray-600">
              Our structured approach ensures steady progress towards your
              career goals
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            <div className="space-y-12 relative">
              {progressStages.map((stage, index) => <div key={stage.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 ${stage.completed ? 'bg-[#1E3A8A] border-[#1E3A8A]/20' : stage.active ? 'bg-[#D4AF37] border-[#D4AF37]/20' : 'bg-white border-gray-200'}`}>
                      {stage.completed && <CheckCircleIcon className="w-full h-full text-white p-1" />}
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'} mb-4 md:mb-0`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md border ${stage.completed ? 'border-[#1E3A8A]/20' : stage.active ? 'border-[#D4AF37] shadow-[#D4AF37]/10' : 'border-gray-100'}`}>
                      <h3 className={`text-xl font-bold mb-2 ${stage.completed ? 'text-[#1E3A8A]' : stage.active ? 'text-[#D4AF37]' : 'text-gray-900'}`}>
                        {stage.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{stage.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{stage.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section removed as requested */}
      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">
              Ready to Take the Next Step in Your Legal Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our job preparation programs and gain the competitive edge
              you need to succeed
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#D4AF37]/90 transition-all duration-300 flex items-center group">
                <span>Enroll Today</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default JobPreparation;