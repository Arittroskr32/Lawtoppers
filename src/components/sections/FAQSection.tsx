import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDownIcon, ChevronUpIcon, HelpCircleIcon } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  category: string;
}
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  category
}) => {
  return <div className={`border-b border-gray-200 dark:border-gray-700 last:border-0 hover-border-animation ${isOpen ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''} transition-all duration-300`}>
      <span className="border-left"></span>
      <span className="border-right"></span>
      <button className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none group" onClick={onClick}>
        <span className="text-lg font-medium text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 flex items-center">
          <span className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3 text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            Q
          </span>
          {question}
        </span>
        <span className="flex items-center">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 mr-3 hidden md:block transition-all duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {category}
          </span>
          {isOpen ? <ChevronUpIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-transform duration-300" /> : <ChevronDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 pl-4 md:pl-16 text-gray-600 dark:text-gray-400 border-l-4 border-indigo-200 dark:border-indigo-800 ml-4 mb-4 animate-fadeIn">
          {answer}
        </div>
      </div>
    </div>;
};
export const FAQSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // Removed searchQuery state as search bar is deleted
  const [isVisible, setIsVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
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
  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setTimeout(() => {
          setAnimating(false);
        }, 300);
      }, 300);
    }
  };
  const categories = [{
    id: 'all',
    name: 'All Questions'
  }, {
    id: 'courses',
    name: 'Courses'
  }, {
    id: 'exams',
    name: 'Exams'
  }, {
    id: 'payment',
    name: 'Payment'
  }, {
    id: 'account',
    name: 'Account'
  }];
  const faqs = [{
    question: 'How do I enroll in a course?',
    answer: "You can enroll in a course by creating an account, browsing our course catalog, and selecting the course you're interested in. Follow the payment instructions to complete your enrollment.",
    category: 'courses'
  }, {
    question: 'Are the courses self-paced or scheduled?',
    answer: 'We offer both self-paced and scheduled courses. Self-paced courses allow you to learn at your own convenience, while scheduled courses have specific start and end dates with regular assignments.',
    category: 'courses'
  }, {
    question: 'Do you offer job placement assistance?',
    answer: 'Yes, we offer job placement assistance to our students. We have partnerships with various law firms and organizations that regularly hire our top-performing students.',
    category: 'courses'
  }, {
    question: 'Can I access the course materials after completion?',
    answer: "Yes, once you've enrolled in a course, you'll have lifetime access to the course materials, even after you've completed the course.",
    category: 'courses'
  }, {
    question: 'Do you offer any scholarships or financial aid?',
    answer: 'We offer scholarships to deserving candidates based on merit and need. Please contact our support team for more information about our scholarship programs.',
    category: 'payment'
  }, {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address to create a new password.',
    category: 'account'
  }, {
    question: 'How often are the exam batches conducted?',
    answer: 'We conduct exam batches on a monthly basis. You can check the upcoming schedule on our Exam Batch page and register for the one that suits your preparation timeline.',
    category: 'exams'
  }, {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, mobile banking, and bank transfers. All transactions are secure and encrypted.',
    category: 'payment'
  }];
  const filteredFaqs = faqs.filter(faq => (activeCategory === 'all' || faq.category === activeCategory));
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="py-16 bg-gray-50 dark:bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            {t('faq.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our courses, exams, and
            services
          </p>
        </div>
        {/* Filter Only, Centered */}
        <div className={`max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 relative overflow-hidden ${activeCategory === category.id ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
                disabled={animating}
              >
                <span className="relative z-10">{category.name}</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100 -z-10"></span>
              </button>
            ))}
          </div>
        </div>
        {/* FAQ Items */}
        <div className={`max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} category={faq.category} isOpen={openIndex === index} onClick={() => handleToggle(index)} />) : <div className="p-8 text-center animate-fadeIn">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 animate-bounce-slow">
                  <HelpCircleIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </div>}
          </div>
        </div>
        {/* Still have questions */}
        <div className={`max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white text-center shadow-lg transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative overflow-hidden`}>
          {/* Animated background blobs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-1/3 w-36 h-36 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
          <h3 className="text-xl font-bold mb-2 relative z-10">
            Still have questions?
          </h3>
          <p className="mb-4 relative z-10">
            Our support team is here to help you with any other questions you
            may have.
          </p>
          <button onClick={scrollToContact} className="px-6 py-2.5 bg-white text-indigo-600 font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-900/30 group relative overflow-hidden">
            <span className="relative z-10">Contact Support</span>
            <div className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>;
};