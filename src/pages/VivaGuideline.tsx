import React, { useEffect, useState, useRef } from 'react';
import { ArrowRightIcon, BookOpenIcon, CheckIcon, XIcon, FileTextIcon, GraduationCapIcon, UsersIcon, DownloadIcon, ClockIcon, StarIcon, CalendarIcon, MessageCircleIcon, PlayIcon, BriefcaseIcon, AwardIcon, AlertTriangleIcon, CheckCircleIcon, ThumbsUpIcon, ThumbsDownIcon, ClipboardListIcon } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const VivaGuideline: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // FAQ state removed
  const [isVisible, setIsVisible] = useState(false);
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
  // FAQ toggle function removed
  const guidelines = [{
    id: 1,
    title: 'Know the Syllabus',
    description: 'Thoroughly understand your course syllabus, focusing on key topics that are frequently asked in viva examinations. Create a structured study plan covering all essential areas of law.',
    icon: <BookOpenIcon className="w-6 h-6" />,
    tips: ['Create a topic checklist', 'Identify high-yield subjects', 'Review past viva questions', 'Organize notes by importance']
  }, {
    id: 2,
    title: 'Understand Case Laws',
    description: 'Build a repository of landmark cases relevant to your course. Practice citing cases confidently with proper names, years, and key principles established in each judgment.',
    icon: <BriefcaseIcon className="w-6 h-6" />,
    tips: ['Memorize case citations', 'Understand ratio decidendi', 'Practice case summaries', 'Connect cases to principles']
  }, {
    id: 3,
    title: 'Practice with Peers',
    description: 'Conduct mock viva sessions with classmates or study groups. Take turns asking challenging questions and providing constructive feedback on content and delivery.',
    icon: <UsersIcon className="w-6 h-6" />,
    tips: ['Schedule regular mock sessions', 'Record and review your answers', 'Seek honest feedback', 'Simulate exam conditions']
  }, {
    id: 4,
    title: 'Build Communication Skills',
    description: 'Develop clear articulation, appropriate legal terminology, and professional body language. Practice maintaining eye contact and speaking with measured confidence.',
    icon: <MessageCircleIcon className="w-6 h-6" />,
    tips: ['Eliminate filler words', 'Practice concise answers', 'Work on voice modulation', 'Master professional posture']
  }, {
    id: 5,
    title: 'Handle Stress',
    description: 'Learn techniques to manage anxiety and stress during examinations. Develop strategies for staying calm under pressure and recovering from difficult questions.',
    icon: <AlertTriangleIcon className="w-6 h-6" />,
    tips: ['Practice deep breathing', 'Visualize success scenarios', 'Prepare recovery phrases', 'Get adequate rest before exam']
  }];
  const resources = [{
    id: 1,
    title: 'Viva Question Bank',
    description: 'Collection of 500+ commonly asked viva questions across various law subjects',
    type: 'PDF',
    size: '2.5 MB',
    downloads: 1250,
    icon: <FileTextIcon className="w-8 h-8" />
  }, {
    id: 2,
    title: 'Case Citation Guide',
    description: 'Comprehensive guide to properly citing landmark cases during your viva',
    type: 'PDF',
    size: '1.8 MB',
    downloads: 980,
    icon: <BookOpenIcon className="w-8 h-8" />
  }, {
    id: 3,
    title: '30-Day Viva Prep Schedule',
    description: 'Day-by-day preparation plan to optimize your viva examination readiness',
    type: 'PDF',
    size: '1.2 MB',
    downloads: 1540,
    icon: <CalendarIcon className="w-8 h-8" />
  }];
  const videos = [{
    id: 1,
    title: 'How to Answer Effectively in a Viva',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    views: '5.2K'
  }, {
    id: 2,
    title: 'Body Language Tips for Legal Professionals',
    duration: '08:30',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    views: '3.8K'
  }, {
    id: 3,
    title: 'Case Law Presentation Techniques',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    views: '4.5K'
  }];
  const dosDonts = {
    dos: ['Prepare concise case briefs for quick reference', 'Answer questions directly and to the point', 'Maintain professional appearance and demeanor', 'Use appropriate legal terminology and concepts', 'Politely ask for clarification if needed', 'Provide real-world examples to support answers', 'Show enthusiasm and genuine interest in the subject'],
    donts: ["Avoid filler words like 'um', 'like', or 'you know'", "Don't argue unnecessarily with examiners", 'Avoid memorizing answers word-for-word', "Don't provide excessive information not asked for", 'Avoid casual language or slang during examination', "Don't interrupt the examiner while they're speaking", 'Avoid nervous habits like fidgeting or playing with items']
  };
  const testimonials = [{
    id: 1,
    name: 'Fahim Ahmed',
    position: 'LLB Graduate, Dhaka University',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The viva guidelines and practice sessions completely transformed my approach to oral examinations. I was able to articulate my knowledge confidently and secured top marks in my final assessment.',
    rating: 5
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Bar Council Exam Qualifier',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The mock viva sessions were incredibly beneficial. They simulated real examination conditions and helped me overcome my anxiety. The feedback I received improved my answers significantly.',
    rating: 5
  }, {
    id: 3,
    name: 'Rahul Sharma',
    position: 'Judicial Service Aspirant',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    quote: "The case citation techniques and communication tips helped me stand out during my judicial service interview. I'm grateful for the structured approach to viva preparation that LAWTOPPERS provides.",
    rating: 4
  }];
  // FAQ data removed
  const workshopDetails = {
    title: '2-Week Viva Mastery Program',
    features: ['10 Mock Viva Sessions with Expert Feedback', 'Case Law Citation Workshops', 'Communication Skills Enhancement', 'Stress Management Techniques', 'Personal Improvement Plan', 'Video Recording and Analysis'],
    startDate: 'June 15, 2023',
    duration: '2 Weeks (Weekday Evenings)',
    price: '৳12,000',
    discount: '৳15,000',
    seats: 25,
    enrolled: 18
  };
  return <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                আপনার মৌখিক পরীক্ষা আত্মবিশ্বাসের সঙ্গে জয় করুন
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                মৌখিক পরীক্ষা পরীক্ষার মুখোমুখি হওয়া আইন শিক্ষার্থীদের জন্য ধাপে ধাপে নির্দেশিকা, প্রস্তুতির কৌশল এবং বিশেষজ্ঞ টিপস।
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#1E3A8A] text-white font-medium rounded-md hover:bg-[#1E3A8A]/90 hover:shadow-lg shadow-md transition-all duration-300 flex items-center group">
                  <span>Start Preparing</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] font-medium rounded-md hover:bg-gray-50 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1E3A8A]/10 rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law student preparing for viva" className="w-full h-auto rounded-lg shadow-xl relative z-10" />
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <GraduationCapIcon className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <UsersIcon className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
                <p className="text-gray-600">Students Guided</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <ClipboardListIcon className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Practice Questions</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <AwardIcon className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">12+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Guideline Steps Section */}
      <section className="py-16 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              5-Step Viva Preparation Guide
            </h2>
            <p className="text-lg text-gray-600">
              Follow our proven methodology to excel in your viva examination
            </p>
          </div>
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#1E3A8A]/20 transform -translate-x-1/2"></div>
            {guidelines.map((step, index) => <div key={step.id} className={`mb-12 md:mb-24 relative ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            transition: 'all 0.6s ease',
            transitionDelay: `${index * 0.2}s`
          }}>
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.id}
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-lg mr-3">
                          {step.id}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="hidden md:block text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                          Quick Tips
                        </h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, i) => <li key={i} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-[#1E3A8A]/10 flex-shrink-0 flex items-center justify-center mt-0.5 mr-2">
                                <CheckIcon className="w-3 h-3 text-[#1E3A8A]" />
                              </div>
                              <span className="text-sm text-gray-700">
                                {tip}
                              </span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/12 flex justify-center items-center">
                    <div className={`w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center md:transform ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`}>
                      <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Video & Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Training Videos & Resources
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your preparation with our curated videos and downloadable
              materials
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {videos.map(video => <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <PlayIcon className="w-8 h-8 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <PlayIcon className="w-4 h-4 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                    <button className="text-[#1E3A8A] font-medium hover:underline">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Downloadable Resources */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Downloadable Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map(resource => <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center mb-4 text-[#1E3A8A]">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
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
          </div>
        </div>
      </section>
      {/* Workshop Highlight Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#D4AF37]">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <div className="uppercase tracking-wide text-sm text-[#1E3A8A] font-semibold mb-1">
                    Featured Program
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {workshopDetails.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    An intensive program designed to transform your viva
                    performance through personalized coaching, mock sessions,
                    and expert feedback.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Program Features
                    </h4>
                    <ul className="space-y-2">
                      {workshopDetails.features.map((feature, index) => <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-[#1E3A8A] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>Starts: {workshopDetails.startDate}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>{workshopDetails.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 text-[#1E3A8A] mr-2" />
                      <span>
                        {workshopDetails.enrolled}/{workshopDetails.seats} Seats
                        Filled
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 p-8 bg-[#1E3A8A]/5 flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-[#1E3A8A]">
                        {workshopDetails.price}
                      </span>
                      {workshopDetails.discount && <span className="text-lg text-gray-500 line-through ml-2">
                          {workshopDetails.discount}
                        </span>}
                    </div>
                    <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                      <div className="flex items-center justify-center mb-2">
                        <AwardIcon className="w-5 h-5 text-[#D4AF37] mr-2" />
                        <span className="font-semibold text-gray-900">
                          Certification Included
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Receive a performance assessment certificate upon
                        completion
                      </p>
                    </div>
                  </div>
                  <button className="py-3 px-6 bg-[#D4AF37] text-[#1E3A8A] rounded-md hover:bg-[#D4AF37]/90 transition-colors duration-300 font-medium text-center">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Do's and Don'ts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Viva Do's and Don'ts
            </h2>
            <p className="text-lg text-gray-600">
              Essential practices to follow and common mistakes to avoid
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's Column */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ThumbsUpIcon className="w-6 h-6 text-green-500 mr-2" />
                <span>Do's</span>
              </h3>
              <ul className="space-y-4">
                {dosDonts.dos.map((item, index) => <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
            {/* Don'ts Column */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ThumbsDownIcon className="w-6 h-6 text-red-500 mr-2" />
                <span>Don'ts</span>
              </h3>
              <ul className="space-y-4">
                {dosDonts.donts.map((item, index) => <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <XIcon className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
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
              Hear from students who aced their viva examinations using our
              guidelines
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
      {/* FAQ Section removed as requested */}
      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">
              Ready to Excel in Your Viva?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our specialized viva preparation programs and gain the
              confidence to impress your examiners
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#D4AF37]/90 transition-all duration-300 flex items-center group">
                <span>Enroll in Workshop</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300">
                Download Free Guide
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default VivaGuideline;