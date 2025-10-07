import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SearchIcon, FilterIcon, BookOpenIcon, FileTextIcon, BookmarkIcon, DownloadIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, ClockIcon, CheckCircleIcon, GavelIcon, ArrowRightIcon, BarChart2Icon, CalendarIcon, UserIcon, AlertCircleIcon } from 'lucide-react';
const QuestionBank: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    examType: 'all',
    subject: 'all',
    difficulty: 'all',
    year: 'all'
  });
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
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
  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: value
    }));
    // Reset expanded question when filters change
    setExpandedQuestion(null);
  };
  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };
  // Filter options
  const examTypes = [{
    id: 'all',
    name: 'All Exams'
  }, {
    id: 'judiciary',
    name: 'Judiciary'
  }, {
    id: 'corporate',
    name: 'Corporate Law'
  }, {
    id: 'advocacy',
    name: 'Advocacy'
  }, {
    id: 'university',
    name: 'University Exams'
  }];
  const subjects = [{
    id: 'all',
    name: 'All Subjects'
  }, {
    id: 'constitutional',
    name: 'Constitutional Law'
  }, {
    id: 'criminal',
    name: 'Criminal Law'
  }, {
    id: 'civil',
    name: 'Civil Law'
  }, {
    id: 'contract',
    name: 'Contract Law'
  }, {
    id: 'international',
    name: 'International Law'
  }, {
    id: 'corporate',
    name: 'Corporate Law'
  }, {
    id: 'family',
    name: 'Family Law'
  }];
  const difficultyLevels = [{
    id: 'all',
    name: 'All Levels'
  }, {
    id: 'easy',
    name: 'Easy'
  }, {
    id: 'medium',
    name: 'Medium'
  }, {
    id: 'hard',
    name: 'Hard'
  }];
  const years = [{
    id: 'all',
    name: 'All Years'
  }, {
    id: '2023',
    name: '2023'
  }, {
    id: '2022',
    name: '2022'
  }, {
    id: '2021',
    name: '2021'
  }, {
    id: '2020',
    name: '2020'
  }, {
    id: 'older',
    name: 'Older'
  }];
  // Sample questions data
  const questions = [{
    id: 1,
    question: "Explain the doctrine of separation of powers and its implementation in Bangladesh's constitution.",
    shortQuestion: 'Explain the doctrine of separation of powers.',
    answer: "The doctrine of separation of powers divides governmental authority into three branches: legislative, executive, and judicial. In Bangladesh's constitution, this is implemented through Articles 55, 65, and 94 which establish these three branches respectively. The Supreme Court has further clarified this separation in Secretary, Ministry of Finance v. Masdar Hossain (1999), where it emphasized judicial independence. While the separation is not absolute in Bangladesh (e.g., the executive is drawn from the legislature), the constitutional framework maintains checks and balances between branches.",
    examType: 'judiciary',
    subject: 'constitutional',
    difficulty: 'medium',
    year: '2022',
    references: ['Article 55, 65, 94 of Bangladesh Constitution', 'Secretary, Ministry of Finance v. Masdar Hossain (1999)']
  }, {
    id: 2,
    question: "Define 'mens rea' and explain its significance in criminal proceedings with relevant case references.",
    shortQuestion: "Define 'mens rea' and its significance in criminal proceedings.",
    answer: "Mens rea refers to the mental element or guilty mind required for criminal liability. It's a fundamental principle that a person cannot be convicted of a crime without the necessary mental state or intent. Its significance lies in distinguishing between accidental and intentional acts. In Bangladesh law, mens rea is recognized in Section 35 of the Penal Code. Key cases include State v. Abdur Rahman (2008) where the court emphasized that criminal liability requires both actus reus (guilty act) and mens rea, and Abdul Karim v. State (2012) which clarified different levels of intent in homicide cases.",
    examType: 'university',
    subject: 'criminal',
    difficulty: 'medium',
    year: '2023',
    references: ['Section 35, Bangladesh Penal Code', 'State v. Abdur Rahman (2008)', 'Abdul Karim v. State (2012)']
  }, {
    id: 3,
    question: 'Analyze the legal principles governing the formation of a valid contract under the Contract Act, with special reference to offer and acceptance.',
    shortQuestion: 'Analyze the legal principles governing contract formation.',
    answer: 'Under the Contract Act, a valid contract requires offer, acceptance, consideration, legal capacity, and lawful object. An offer must be definite, communicated, and made with intention to create legal relations. Acceptance must be absolute, communicated, and made while the offer is still open. The case of Carlill v. Carbolic Smoke Ball Co. (1893) established that acceptance can be through conduct. In Bangladesh, Rahman Trading Co. v. Eastern Bank Ltd. (2005) clarified that acceptance must mirror the offer exactly (mirror image rule). Communication of acceptance is governed by Sections 3-5 of the Contract Act, which establish when communication is complete for both parties.',
    examType: 'corporate',
    subject: 'contract',
    difficulty: 'hard',
    year: '2021',
    references: ['Sections 2-5, Contract Act', 'Carlill v. Carbolic Smoke Ball Co. (1893)', 'Rahman Trading Co. v. Eastern Bank Ltd. (2005)']
  }, {
    id: 4,
    question: "Describe the concept of 'stare decisis' and its application in the Bangladeshi legal system.",
    shortQuestion: "Describe 'stare decisis' and its application in Bangladesh.",
    answer: 'Stare decisis is the doctrine of precedent whereby courts follow previous judicial decisions when the same points arise again in litigation. In Bangladesh, this principle is formally recognized in Article 111 of the Constitution, which states that the law declared by the Appellate Division is binding on all courts, and the law declared by the High Court Division is binding on all subordinate courts. The case of Hefzur Rahman v. Shamsun Nahar Begum (1999) demonstrated how the Supreme Court applies this principle while also recognizing its power to overrule previous decisions when necessary for justice. The hierarchical court structure in Bangladesh ensures the systematic application of precedent.',
    examType: 'judiciary',
    subject: 'constitutional',
    difficulty: 'medium',
    year: '2022',
    references: ['Article 111, Bangladesh Constitution', 'Hefzur Rahman v. Shamsun Nahar Begum (1999)']
  }, {
    id: 5,
    question: 'Explain the concept of vicarious liability with reference to employer-employee relationships and relevant case law.',
    shortQuestion: 'Explain vicarious liability in employer-employee relationships.',
    answer: "Vicarious liability is the legal doctrine where an employer can be held liable for the wrongful acts of employees performed within the scope of their employment. This is based on the principle of 'respondeat superior' (let the master answer). Key elements include: (1) employer-employee relationship must exist, (2) the act must be within the course of employment. In Bangladesh, this principle is applied through tort law and case precedents. The landmark case National Bank Ltd. v. Abdus Salam (2004) established that employers are liable even if they expressly prohibited the act, as long as it was within the general scope of employment. However, in Farooq v. Eastern Refinery (2010), the court held that acts clearly outside job responsibilities do not trigger vicarious liability.",
    examType: 'corporate',
    subject: 'civil',
    difficulty: 'hard',
    year: '2021',
    references: ['National Bank Ltd. v. Abdus Salam (2004)', 'Farooq v. Eastern Refinery (2010)']
  }, {
    id: 6,
    question: "Define and discuss the concept of 'rarest of the rare' doctrine in capital punishment cases.",
    shortQuestion: "Define the 'rarest of the rare' doctrine in capital punishment.",
    answer: "The 'rarest of the rare' doctrine is a principle used in determining when capital punishment is appropriate. It originated in the Indian Supreme Court case Bachan Singh v. State of Punjab (1980) and has been adopted in Bangladesh's jurisprudence. The doctrine holds that the death penalty should be imposed only in exceptional cases where the alternative of life imprisonment is unquestionably foreclosed. In Bangladesh, the Supreme Court in State v. Sukur Ali (2004) applied this doctrine, emphasizing that capital punishment should be reserved for cases that shock the collective conscience of society. Factors considered include the brutality of the crime, motive, socio-economic status of the criminal, and whether the crime was premeditated.",
    examType: 'judiciary',
    subject: 'criminal',
    difficulty: 'hard',
    year: '2020',
    references: ['Bachan Singh v. State of Punjab (1980)', 'State v. Sukur Ali (2004)']
  }, {
    id: 7,
    question: "Explain the legal concept of 'res ipsa loquitur' and its application in negligence cases.",
    shortQuestion: "Explain 'res ipsa loquitur' in negligence cases.",
    answer: "Res ipsa loquitur ('the thing speaks for itself') is a doctrine in negligence law that allows plaintiffs to establish a presumption of negligence through circumstantial evidence when direct evidence is unavailable. For this doctrine to apply: (1) the incident wouldn't normally occur without negligence, (2) the defendant had exclusive control over the instrumentality causing injury, and (3) the plaintiff didn't contribute to the injury. In Bangladesh, this principle was applied in Rahman v. City Hospital (2015), where a surgical instrument was left inside a patient. The court held that such an incident wouldn't occur without negligence, shifting the burden of proof to the hospital to disprove negligence. This doctrine is particularly important in medical negligence cases where technical knowledge creates an evidentiary imbalance.",
    examType: 'advocacy',
    subject: 'civil',
    difficulty: 'medium',
    year: '2022',
    references: ['Rahman v. City Hospital (2015)']
  }, {
    id: 8,
    question: 'Discuss the legal principles governing the granting of bail in criminal cases.',
    shortQuestion: 'Discuss legal principles for granting bail.',
    answer: "Bail is the conditional release of an accused person awaiting trial. In Bangladesh, the legal framework for bail is found in Sections 496-502 of the Criminal Procedure Code. Courts consider several factors: (1) severity of the offense, (2) likelihood of the accused fleeing justice, (3) possibility of evidence tampering, (4) risk to public safety, and (5) health condition of the accused. For bailable offenses, bail is a matter of right, while for non-bailable offenses, it's discretionary. In State v. Mahmud Hassan (2017), the Supreme Court clarified that even in serious cases, prolonged pre-trial detention without progress in proceedings may justify bail. Additionally, special provisions exist for women, children, and the elderly under the Children Act 2013 and the Women and Children Repression Prevention Act.",
    examType: 'judiciary',
    subject: 'criminal',
    difficulty: 'medium',
    year: '2023',
    references: ['Sections 496-502, Criminal Procedure Code', 'State v. Mahmud Hassan (2017)', 'Children Act 2013']
  }];
  // Filter questions based on active filters and search term
  const filteredQuestions = questions.filter(question => {
    // Filter by exam type
    if (activeFilters.examType !== 'all' && question.examType !== activeFilters.examType) {
      return false;
    }
    // Filter by subject
    if (activeFilters.subject !== 'all' && question.subject !== activeFilters.subject) {
      return false;
    }
    // Filter by difficulty
    if (activeFilters.difficulty !== 'all' && question.difficulty !== activeFilters.difficulty) {
      return false;
    }
    // Filter by year
    if (activeFilters.year !== 'all' && question.year !== activeFilters.year) {
      return false;
    }
    // Filter by search term
    if (searchTerm && !question.question.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });
  // Featured question sets data
  const featuredSets = [{
    id: 1,
    title: 'Past Year Papers',
    description: "Complete question papers from previous years' exams",
    icon: <FileTextIcon className="w-8 h-8" />,
    count: 25,
    color: 'blue'
  }, {
    id: 2,
    title: 'Subject-Wise MCQs',
    description: 'Practice multiple choice questions organized by subject',
    icon: <BookOpenIcon className="w-8 h-8" />,
    count: 500,
    color: 'gold'
  }, {
    id: 3,
    title: 'Case Law Questions',
    description: 'Questions based on landmark legal cases and precedents',
    icon: <GavelIcon className="w-8 h-8" />,
    count: 150,
    color: 'navy'
  }, {
    id: 4,
    title: 'Mock Test Series',
    description: 'Simulated exam environments with timed assessments',
    icon: <ClockIcon className="w-8 h-8" />,
    count: 10,
    color: 'green'
  }];
  // Downloadable resources data
  const resources = [{
    id: 1,
    title: 'Judiciary Exam 2023 Question Paper',
    type: 'PDF',
    size: '2.5 MB',
    downloads: 1250,
    category: 'Judiciary'
  }, {
    id: 2,
    title: 'Constitutional Law MCQ Collection',
    type: 'PDF',
    size: '3.8 MB',
    downloads: 980,
    category: 'Constitutional'
  }, {
    id: 3,
    title: 'Criminal Law Case Studies Compilation',
    type: 'PDF',
    size: '4.2 MB',
    downloads: 1540,
    category: 'Criminal'
  }, {
    id: 4,
    title: 'Contract Law Question Bank 2022',
    type: 'PDF',
    size: '3.1 MB',
    downloads: 870,
    category: 'Contract'
  }];
  // Testimonials data
  const testimonials = [{
    id: 1,
    name: 'Fahim Ahmed',
    position: 'Assistant Judge, Dhaka',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The question bank helped me secure a top position in the judiciary exam. The comprehensive coverage of topics and variety of question formats prepared me for every challenge.'
  }, {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Corporate Lawyer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'I credit my success in the bar council exam to the rigorous practice I did using this question bank. The difficulty progression helped me build confidence gradually.'
  }, {
    id: 3,
    name: 'Rahul Sharma',
    position: 'Law Student, Dhaka University',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    quote: 'The subject-wise organization and detailed explanations made complex legal concepts much easier to understand and remember. An invaluable resource for any law student.'
  }];
  // FAQ data

  return <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
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
                আইন প্রশ্ন ব্যাংক
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl">
                আপনার প্রস্তুতি মজবুত করার জন্য অতীত বছরের প্রশ্নপত্র, মক টেস্ট এবং বিষয়ভিত্তিক প্রশ্ন চর্চা করুন।
              </p>
              {/* Search Bar */}
              <div className="relative max-w-xl">
                <input type="text" placeholder="Search Questions..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent" />
                <div className="absolute left-0 top-0 h-full flex items-center pl-4">
                  <SearchIcon className="w-6 h-6 text-gray-500" />
                </div>
                <button className="absolute right-0 top-0 h-full bg-[#D4AF37] text-white px-6 rounded-r-lg flex items-center justify-center font-medium hover:bg-[#C4A030] transition-colors duration-300">
                  Search
                </button>
              </div>
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center mr-3">
                    <FileTextIcon className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      8,500+
                    </div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center mr-3">
                    <BookmarkIcon className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-sm text-gray-600">Question Sets</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center mr-3">
                    <UserIcon className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      15,000+
                    </div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1E3A8A]/10 rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Law books and gavel" className="w-full h-auto rounded-lg shadow-xl relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-serif font-bold text-gray-900">
                    Filters
                  </h3>
                  <FilterIcon className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                {/* Exam Type Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <GavelIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                    Exam Type
                  </h4>
                  <div className="space-y-2">
                    {examTypes.map(type => <div key={type.id} className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${activeFilters.examType === type.id ? 'bg-[#1E3A8A] text-white' : 'hover:bg-gray-100'}`} onClick={() => handleFilterChange('examType', type.id)}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 ${activeFilters.examType === type.id ? 'bg-white' : 'border border-gray-300'}`}>
                          {activeFilters.examType === type.id && <CheckIcon className="w-3 h-3 text-[#1E3A8A]" />}
                        </div>
                        <span className="text-sm">{type.name}</span>
                      </div>)}
                  </div>
                </div>
                {/* Subject Area Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpenIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                    Subject Area
                  </h4>
                  <div className="space-y-2">
                    {subjects.map(subject => <div key={subject.id} className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${activeFilters.subject === subject.id ? 'bg-[#1E3A8A] text-white' : 'hover:bg-gray-100'}`} onClick={() => handleFilterChange('subject', subject.id)}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 ${activeFilters.subject === subject.id ? 'bg-white' : 'border border-gray-300'}`}>
                          {activeFilters.subject === subject.id && <CheckIcon className="w-3 h-3 text-[#1E3A8A]" />}
                        </div>
                        <span className="text-sm">{subject.name}</span>
                      </div>)}
                  </div>
                </div>
                {/* Difficulty Level Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <BarChart2Icon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                    Difficulty Level
                  </h4>
                  <div className="space-y-2">
                    {difficultyLevels.map(level => <div key={level.id} className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${activeFilters.difficulty === level.id ? 'bg-[#1E3A8A] text-white' : 'hover:bg-gray-100'}`} onClick={() => handleFilterChange('difficulty', level.id)}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 ${activeFilters.difficulty === level.id ? 'bg-white' : 'border border-gray-300'}`}>
                          {activeFilters.difficulty === level.id && <CheckIcon className="w-3 h-3 text-[#1E3A8A]" />}
                        </div>
                        <span className="text-sm">{level.name}</span>
                      </div>)}
                  </div>
                </div>
                {/* Year Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                    Year
                  </h4>
                  <div className="space-y-2">
                    {years.map(year => <div key={year.id} className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${activeFilters.year === year.id ? 'bg-[#1E3A8A] text-white' : 'hover:bg-gray-100'}`} onClick={() => handleFilterChange('year', year.id)}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 ${activeFilters.year === year.id ? 'bg-white' : 'border border-gray-300'}`}>
                          {activeFilters.year === year.id && <CheckIcon className="w-3 h-3 text-[#1E3A8A]" />}
                        </div>
                        <span className="text-sm">{year.name}</span>
                      </div>)}
                  </div>
                </div>
                {/* Reset Filters Button */}
                <button className="w-full py-2.5 border border-[#1E3A8A] text-[#1E3A8A] font-medium rounded-md hover:bg-[#1E3A8A]/5 transition-colors duration-300" onClick={() => setActiveFilters({
                examType: 'all',
                subject: 'all',
                difficulty: 'all',
                year: 'all'
              })}>
                  Reset Filters
                </button>
              </div>
            </div>
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Questions List Section */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">
                    {filteredQuestions.length} Questions Found
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Expand each question to view the complete answer and
                    references
                  </p>
                </div>
                {filteredQuestions.length > 0 ? <div className="divide-y divide-gray-200">
                    {filteredQuestions.map((question, index) => <div key={question.id} className="transition-all duration-300 hover:bg-gray-50">
                        <div className="p-6 cursor-pointer" onClick={() => toggleQuestion(question.id)}>
                          <div className="flex justify-between items-start">
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold flex-shrink-0 mr-4">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 pr-8">
                                  {question.shortQuestion}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                                    {subjects.find(s => s.id === question.subject)?.name}
                                  </span>
                                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs font-medium">
                                    {examTypes.find(e => e.id === question.examType)?.name}
                                  </span>
                                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-medium">
                                    {question.year}
                                  </span>
                                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${question.difficulty === 'easy' ? 'bg-green-100 text-green-800' : question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                    {difficultyLevels.find(d => d.id === question.difficulty)?.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              {expandedQuestion === question.id ? <ChevronDownIcon className="w-6 h-6 text-[#1E3A8A]" /> : <ChevronRightIcon className="w-6 h-6 text-gray-400" />}
                            </div>
                          </div>
                        </div>
                        {/* Expanded Answer Section */}
                        {expandedQuestion === question.id && <div className="px-6 pb-6 pt-2 animate-fadeIn">
                            <div className="pl-12">
                              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#1E3A8A]">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                  <BookOpenIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                                  Complete Question
                                </h4>
                                <p className="text-gray-800 mb-5">
                                  {question.question}
                                </p>
                                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                  <CheckCircleIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                                  Answer
                                </h4>
                                <p className="text-gray-800 mb-5">
                                  {question.answer}
                                </p>
                                {question.references && question.references.length > 0 && <>
                                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                        <BookmarkIcon className="w-4 h-4 mr-2 text-[#1E3A8A]" />
                                        References
                                      </h4>
                                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        {question.references.map((ref, i) => <li key={i}>{ref}</li>)}
                                      </ul>
                                    </>}
                              </div>
                              <div className="flex justify-end mt-4 space-x-3">
                                <button className="px-4 py-2 border border-[#1E3A8A] text-[#1E3A8A] rounded-md hover:bg-[#1E3A8A]/5 transition-colors duration-300 flex items-center">
                                  <BookmarkIcon className="w-4 h-4 mr-2" />
                                  Save
                                </button>
                                <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E3A8A]/90 transition-colors duration-300 flex items-center">
                                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                                  Next Question
                                </button>
                              </div>
                            </div>
                          </div>}
                      </div>)}
                  </div> : <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                      <AlertCircleIcon className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your filters or search criteria to find
                      questions.
                    </p>
                    <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E3A8A]/90 transition-colors duration-300" onClick={() => setActiveFilters({
                  examType: 'all',
                  subject: 'all',
                  difficulty: 'all',
                  year: 'all'
                })}>
                      Reset Filters
                    </button>
                  </div>}
                {/* Pagination (simplified) */}
                {filteredQuestions.length > 0 && <div className="p-6 border-t border-gray-200 flex justify-center">
                    <div className="flex space-x-1">
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        Previous
                      </button>
                      <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md">
                        1
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        2
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        3
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        Next
                      </button>
                    </div>
                  </div>}
              </div>
              {/* Featured Question Sets */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Featured Question Sets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredSets.map(set => <div key={set.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#D4AF37] hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start">
                        <div className={`w-16 h-16 rounded-lg bg-${set.color === 'navy' ? '[#1E3A8A]' : set.color === 'gold' ? '[#D4AF37]' : set.color === 'blue' ? 'blue-500' : 'green-500'} flex items-center justify-center text-white mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          {set.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#1E3A8A] transition-colors duration-300">
                            {set.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {set.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <FileTextIcon className="w-4 h-4 mr-1" />
                            <span>{set.count} questions</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                        <button className="px-4 py-2 text-[#1E3A8A] font-medium hover:bg-[#1E3A8A]/5 rounded-md transition-colors duration-300 flex items-center">
                          View Set
                          <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Practice Mode Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2E4A9A] rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Take a Mock Test Now
                </h2>
                <p className="mb-6 text-blue-100">
                  Simulate real exam conditions with our timed mock tests. Test
                  your knowledge, track your progress, and identify areas for
                  improvement.
                </p>
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Your Progress</span>
                    <span>75/100 questions answered</span>
                  </div>
                  <div className="h-2.5 bg-blue-900 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4AF37] rounded-full" style={{
                    width: '75%'
                  }}></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#C4A030] transition-colors duration-300 flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    Start Timed Test
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300 flex items-center">
                    <BookOpenIcon className="w-5 h-5 mr-2" />
                    Practice Mode
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="Student studying" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1E3A8A]/80 md:bg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Downloadable Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map(resource => <div key={resource.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center mb-4 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                    <FileTextIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span>{resource.size}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <DownloadIcon className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <button className="w-full py-2.5 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E3A8A]/90 transition-colors duration-300 flex items-center justify-center">
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    <span>Download</span>
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 relative">
                <div className="text-6xl text-[#D4AF37]/20 font-serif absolute top-4 left-4">
                  "
                </div>
                <div className="relative">
                  <p className="text-gray-700 mb-6 italic relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]" />
                    <div className="ml-3">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-6xl text-[#D4AF37]/20 font-serif absolute bottom-4 right-4 rotate-180">
                  "
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* FAQ Section removed as requested */}
      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">
              Ready to Excel in Your Law Exams?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful law students who have transformed
              their exam preparation with our comprehensive question bank
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#C4A030] transition-all duration-300 flex items-center group">
                <span>Start Practicing Now</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default QuestionBank;