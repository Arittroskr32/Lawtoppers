import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PlayIcon, CheckCircleIcon, ClockIcon, UsersIcon, BookOpenIcon, AwardIcon, StarIcon, BarChartIcon, FileTextIcon, LockIcon, UnlockIcon, DownloadIcon, ShareIcon, BookmarkIcon, ThumbsUpIcon, ChevronRightIcon, ArrowRightIcon, HeartIcon, ShieldCheckIcon, GraduationCapIcon, CalendarIcon } from 'lucide-react';
const CourseDetails: React.FC = () => {
  const {
    courseId
  } = useParams<{
    courseId: string;
  }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  // Sample course data - in a real app, this would come from an API
  const course = {
    id: parseInt(courseId || '1'),
    title: courseId === '1' ? 'Civil Procedure Code' : courseId === '2' ? 'Criminal Law Basics' : courseId === '3' ? 'Constitutional Rights' : 'Advanced Legal Studies',
    category: 'civil',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    students: 1250,
    duration: '12 weeks',
    lectures: 48,
    quizzes: 12,
    level: 'Advanced',
    rating: 4.9,
    reviews: 324,
    instructor: {
      name: 'Dr. Amina Khan',
      title: 'Senior Professor of Law',
      bio: 'Dr. Amina Khan has over 15 years of experience in legal education and practice. She specializes in civil law and has authored several books on the subject.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    description: 'Master the intricacies of civil procedure and courtroom practices with this comprehensive course designed for law students and practicing lawyers. Learn from experienced professionals and gain practical insights into the procedural aspects of civil litigation.',
    price: '৳16,000',
    discount: '৳20,000',
    lastUpdated: 'June 15, 2023',
    language: 'English, Bengali',
    certificate: true,
    features: ['Lifetime access to course materials', 'Personalized feedback on assignments', 'Interactive live sessions with instructors', 'Access to exclusive legal case studies', 'Practice tests and mock trials', 'Certificate of completion', 'Downloadable resources and templates', 'Mobile and tablet friendly content'],
    curriculum: [{
      title: 'Introduction to Civil Procedure',
      lessons: [{
        title: 'Course Overview and Objectives',
        duration: '15:30',
        free: true
      }, {
        title: 'Historical Evolution of Civil Procedure',
        duration: '42:15',
        free: false
      }, {
        title: 'Fundamental Principles',
        duration: '38:45',
        free: false
      }]
    }, {
      title: 'Jurisdiction and Venue',
      lessons: [{
        title: 'Subject Matter Jurisdiction',
        duration: '55:20',
        free: false
      }, {
        title: 'Personal Jurisdiction',
        duration: '48:10',
        free: false
      }, {
        title: 'Venue Rules and Transfer',
        duration: '36:45',
        free: false
      }, {
        title: 'Case Study: Jurisdiction Challenges',
        duration: '25:30',
        free: false
      }]
    }, {
      title: 'Pleadings and Motions',
      lessons: [{
        title: 'Complaint and Summons',
        duration: '52:15',
        free: false
      }, {
        title: 'Responsive Pleadings',
        duration: '45:30',
        free: false
      }, {
        title: 'Amended and Supplemental Pleadings',
        duration: '38:20',
        free: false
      }, {
        title: 'Pre-trial Motions',
        duration: '57:40',
        free: false
      }, {
        title: 'Practical Exercise: Drafting a Complaint',
        duration: '1:15:00',
        free: false
      }]
    }],
    faqs: [{
      question: 'What prerequisites are required for this course?',
      answer: 'While there are no strict prerequisites, a basic understanding of legal concepts and terminology is beneficial. This course is designed for law students, legal professionals, and those with an interest in civil procedure.'
    }, {
      question: 'Is there any practical component to this course?',
      answer: 'Yes, the course includes practical exercises such as drafting legal documents, analyzing case studies, and participating in mock proceedings. These practical components help reinforce theoretical knowledge.'
    }, {
      question: 'How long will I have access to the course materials?',
      answer: 'Once enrolled, you will have lifetime access to all course materials, including future updates and additions to the curriculum.'
    }, {
      question: 'Is the certificate recognized by legal institutions?',
      answer: 'The certificate demonstrates your commitment to professional development and is recognized by many legal firms and institutions. However, it is not a substitute for formal legal qualifications required by regulatory bodies.'
    }]
  };
  // Function to toggle video play state
  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };
  // Function to toggle video expanded state
  const handleToggleVideoSize = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };
  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {rating}
        </span>
      </div>;
  };
  // Function to handle enrollment
  const handleEnroll = () => {
    // In a real app, this would handle the enrollment process
    alert('Enrollment functionality would be implemented here!');
  };
  return <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      {/* Course Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-900 dark:from-slate-900 dark:to-slate-800">
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-indigo-900/80 dark:from-slate-900/90 dark:to-slate-800/90"></div>
        </div>
        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm text-gray-300 mb-6">
                <a href="/" className="hover:text-indigo-400 transition-colors duration-300">
                  Home
                </a>
                <ChevronRightIcon className="w-4 h-4 mx-2" />
                <a href="/courses" className="hover:text-indigo-400 transition-colors duration-300">
                  Courses
                </a>
                <ChevronRightIcon className="w-4 h-4 mx-2" />
                <span className="text-indigo-400">{course.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {course.description}
              </p>
              {/* Course Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <img src={course.instructor.image} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400" />
                  <div className="ml-2">
                    <p className="text-white font-medium">
                      {course.instructor.name}
                    </p>
                    <p className="text-xs text-gray-300">
                      {course.instructor.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-2 text-gray-300">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <UsersIcon className="w-4 h-4 mr-1 text-indigo-400" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ClockIcon className="w-4 h-4 mr-1 text-indigo-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CalendarIcon className="w-4 h-4 mr-1 text-indigo-400" />
                  <span>Last updated: {course.lastUpdated}</span>
                </div>
              </div>
              {/* Price and CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-2xl font-bold text-white">
                    {course.price}
                  </span>
                  {course.discount && <span className="text-lg text-gray-400 line-through ml-2">
                      {course.discount}
                    </span>}
                </div>
                <button onClick={handleEnroll} className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center group">
                  <span>Enroll Now</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <BookmarkIcon className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <ShareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              {/* Tab Navigation */}
              <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap -mb-px">
                  <button className={`mr-4 py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`} onClick={() => setActiveTab('overview')}>
                    Overview
                  </button>
                  <button className={`mr-4 py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'curriculum' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`} onClick={() => setActiveTab('curriculum')}>
                    Curriculum
                  </button>
                  <button className={`mr-4 py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'instructor' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`} onClick={() => setActiveTab('instructor')}>
                    Instructor
                  </button>
                  <button className={`mr-4 py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`} onClick={() => setActiveTab('reviews')}>
                    Reviews
                  </button>
                  <button className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'faq' ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`} onClick={() => setActiveTab('faq')}>
                    FAQ
                  </button>
                </div>
              </div>
              {/* Tab Content */}
              <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
              transitionDelay: '200ms'
            }}>
                {activeTab === 'overview' && <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      Course Overview
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
                      <p>
                        This comprehensive course on {course.title} is designed
                        to provide you with both theoretical knowledge and
                        practical skills required for success in the legal
                        field. Through a combination of lectures, case studies,
                        and practical exercises, you will develop a thorough
                        understanding of the subject matter.
                      </p>
                      <p>
                        The course is structured to progressively build your
                        knowledge, starting with fundamental concepts and
                        advancing to complex applications. Each module includes
                        assessments to reinforce learning and track your
                        progress.
                      </p>
                      <p>By the end of this course, you will be able to:</p>
                      <ul>
                        <li>
                          Understand the key principles and theories of{' '}
                          {course.title}
                        </li>
                        <li>Apply legal concepts to real-world scenarios</li>
                        <li>
                          Analyze complex legal problems and develop effective
                          solutions
                        </li>
                        <li>
                          Draft essential legal documents with precision and
                          clarity
                        </li>
                        <li>Navigate procedural requirements confidently</li>
                      </ul>
                    </div>
                    {/* Course Features */}
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        Course Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.features.map((feature, index) => <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                            </div>
                            <p className="ml-3 text-gray-700 dark:text-gray-300">
                              {feature}
                            </p>
                          </div>)}
                      </div>
                    </div>
                    {/* Course Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg text-center">
                        <BookOpenIcon className="w-8 h-8 mx-auto mb-2 text-indigo-500 dark:text-indigo-400" />
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {course.lectures}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Lectures
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg text-center">
                        <ClockIcon className="w-8 h-8 mx-auto mb-2 text-indigo-500 dark:text-indigo-400" />
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {course.duration}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Duration
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg text-center">
                        <FileTextIcon className="w-8 h-8 mx-auto mb-2 text-indigo-500 dark:text-indigo-400" />
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {course.quizzes}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Quizzes
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg text-center">
                        <GraduationCapIcon className="w-8 h-8 mx-auto mb-2 text-indigo-500 dark:text-indigo-400" />
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {course.certificate ? 'Yes' : 'No'}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Certificate
                        </div>
                      </div>
                    </div>
                    {/* Requirements */}
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        Requirements
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Basic understanding of legal terminology and
                            concepts
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Access to a computer with internet connection
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Willingness to participate in practical exercises
                            and discussions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Dedication to complete assignments and assessments
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* Target Audience */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        Who This Course is For
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Law students looking to deepen their understanding
                            of {course.title}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Practicing lawyers seeking to refresh or expand
                            their knowledge
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Legal professionals preparing for specialized
                            examinations
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Individuals interested in understanding the legal
                            framework of civil procedures
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>}
                {activeTab === 'curriculum' && <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      Course Curriculum
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      This course includes {course.lectures} lectures and{' '}
                      {course.quizzes} quizzes, with a total duration of{' '}
                      {course.duration}. The curriculum is designed to
                      progressively build your knowledge and skills.
                    </p>
                    <div className="space-y-4">
                      {course.curriculum.map((section, index) => <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 dark:bg-slate-800 px-4 py-3 flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                              {section.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {section.lessons.length} lessons
                            </span>
                          </div>
                          <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {section.lessons.map((lesson, lessonIndex) => <div key={lessonIndex} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
                                <div className="flex items-center">
                                  {lesson.free ? <UnlockIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" /> : <LockIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />}
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {lesson.title}
                                  </span>
                                  {lesson.free && <span className="ml-3 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                                      Free
                                    </span>}
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {lesson.duration}
                                </span>
                              </div>)}
                          </div>
                        </div>)}
                    </div>
                  </div>}
                {activeTab === 'instructor' && <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      Meet Your Instructor
                    </h2>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                          <img src={course.instructor.image} alt={course.instructor.name} className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 dark:border-indigo-900/30" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                            {course.instructor.name}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                            {course.instructor.title}
                          </p>
                          <div className="flex items-center mb-4">
                            {renderStars(course.rating)}
                            <span className="ml-2 text-gray-500 dark:text-gray-400">
                              {course.reviews} Reviews
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
                            <div className="flex items-center">
                              <BookOpenIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                              <span>12 Courses</span>
                            </div>
                            <div className="flex items-center">
                              <UsersIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                              <span>5,000+ Students</span>
                            </div>
                            <div className="flex items-center">
                              <AwardIcon className="w-4 h-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                              <span>15+ Years Experience</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                          About the Instructor
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {course.instructor.bio}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          She has trained thousands of students and
                          professionals in various aspects of law, with a
                          particular focus on civil procedure. Her teaching
                          methodology combines theoretical foundations with
                          practical applications, ensuring that students develop
                          both knowledge and skills necessary for success in the
                          legal field.
                        </p>
                      </div>
                    </div>
                  </div>}
                {activeTab === 'reviews' && <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      Student Reviews
                    </h2>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-6 md:mb-0">
                          <div className="flex items-center mb-2">
                            <div className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                              {course.rating}
                            </div>
                            <div className="ml-4">
                              <div className="flex mb-1">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-6 h-6 ${i < Math.floor(course.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                              </div>
                              <div className="text-gray-500 dark:text-gray-400">
                                Course Rating
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-500 dark:text-gray-400">
                            {course.reviews} reviews
                          </div>
                        </div>
                        <div className="w-full md:w-64">
                          {[5, 4, 3, 2, 1].map(star => <div key={star} className="flex items-center mb-1">
                              <div className="text-xs font-medium w-2 text-gray-500 dark:text-gray-400 mr-2">
                                {star}
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                                <div className="bg-amber-400 h-2 rounded-full" style={{
                            width: star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '7%' : star === 2 ? '2%' : '1%'
                          }}></div>
                              </div>
                              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '7%' : star === 2 ? '2%' : '1%'}
                              </div>
                            </div>)}
                        </div>
                      </div>
                    </div>
                    {/* Sample Reviews */}
                    <div className="space-y-6">
                      {[{
                    name: 'Sarah Ahmed',
                    image: 'https://randomuser.me/api/portraits/women/44.jpg',
                    rating: 5,
                    date: '2 months ago',
                    comment: "This course exceeded my expectations! The instructor's explanations were clear and the practical examples really helped me understand complex concepts. I particularly appreciated the mock trial exercises which gave me valuable hands-on experience.",
                    helpful: 24
                  }, {
                    name: 'Rahul Mehta',
                    image: 'https://randomuser.me/api/portraits/men/32.jpg',
                    rating: 4,
                    date: '3 months ago',
                    comment: 'Very comprehensive coverage of the subject. The course materials were excellent and I found the quizzes helpful for reinforcing key concepts. The only improvement I would suggest is adding more case studies from recent years.',
                    helpful: 18
                  }, {
                    name: 'Fatima Khan',
                    image: 'https://randomuser.me/api/portraits/women/65.jpg',
                    rating: 5,
                    date: '1 month ago',
                    comment: "As a practicing lawyer looking to refresh my knowledge, this course was perfect. The instructor's expertise is evident, and the way complex topics are broken down makes them accessible without oversimplifying. Highly recommended!",
                    helpful: 32
                  }].map((review, index) => <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex justify-between">
                            <div className="flex items-center mb-4">
                              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                              <div>
                                <div className="font-medium text-gray-800 dark:text-gray-100">
                                  {review.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {review.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {review.comment}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <button className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                              <ThumbsUpIcon className="w-4 h-4 mr-1" />
                              <span>Helpful ({review.helpful})</span>
                            </button>
                          </div>
                        </div>)}
                    </div>
                  </div>}
                {activeTab === 'faq' && <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {course.faqs.map((faq, index) => <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </p>
                        </div>)}
                    </div>
                  </div>}
              </div>
            </div>
            {/* Right Column - Video Preview and Course Info */}
            <div className={`lg:col-span-1 order-1 lg:order-2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Video Preview */}
              <div className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 mb-6 ${isVideoExpanded ? 'fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80' : ''}`}>
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img src={course.thumbnail} alt={`${course.title} preview`} className={`w-full h-full object-cover ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
                    {/* Play Button */}
                    {!isPlaying && <button onClick={handlePlayVideo} className="absolute inset-0 flex items-center justify-center group">
                        <div className="w-16 h-16 bg-indigo-600/90 rounded-full flex items-center justify-center group-hover:bg-indigo-700 group-hover:scale-110 transition-all duration-300">
                          <PlayIcon className="w-8 h-8 text-white ml-1" />
                        </div>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                      </button>}
                    {/* Video Player (placeholder) */}
                    {isPlaying && <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <div className="text-center">
                          <PlayIcon className="w-12 h-12 text-white/50 mx-auto mb-4 animate-pulse" />
                          <p className="text-white/70 text-lg">
                            Video Player Placeholder
                          </p>
                          <p className="text-white/50 text-sm mt-2">
                            In a real implementation, this would be a video
                            player
                          </p>
                          <button onClick={handlePlayVideo} className="mt-6 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-300">
                            Close Preview
                          </button>
                        </div>
                      </div>}
                  </div>
                  {/* Video Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button onClick={handleToggleVideoSize} className="p-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors duration-300" aria-label={isVideoExpanded ? 'Exit fullscreen' : 'Fullscreen'}>
                      <ExpandIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* Preview Label */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <span className="font-medium text-gray-800 dark:text-gray-100">
                        Course Preview
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      02:35
                    </span>
                  </div>
                </div>
              </div>
              {/* Course Info Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 sticky top-24">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    This course includes:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <BookOpenIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>{course.lectures} lectures</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <ClockIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>{course.duration} of content</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <FileTextIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>{course.quizzes} quizzes and assessments</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <DownloadIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <AwardIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <GlobeIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>Lifetime access</span>
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <DevicesIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span>Access on mobile and TV</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <button onClick={handleEnroll} className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center group">
                      <span>Enroll Now</span>
                      <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                      30-Day Money-Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Courses Section */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
            Related Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: 'Legal Research and Writing',
            image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            instructor: 'Prof. Nusrat Jahan',
            rating: 4.7,
            price: '৳12,000',
            discount: '৳15,000'
          }, {
            title: 'Legal Ethics and Professional Responsibility',
            image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            instructor: 'Dr. Kamal Hassan',
            rating: 4.8,
            price: '৳14,000',
            discount: '৳17,000'
          }, {
            title: 'Alternative Dispute Resolution',
            image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            instructor: 'Adv. Sarah Chowdhury',
            rating: 4.6,
            price: '৳13,500',
            discount: '৳16,500'
          }].map((relatedCourse, index) => <div key={index} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img src={relatedCourse.image} alt={relatedCourse.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-lg font-bold">
                      {relatedCourse.price}
                    </span>
                    <span className="text-gray-300 text-sm line-through ml-2">
                      {relatedCourse.discount}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {relatedCourse.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {relatedCourse.instructor}
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(relatedCourse.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />)}
                    <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {relatedCourse.rating}
                    </span>
                  </div>
                  <button className="w-full py-2 px-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-all duration-300 flex items-center justify-center group">
                    <span>View Course</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Enroll now in our {course.title} course and take the first step
            towards enhancing your legal knowledge and skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handleEnroll} className="px-8 py-3.5 bg-white text-indigo-700 font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-900/30 transition-all duration-300 flex items-center group">
              <span>Enroll Now</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Courses
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
// Helper icons
const GlobeIcon: React.FC<{
  className?: string;
}> = ({
  className = ''
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>;
const DevicesIcon: React.FC<{
  className?: string;
}> = ({
  className = ''
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" x2="12.01" y1="18" y2="18"></line>
  </svg>;
const ExpandIcon: React.FC<{
  className?: string;
}> = ({
  className = ''
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" x2="14" y1="3" y2="10"></line>
    <line x1="3" x2="10" y1="21" y2="14"></line>
  </svg>;
export default CourseDetails;