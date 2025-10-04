import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon, SendIcon, QuoteIcon, UserIcon } from 'lucide-react';
export const FeedbackSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);
  const testimonials = [{
    id: 1,
    name: 'Asif Rahman',
    position: 'Advocate, Supreme Court',
    content: 'LAWTOPPERS helped me prepare for my Bar Council exam. The materials were comprehensive and the mentors were extremely helpful.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Assistant Judge',
    content: 'The judicial service preparation course was excellent. I cleared the exam on my first attempt thanks to LAWTOPPERS.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 3,
    name: 'Kamal Hossain',
    position: 'Legal Advisor, Private Firm',
    content: 'The course content is up-to-date with the latest amendments and case laws. Highly recommended for serious law students.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  const handlePrevious = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };
  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', {
      rating,
      feedback
    });
    // Reset form
    setRating(0);
    setFeedback('');
    // Here you would typically send the data to a server
  };
  return <section className="py-16 bg-gray-50 dark:bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {t('feedback.title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials Carousel with Enhanced Animation */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} h-full`}>
            <div className="bg-gray-100 dark:bg-slate-700 rounded-xl shadow-md overflow-hidden relative h-full">
              {/* Testimonial background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 z-0"></div>
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-indigo-200 dark:text-indigo-800 z-0">
                <QuoteIcon className="w-16 h-16" />
              </div>
              {/* Testimonial content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className={`flex-grow transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                  {/* Rating stars */}
                  <div className="flex mb-6 pt-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />)}
                  </div>
                  {/* Testimonial text */}
                  <p className="text-gray-600 dark:text-gray-300 italic text-lg mb-8 animate-fadeIn pt-4">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  {/* Testimonial author */}
                  <div className="flex items-center mt-auto">
                    <div className="relative">
                      <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md" />
                      <div className="absolute -bottom-1 -right-1 bg-indigo-500 rounded-full p-1 text-white">
                        <UserIcon className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Navigation controls */}
                <div className="absolute bottom-8 right-8 flex space-x-4">
                  {/* Pagination indicators */}
                  <div className="flex items-center space-x-2 mr-4">
                    {testimonials.map((_, index) => <button key={index} onClick={() => {
                    if (!animating && index !== currentTestimonial) {
                      setAnimating(true);
                      setTimeout(() => {
                        setCurrentTestimonial(index);
                        setTimeout(() => {
                          setAnimating(false);
                        }, 300);
                      }, 300);
                    }
                  }} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-indigo-600 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400 dark:hover:bg-indigo-500'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
                  </div>
                  {/* Navigation buttons */}
                  <button onClick={handlePrevious} disabled={animating} className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm" aria-label="Previous testimonial">
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button onClick={handleNext} disabled={animating} className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm" aria-label="Next testimonial">
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Feedback Form with Animation - Matched background with testimonial card */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} h-full`}>
            <div className="bg-gray-100 dark:bg-slate-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-600 border border-transparent h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100 relative inline-block">
                {t('feedback.submit')}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Rating
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(null)} className="focus:outline-none transition-transform hover:scale-125 duration-300">
                        <StarIcon className={`w-8 h-8 transition-all duration-300 ${star <= (hoveredStar || rating) ? 'text-yellow-400 fill-current animate-pulse-glow' : 'text-gray-300 dark:text-gray-600'}`} />
                      </button>)}
                  </div>
                </div>
                <div className="relative group">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Your Feedback
                  </label>
                  <textarea id="feedback" value={feedback} onChange={e => setFeedback(e.target.value)} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100 group-hover:border-indigo-300 dark:group-hover:border-indigo-600" placeholder="Share your experience with us..."></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </div>
                <div>
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                    <span className="relative z-10">Submit Feedback</span>
                    <SendIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};