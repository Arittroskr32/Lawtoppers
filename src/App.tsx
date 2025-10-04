import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { QuestionBankSection } from './components/sections/QuestionBankSection';
import { JobPreparationSection } from './components/sections/JobPreparationSection';
import { WhyBestSection } from './components/sections/WhyBestSection';
import { ContactSection } from './components/sections/ContactSection';
import { FeedbackSection } from './components/sections/FeedbackSection';
import { MentorsSection } from './components/sections/MentorsSection';
import { FAQSection } from './components/sections/FAQSection';
export function App() {
  return <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <QuestionBankSection />
      <JobPreparationSection />
      <WhyBestSection />
      <ContactSection />
      <FeedbackSection />
      <MentorsSection />
      <FAQSection />
      <Footer />
    </div>;
}