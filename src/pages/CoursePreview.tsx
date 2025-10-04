import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BookOpenIcon, ClipboardCheckIcon, ClockIcon, FileTextIcon, TargetIcon, StarIcon, PlayIcon, BookmarkIcon, ChevronDownIcon, ChevronUpIcon, ArrowLeftIcon, CheckCircleIcon, ShieldIcon, UsersIcon, DownloadIcon, Share2Icon, GraduationCapIcon, BriefcaseIcon, AwardIcon, HeartIcon, CrownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CoursePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'reviews'>('classes');
  const [expandedLessonId, setExpandedLessonId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Animation on mount
    setIsVisible(true);
    // Add event listener for tab visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  // Pause video when tab loses focus
  const handleVisibilityChange = () => {
    if (document.hidden && videoRef.current) {
      // This is a simple way to attempt to pause the video, but YouTube iframe API would be more reliable
      const iframe = videoRef.current;
      const src = iframe.src;
      iframe.src = src;
    }
  };
  const toggleLessonExpand = (id: number) => {
    setExpandedLessonId(expandedLessonId === id ? null : id);
  };
  const previewClasses = [{
    id: 1,
    title: 'ইন্ট্রোডাকশন টু সিভিল প্রসিডিউর কোড',
    duration: '12:45',
    videoId: '5zvnFM2BXqY'
  }, {
    id: 2,
    title: 'সিভিল সুট ও প্লিডিং',
    duration: '18:30',
    videoId: '5zvnFM2BXqY'
  }, {
    id: 3,
    title: 'সামন ও এক্সিকিউশন',
    duration: '15:20',
    videoId: '5zvnFM2BXqY'
  }];
  const reviews = [{
    id: 1,
    name: 'Rahim Ahmed',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    rating: 5,
    date: '2 months ago',
    comment: 'অসাধারণ কোর্স। BJS পরীক্ষায় সাফল্য পেতে খুব সাহায্য করেছে।'
  }, {
    id: 2,
    name: 'Nasrin Sultana',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
    rating: 4,
    date: '1 month ago',
    comment: 'কন্টেন্ট গুলো খুবই স্ট্রাকচার্ড। লেকচার ভিডিও গুলো সহজবোধ্য।'
  }, {
    id: 3,
    name: 'Kamal Hossain',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    rating: 5,
    date: '3 weeks ago',
    comment: 'ইনস্ট্রাক্টর এক্সপ্লেনেশন অসাধারণ। প্র্যাকটিস কুইজগুলো খুবই হেল্পফুল।'
  }];
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const playVideo = (videoId: string) => {
    if (videoRef.current) {
      videoRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      setIsPlaying(true);
    }
  };
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
      </div>;
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white pt-24 pb-8 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"
        }}></div>
        </div>
        {/* Animated Gradient Blob */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -left-32 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center text-sm mb-6">
            <button onClick={handleBack} className="flex items-center hover:underline mr-2 transition-colors duration-300">
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              Back
            </button>
            <span className="mx-1">|</span>
            <a href="/" className="hover:underline transition-colors duration-300">
              Home
            </a>
            <span className="mx-1">/</span>
            <a href="/courses" className="hover:underline transition-colors duration-300">
              Courses
            </a>
            <span className="mx-1">/</span>
            <span className="font-medium">Course Preview</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white max-w-2xl">
            BJS Crash Course: CPC & CrPC Essentials
          </h1>
          <p className="text-xl text-white/80 mb-6 max-w-2xl">
            Master CPC for BJS in 30 days
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center">
              {renderStars(averageRating)}
              <span className="ml-1 font-medium text-white">
                ({reviews.length} reviews)
              </span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-4 h-4 mr-1 text-indigo-300" />
              <span>1,250+ enrolled</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1 text-indigo-300" />
              <span>Last updated: May 2023</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Course Details */}
          <div className="w-full lg:w-[58%] order-1">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Course Details Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  About the Course
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
                  <p>
                    এই কোর্সে আপনি সিলেবাসভিত্তিক লেকচার, কেস সামারি ও
                    এক্সাম-ফোকাসড কুইজের মাধ্যমে দ্রুত প্রস্তুতি নিতে পারবেন।
                  </p>
                  <p>
                    প্রতিটি টপিকের সাথে প্র্যাকটিস সেট ও বাস্তব পরীক্ষার ধাঁচে
                    মক টেস্ট যুক্ত করা হয়েছে।
                  </p>
                  <p>
                    আপনি অনলাইন লাইভ ক্লাসে অংশগ্রহণ করে ইনস্ট্রাক্টরের সাথে
                    সরাসরি আপনার প্রশ্ন নিয়ে আলোচনা করতে পারবেন।
                  </p>
                </div>
                {/* Course Highlights */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-800/40 p-2 rounded-lg mr-4">
                      <GraduationCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                        Expert Instructors
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Learn from experienced judges and legal scholars
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-800/40 p-2 rounded-lg mr-4">
                      <ClipboardCheckIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                        Practice Tests
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Weekly quizzes and mock exams
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-800/40 p-2 rounded-lg mr-4">
                      <FileTextIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                        Study Materials
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Comprehensive resources and case studies
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-800/40 p-2 rounded-lg mr-4">
                      <AwardIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                        Certificate
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive a certificate upon completion
                      </p>
                    </div>
                  </div>
                </div>
                {/* Course Features */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                      </div>
                      <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm">
                        Lifetime access to course materials
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                      </div>
                      <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm">
                        Weekly live Q&A sessions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                      </div>
                      <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm">
                        Downloadable study materials
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                      </div>
                      <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm">
                        Mobile-friendly learning experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Instructor Info Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <UsersIcon className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  ইনস্ট্রাক্টর
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="mb-4 sm:mb-0 sm:mr-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900 shadow-md">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-1.5 rounded-full">
                      <CrownIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-800 dark:text-white">
                      Adv. Rahim Hasan
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Senior Faculty (Procedural Law)
                    </p>
                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                      15+ years experience in teaching BJS candidates
                    </p>
                    <div className="flex items-center mt-3 space-x-4">
                      <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors flex items-center">
                        <span>View Profile</span>
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                      </a>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <BriefcaseIcon className="w-4 h-4 mr-1" />
                        <span>8 Courses</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <StarIcon className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* What You'll Learn */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileTextIcon className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  What You'll Learn
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      সিভিল প্রসিজার কোডের মূল বিধানগুলো সম্পর্কে বিস্তারিত
                      ধারণা
                    </span>
                  </li>
                  <li className="flex items-start bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      বিগত সালের BJS পরীক্ষার প্রশ্ন ও উত্তর বিশ্লেষণ
                    </span>
                  </li>
                  <li className="flex items-start bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      প্লিডিং, সামন, ডিক্রি ও এক্সিকিউশন সম্পর্কে ব্যবহারিক
                      জ্ঞান
                    </span>
                  </li>
                  <li className="flex items-start bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      ক্রিমিনাল প্রসিজার কোডের গুরুত্বপূর্ণ ধারা ও বিধিগুলো
                    </span>
                  </li>
                  <li className="flex items-start bg-gray-50 dark:bg-slate-700/30 p-3 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      আদালতে ব্যবহারিক প্রয়োগের উদাহরণ ও কেস স্টাডি
                    </span>
                  </li>
                </ul>
              </div>
              {/* Preview Classes & Reviews Tabs - Moved from right column to left for mobile */}
              <div className="lg:hidden bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${activeTab === 'classes' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`} onClick={() => setActiveTab('classes')}>
                    প্রিভিউ ক্লাস
                  </button>
                  <button className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${activeTab === 'reviews' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`} onClick={() => setActiveTab('reviews')}>
                    রিভিউস
                  </button>
                </div>
                <div className="p-5">
                  {activeTab === 'classes' ? <div className="space-y-4 animate-fadeIn">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                        Free Preview Classes
                      </h3>
                      <div>
                        {previewClasses.map(previewClass => <div key={previewClass.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0 py-2">
                            <button className="flex items-center justify-between w-full py-2 px-1" onClick={() => toggleLessonExpand(previewClass.id)} aria-expanded={expandedLessonId === previewClass.id} aria-controls={`lesson-content-${previewClass.id}`}>
                              <div className="flex items-center">
                                <div className="mr-3 text-indigo-600 dark:text-indigo-400">
                                  {expandedLessonId === previewClass.id ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                                </div>
                                <div className="text-left">
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                                    {previewClass.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {previewClass.duration}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                                Free
                              </span>
                            </button>
                            {expandedLessonId === previewClass.id && <div id={`lesson-content-${previewClass.id}`} className="px-2 pb-3 animate-fadeIn">
                                <button className="flex items-center justify-center w-full py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors" onClick={() => playVideo(previewClass.videoId)}>
                                  <PlayIcon className="h-4 w-4 mr-2" />
                                  <span className="font-medium">
                                    Watch Preview
                                  </span>
                                </button>
                              </div>}
                          </div>)}
                      </div>
                    </div> : <div className="animate-fadeIn">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-2">
                          {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {averageRating.toFixed(1)} • {reviews.length} reviews
                        </span>
                      </div>
                      <div className="space-y-4">
                        {reviews.map(review => <div key={review.id} className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-4 mb-2 last:mb-0">
                            <div className="flex items-center mb-2">
                              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                              <div>
                                <div className="font-medium text-gray-800 dark:text-gray-100">
                                  {review.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {review.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex mb-2">
                              {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`h-4 w-4 ${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {review.comment}
                            </p>
                          </div>)}
                      </div>
                      <div className="mt-4 text-center">
                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium">
                          View all reviews
                        </button>
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Video and Course Details */}
          <div className="w-full lg:w-[42%] order-2">
            <div className="lg:sticky lg:top-24">
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Video Player - Now on right side */}
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="relative pt-[56.25%]">
                    <iframe ref={videoRef} src="https://www.youtube.com/embed/5zvnFM2BXqY" title="Course Preview Video" className="absolute top-0 left-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    {/* Video Overlay when not playing */}
                    {!isPlaying && <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                        <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                          <PlayIcon className="h-10 w-10 text-white" />
                        </div>
                      </div>}
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <PlayIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Course Introduction
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <Share2Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <BookmarkIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course Price Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-100 dark:border-gray-700">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-gray-800 dark:text-white">
                          ৳12,000
                        </span>
                        <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">
                          ৳15,000
                        </span>
                      </div>
                      <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                        20% OFF
                      </span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                        Enroll Now
                      </button>
                      <button className="w-full py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
                        <BookmarkIcon className="w-4 h-4 mr-2" />
                        Save for Later
                      </button>
                    </div>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <ShieldIcon className="w-4 h-4 inline-block mr-1" />
                      7-day money-back guarantee
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                        This course includes:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <BookOpenIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                          <span>24 recorded + 6 live classes</span>
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <ClockIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                          <span>12 weeks access</span>
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <FileTextIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                          <span>Comprehensive study materials</span>
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <DownloadIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                          <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <ClipboardCheckIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                          <span>Weekly quizzes and final assessment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Enrollment Stats */}
                  <div className="bg-gray-50 dark:bg-slate-700/30 p-4 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <HeartIcon className="w-5 h-5 text-pink-500 mr-2 fill-pink-500" />
                      <span>156 people favorited this</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      <span className="font-semibold">95%</span> completion rate
                    </div>
                  </div>
                </div>
                {/* Preview Classes & Reviews Tabs - Only visible on desktop */}
                <div className="hidden lg:block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex border-b border-gray-200 dark:border-gray-700">
                    <button className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${activeTab === 'classes' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`} onClick={() => setActiveTab('classes')}>
                      প্রিভিউ ক্লাস
                    </button>
                    <button className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${activeTab === 'reviews' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`} onClick={() => setActiveTab('reviews')}>
                      রিভিউস
                    </button>
                  </div>
                  <div className="p-5">
                    {activeTab === 'classes' ? <div className="space-y-4 animate-fadeIn">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                          Free Preview Classes
                        </h3>
                        {previewClasses.map(previewClass => <div key={previewClass.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors cursor-pointer mb-2 group" onClick={() => playVideo(previewClass.videoId)}>
                            <div className="flex items-center flex-1">
                              <button className="bg-indigo-600 text-white p-2.5 rounded-full mr-3 flex-shrink-0 group-hover:bg-indigo-700 transition-colors" aria-label="Play video">
                                <PlayIcon className="h-4 w-4" />
                              </button>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-gray-800 dark:text-gray-100 truncate">
                                  {previewClass.title}
                                </h4>
                              </div>
                              <div className="flex items-center ml-3 space-x-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                  {previewClass.duration}
                                </p>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                                  Free
                                </span>
                              </div>
                            </div>
                          </div>)}
                      </div> : <div className="animate-fadeIn">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-2">
                            {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {averageRating.toFixed(1)} • {reviews.length}{' '}
                            reviews
                          </span>
                        </div>
                        <div className="space-y-4">
                          {reviews.map(review => <div key={review.id} className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-4 mb-2 last:mb-0">
                              <div className="flex items-center mb-2">
                                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                                <div>
                                  <div className="font-medium text-gray-800 dark:text-gray-100">
                                    {review.name}
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {review.date}
                                  </div>
                                </div>
                              </div>
                              <div className="flex mb-2">
                                {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`h-4 w-4 ${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {review.comment}
                              </p>
                            </div>)}
                        </div>
                        <div className="mt-4 text-center">
                          <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium">
                            View all reviews
                          </button>
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 p-4 shadow-lg border-t border-gray-200 dark:border-gray-700 z-40">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              ৳12,000
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
              ৳15,000
            </div>
          </div>
          <button className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
      <Footer />
    </div>;
};
export default CoursePreview;