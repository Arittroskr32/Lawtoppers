import React, { useEffect, useState, useRef } from 'react';
// Note: avoid calling hooks at module scope — hook usage must be inside components
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNotifications } from '../../contexts/NotificationContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon, ChevronDownIcon, BellIcon, UserIcon, LogOutIcon, SettingsIcon, BookmarkIcon, GraduationCapIcon, ClipboardListIcon, InfoIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon, SearchIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
export const Navbar: React.FC = () => {
  // const { t, toggleLanguage, language } = useLanguage();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead
  } = useNotifications();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const coursesDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const notificationsDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  // Set active link based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path.includes('/courses')) {
      setActiveLink('courses');
    } else if (path.includes('/exam-batch')) {
      setActiveLink('exam-batch');
    } else if (path.includes('/job-preparation')) {
      setActiveLink('job-preparation');
    } else if (path.includes('/question-bank')) {
      setActiveLink('question-bank');
    } else if (path.includes('/viva-guideline')) {
      setActiveLink('viva-guideline');
    } else {
      setActiveLink(path.substring(1)); // Remove leading slash
    }
  }, [location.pathname]);
  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setIsCoursesDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
      if (notificationsDropdownRef.current && !notificationsDropdownRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signup');
  };
  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    navigate('/');
  };
  const handleNotificationClick = (id: string) => {
    markAsRead(id);
  };
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // Reset search
    setIsSearchOpen(false);
    setSearchQuery('');
  };
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <InfoIcon className="w-4 h-4 text-blue-500" />;
      case 'success':
        return <CheckCircleIcon className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangleIcon className="w-4 h-4 text-amber-500" />;
      case 'error':
        return <XCircleIcon className="w-4 h-4 text-red-500" />;
      default:
        return <InfoIcon className="w-4 h-4 text-blue-500" />;
    }
  };
  const getNotificationBg = (type: string, read: boolean) => {
    if (read) return 'hover:bg-gray-100 dark:hover:bg-gray-700';
    switch (type) {
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20';
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-b from-slate-900/95 to-slate-800/95 dark:from-[#0A2342] dark:to-[#0A2342] backdrop-blur-md shadow-lg border-b-4 border-indigo-500/30 dark:border-[#CFAF61]/30' : 'bg-gradient-to-b from-slate-900/80 to-slate-800/60 dark:from-[#0A2342]/80 dark:to-[#0A2342]/60 backdrop-blur-sm border-b-2 border-indigo-500/20 dark:border-[#CFAF61]/20'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/lawtopper_logo_new.png" alt="LAWTOPPERS Logo" className="w-12 h-12 object-contain rounded-lg shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300" />
            <span className="text-2xl font-bold text-white">LAWTOPPERS</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="/" label="Home" isActive={activeLink === 'home'} />
          {/* Courses Dropdown */}
          <div className="relative" ref={coursesDropdownRef}>
            <button onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)} className={`px-4 py-2 mx-1 rounded-md transition-all duration-300 relative font-medium flex items-center ${activeLink === 'courses' ? 'text-indigo-400 dark:text-[#CFAF61]' : 'text-gray-200 hover:text-indigo-400 dark:hover:text-[#CFAF61]'} nav-link`}>
              Courses
              <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCoursesDropdownOpen && <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#0A2342] rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden animate-fadeIn">
                <Link to="/courses/law-academic" className="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-[#CFAF61]/20">
                  Law Academic
                </Link>
                <Link to="/courses/bar" className="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-[#CFAF61]/20">
                  BAR
                </Link>
                <Link to="/courses/bjs" className="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-[#CFAF61]/20">
                  BJS
                </Link>
              </div>}
          </div>
          <NavLink href="/exam-batch" label="Exam Batch" isActive={activeLink === 'exam-batch'} />
          <NavLink href="/job-preparation" label="Job Preparation" isActive={activeLink === 'job-preparation'} />
          <NavLink href="/question-bank" label="Question Bank" isActive={activeLink === 'question-bank'} />
          <NavLink href="/viva-guideline" label="Viva Guideline" isActive={activeLink === 'viva-guideline'} />
        </div>
        {/* Toggle Buttons and Login/Profile - All on right */}
        <div className="flex items-center space-x-2">
          {/* Search Button/Bar */}
          <div className="relative">
            {isSearchOpen ? <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-white dark:bg-[#0A2342] rounded-md overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                <input ref={searchInputRef} type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 focus:outline-none dark:bg-[#0A2342] dark:text-white" />
                <button type="button" onClick={handleSearchToggle} className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
                  <XIcon className="w-5 h-5" />
                </button>
              </form> : <button onClick={handleSearchToggle} className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 relative group overflow-hidden" aria-label="Search">
                <div className="absolute inset-0 bg-indigo-500/70 dark:bg-[#CFAF61]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                <SearchIcon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Search
                </span>
              </button>}
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 relative group overflow-hidden" aria-label="Toggle Theme">
            <div className="absolute inset-0 bg-indigo-500/70 dark:bg-[#CFAF61]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10" /> : <SunIcon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10" />}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
          {/* Login/Signup or User Profile */}
          {!isAuthenticated ? <div className="hidden md:flex items-center space-x-2">
              <button onClick={handleLogin} className="px-4 py-2 bg-transparent border border-indigo-400 dark:border-[#CFAF61] text-indigo-400 dark:text-[#CFAF61] font-medium rounded-md hover:bg-indigo-500/10 dark:hover:bg-[#CFAF61]/10 transition-all duration-300">
                Login
              </button>
              <button onClick={handleSignup} className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-[#CFAF61] dark:to-[#B79A46] text-white font-medium rounded-md hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-[#CFAF61]/30 transition-all duration-300">
                Signup
              </button>
            </div> : <div className="hidden md:flex items-center space-x-2">
              {/* Notifications */}
              <div className="relative" ref={notificationsDropdownRef}>
                <button className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 relative group overflow-hidden" aria-label="Notifications" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                  <div className="absolute inset-0 bg-indigo-500/70 dark:bg-[#CFAF61]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  <BellIcon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10 group-hover:animate-wiggle" />
                  {unreadCount > 0 && <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] px-1 border-2 border-slate-800 dark:border-[#0A2342] group-hover:scale-110 transition-transform duration-300">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>}
                </button>
                {isNotificationsOpen && <div className="absolute top-full right-0 mt-1 w-80 bg-white dark:bg-[#0A2342] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden animate-fadeIn">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Notifications
                      </h3>
                      {unreadCount > 0 && <button onClick={() => markAllAsRead()} className="text-xs text-indigo-600 dark:text-[#CFAF61] hover:underline">
                          Mark all as read
                        </button>}
                    </div>
                    <div className="max-h-[350px] overflow-y-auto">
                      {notifications.length === 0 ? <div className="py-8 px-4 text-center text-gray-500 dark:text-gray-400">
                          <div className="flex justify-center mb-3">
                            <BellIcon className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                          </div>
                          <p>No notifications yet</p>
                        </div> : notifications.map(notification => <div key={notification.id} className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer ${getNotificationBg(notification.type, notification.read)}`} onClick={() => handleNotificationClick(notification.id)}>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mr-3 mt-1">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className={`text-sm font-medium ${notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
                                    {notification.title}
                                  </p>
                                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                    {formatDistanceToNow(notification.timestamp, {
                            addSuffix: true
                          })}
                                  </span>
                                </div>
                                <p className={`text-xs mt-1 ${notification.read ? 'text-gray-500 dark:text-gray-400' : 'text-gray-600 dark:text-gray-300'}`}>
                                  {notification.message}
                                </p>
                              </div>
                            </div>
                          </div>)}
                    </div>
                    {notifications.length > 0 && <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                        <Link to="/notifications" className="text-xs text-indigo-600 dark:text-[#CFAF61] hover:underline">
                          View all notifications
                        </Link>
                      </div>}
                  </div>}
              </div>
              {/* Profile Dropdown with image */}
              <div className="relative" ref={profileDropdownRef}>
                <button onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} className="p-0.5 rounded-full hover:bg-white/10 transition-all duration-300 relative flex items-center group" aria-label="User Profile">
                  <img src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'} alt="Profile" className="w-8 h-8 rounded-full object-cover border-2 border-indigo-400 dark:border-[#CFAF61] group-hover:border-white transition-colors duration-300 group-hover:scale-105 transform" />
                </button>
                {isProfileDropdownOpen && <div className="absolute top-full right-0 mt-1 w-56 bg-white dark:bg-[#0A2342] rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden animate-fadeIn">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {user?.name || 'John Doe'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {user?.email || 'john.doe@example.com'}
                      </p>
                    </div>
                    <Link to="/profile" className="flex items-center px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <UserIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      Profile Page
                    </Link>
                    <Link to="/my-courses" className="flex items-center px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <GraduationCapIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      My Courses
                    </Link>
                    <Link to="/my-exam-batches" className="flex items-center px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <ClipboardListIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      My Exam Batches
                    </Link>
                    <Link to="/saved-questions" className="flex items-center px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <BookmarkIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      Saved Questions / Bookmarks
                    </Link>
                    <Link to="/account-settings" className="flex items-center px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <SettingsIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      Account Settings
                    </Link>
                    <button onClick={handleLogout} className="w-full flex items-center px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border-t border-gray-200 dark:border-gray-700">
                      <LogOutIcon className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>}
              </div>
            </div>}
          {/* Mobile menu button */}
          <button className="md:hidden p-2 ml-2 rounded-full hover:bg-white/20 transition-all duration-300 relative group overflow-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="absolute inset-0 bg-indigo-500/70 dark:bg-[#CFAF61]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            {isMenuOpen ? <XIcon className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10" /> : <MenuIcon className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-slate-900/95 dark:bg-[#0A2342]/95 shadow-lg border-t border-gray-800 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <MobileNavLink href="/" label="Home" isActive={activeLink === 'home'} onClick={() => setIsMenuOpen(false)} />
            {/* Mobile Courses Dropdown */}
            <div className="py-2">
              <button onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)} className={`w-full flex justify-between items-center px-3 py-2 rounded-md ${activeLink === 'courses' ? 'bg-indigo-900/30 dark:bg-[#CFAF61]/20 text-indigo-400 dark:text-[#CFAF61] font-medium' : 'text-gray-200'}`}>
                <span>Courses</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesDropdownOpen && <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 dark:border-[#CFAF61]/40 pl-2">
                  <Link to="/courses/law-academic" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
                    Law Academic
                  </Link>
                  <Link to="/courses/bar" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
                    BAR
                  </Link>
                  <Link to="/courses/bjs" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
                    BJS
                  </Link>
                </div>}
            </div>
            <MobileNavLink href="/exam-batch" label="Exam Batch" isActive={activeLink === 'exam-batch'} onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/job-preparation" label="Job Preparation" isActive={activeLink === 'job-preparation'} onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/question-bank" label="Question Bank" isActive={activeLink === 'question-bank'} onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/viva-guideline" label="Viva Guideline" isActive={activeLink === 'viva-guideline'} onClick={() => setIsMenuOpen(false)} />
            {/* Mobile Search */}
            <div className="py-2">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 bg-gray-800 dark:bg-[#0A2342] border border-gray-700 dark:border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#CFAF61]" />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <SearchIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
            {/* Mobile Login/Profile section */}
            <div className="pt-2 mt-2 border-t border-gray-700 dark:border-gray-600">
              {!isAuthenticated ? <div className="flex flex-col space-y-2">
                  <button onClick={handleLogin} className="w-full py-2.5 mt-1 bg-transparent border border-indigo-500 dark:border-[#CFAF61] text-indigo-400 dark:text-[#CFAF61] font-medium rounded-md transition-all duration-300">
                    Login
                  </button>
                  <button onClick={handleSignup} className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-[#CFAF61] dark:to-[#B79A46] text-white font-medium rounded-md hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-[#CFAF61]/30 transition-all duration-300">
                    Signup
                  </button>
                </div> : <div className="space-y-1">
                  <div className="px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'} alt="Profile" className="w-8 h-8 rounded-full object-cover border-2 border-indigo-400 dark:border-[#CFAF61] mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-200">
                          {user?.name || 'John Doe'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {user?.email || 'john.doe@example.com'}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <BellIcon className="w-5 h-5 text-gray-300" />
                      {unreadCount > 0 && <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] px-1 border-2 border-slate-800 dark:border-[#0A2342]">
                          {unreadCount}
                        </span>}
                    </div>
                  </div>
                  {/* Mobile notifications section */}
                  {unreadCount > 0 && <div className="px-3 py-2 mb-2 bg-gray-800/50 dark:bg-[#0A2342]/70 rounded-md">
                      <h4 className="text-xs text-gray-400 mb-2 flex justify-between items-center">
                        <span>Recent Notifications</span>
                        <button onClick={() => markAllAsRead()} className="text-xs text-indigo-400 dark:text-[#CFAF61] hover:underline">
                          Mark all as read
                        </button>
                      </h4>
                      {notifications.filter(n => !n.read).slice(0, 2).map(notification => <div key={notification.id} className={`mb-2 p-2 rounded-md text-xs ${notification.type === 'info' ? 'bg-blue-900/20 text-blue-300' : notification.type === 'success' ? 'bg-green-900/20 text-green-300' : notification.type === 'warning' ? 'bg-amber-900/20 text-amber-300' : 'bg-red-900/20 text-red-300'}`} onClick={() => handleNotificationClick(notification.id)}>
                            <div className="flex">
                              <div className="flex-shrink-0 mr-2">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div>
                                <p className="font-medium">
                                  {notification.title}
                                </p>
                                <p className="mt-0.5 opacity-80">
                                  {notification.message}
                                </p>
                              </div>
                            </div>
                          </div>)}
                      <Link to="/notifications" className="block text-center text-xs text-indigo-400 dark:text-[#CFAF61] hover:underline mt-1">
                        View all notifications
                      </Link>
                    </div>}
                  <Link to="/profile" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md">
                    Profile Page
                  </Link>
                  <Link to="/my-courses" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md">
                    My Courses
                  </Link>
                  <Link to="/my-exam-batches" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md">
                    My Exam Batches
                  </Link>
                  <Link to="/saved-questions" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md">
                    Saved Questions / Bookmarks
                  </Link>
                  <Link to="/account-settings" className="block py-2 px-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10 rounded-md">
                    Account Settings
                  </Link>
                  <button onClick={handleLogout} className="w-full mt-1 flex items-center justify-center py-2 px-3 text-red-400 bg-red-900/10 hover:bg-red-900/20 rounded-md">
                    <LogOutIcon className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>}
            </div>
          </div>
        </div>}
    </nav>;
};
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}
const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive
}) => {
  return <a href={href} className={`px-4 py-2 mx-1 rounded-md transition-all duration-300 relative font-medium text-sm nav-link ${isActive ? 'text-indigo-400 dark:text-[#CFAF61]' : 'text-gray-200 hover:text-indigo-400 dark:hover:text-[#CFAF61]'}`}>
      {label}
      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-[#CFAF61] dark:to-[#B79A46]"></span>}
    </a>;
};
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}
const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  label,
  isActive,
  onClick
}) => {
  return <a href={href} className={`block py-2 px-3 rounded-md text-sm ${isActive ? 'bg-indigo-900/30 dark:bg-[#CFAF61]/20 text-indigo-400 dark:text-[#CFAF61] font-medium' : 'text-gray-200 hover:bg-gray-800 dark:hover:bg-[#CFAF61]/10'}`} onClick={onClick}>
      {label}
    </a>;
};