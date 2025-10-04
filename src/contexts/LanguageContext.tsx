import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'bn' | 'en';
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}
const translations = {
  bn: {
    // Navbar
    'nav.home': 'হোম',
    'nav.courses': 'কোর্স',
    'nav.questions': 'প্রশ্ন ব্যাংক',
    'nav.job': 'চাকরি প্রস্তুতি',
    'nav.contact': 'যোগাযোগ',
    // Hero
    'hero.title': 'আইন পেশায় সেরা হতে চান?',
    'hero.subtitle': 'বাংলাদেশের সেরা আইন শিক্ষা প্ল্যাটফর্মে স্বাগতম',
    'hero.cta1': 'শুরু করুন',
    'hero.cta2': 'আরও জানুন',
    // Stats
    'stats.students': 'শিক্ষার্থী',
    'stats.courses': 'কোর্স',
    'stats.mentors': 'মেন্টর',
    'stats.success': 'সফলতার হার',
    // Courses
    'courses.title': 'আমাদের কোর্স সমূহ',
    'courses.all': 'সব কোর্স',
    'courses.civil': 'দেওয়ানি আইন',
    'courses.criminal': 'ফৌজদারি আইন',
    'courses.constitutional': 'সাংবিধানিক আইন',
    'courses.showMore': 'আরও দেখুন',
    // Question Bank
    'questions.title': 'প্রশ্ন ব্যাংক',
    'questions.subtitle': 'বিগত সালের প্রশ্ন ও উত্তর',
    // Job Preparation
    'job.title': 'চাকরি প্রস্তুতি',
    'job.subtitle': 'আইন পেশায় ক্যারিয়ার গড়তে',
    // Why Best
    'why.title': 'আমরা কেন সেরা',
    'why.expert': 'বিশেষজ্ঞ শিক্ষক',
    'why.content': 'আধুনিক কন্টেন্ট',
    'why.support': '২৪/৭ সাপোর্ট',
    'why.community': 'সক্রিয় কমিউনিটি',
    // Contact
    'contact.title': 'যোগাযোগ করুন',
    'contact.name': 'আপনার নাম',
    'contact.email': 'ইমেইল',
    'contact.message': 'বার্তা',
    'contact.send': 'পাঠান',
    // Feedback
    'feedback.title': 'আপনার মতামত',
    'feedback.submit': 'মতামত দিন',
    // Mentors
    'mentors.title': 'আমাদের মেন্টরগণ',
    // FAQ
    'faq.title': 'সাধারণ প্রশ্ন',
    // Footer
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.questions': 'Question Bank',
    'nav.job': 'Job Preparation',
    'nav.contact': 'Contact',
    // Hero
    'hero.title': 'Want to Excel in Legal Profession?',
    'hero.subtitle': "Welcome to Bangladesh's Premier Legal Education Platform",
    'hero.cta1': 'Get Started',
    'hero.cta2': 'Learn More',
    // Stats
    'stats.students': 'Students',
    'stats.courses': 'Courses',
    'stats.mentors': 'Mentors',
    'stats.success': 'Success Rate',
    // Courses
    'courses.title': 'Our Courses',
    'courses.all': 'All Courses',
    'courses.civil': 'Civil Law',
    'courses.criminal': 'Criminal Law',
    'courses.constitutional': 'Constitutional Law',
    'courses.showMore': 'Show More',
    // Question Bank
    'questions.title': 'Question Bank',
    'questions.subtitle': 'Previous Year Questions & Answers',
    // Job Preparation
    'job.title': 'Job Preparation',
    'job.subtitle': 'Build Your Career in Law',
    // Why Best
    'why.title': 'Why We Are the Best',
    'why.expert': 'Expert Teachers',
    'why.content': 'Modern Content',
    'why.support': '24/7 Support',
    'why.community': 'Active Community',
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    // Feedback
    'feedback.title': 'Your Feedback',
    'feedback.submit': 'Submit Feedback',
    // Mentors
    'mentors.title': 'Meet Our Mentors',
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    // Footer
    'footer.rights': 'All Rights Reserved'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage as Language || 'bn'; // Default to Bangla
  });
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'bn' ? 'en' : 'bn');
  };
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key;
  };
  return <LanguageContext.Provider value={{
    language,
    toggleLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};