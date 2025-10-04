import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, ChevronRightIcon, ArrowUpIcon, MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GlobeIcon, BookOpenIcon, FileTextIcon, HelpCircleIcon, ShieldIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Footer: React.FC = () => {
  const {
    t
  } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsVisible(position > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const socialLinks = [{
    name: 'Facebook',
    icon: <FacebookIcon className="w-4 h-4" />,
    color: '#1877F2'
  }, {
    name: 'Twitter',
    icon: <TwitterIcon className="w-4 h-4" />,
    color: '#1DA1F2'
  }, {
    name: 'LinkedIn',
    icon: <LinkedinIcon className="w-4 h-4" />,
    color: '#0A66C2'
  }, {
    name: 'Instagram',
    icon: <InstagramIcon className="w-4 h-4" />,
    color: '#E4405F'
  }, {
    name: 'YouTube',
    icon: <YoutubeIcon className="w-4 h-4" />,
    color: '#FF0000'
  }];
  return <footer className="bg-slate-900 text-white">
      {/* Top accent line with animation */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 animate-gradient-x"></div>
      {/* Main Footer Content */}
      <div className="py-14 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <path d="M96,95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-4v-1h4v-9h-4v-1h4v-9h-4v-1h4v-9h-4v-1h4v-9h-4v-1h4v-9zm-1,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9z" fill="currentColor" fillRule="evenodd" opacity="0.5" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
            {/* Logo and About Column */}
            <div className="md:col-span-5">
              <div className="flex items-center mb-6 group">
                <div className="mr-3 transform transition-transform duration-300 group-hover:scale-105">
                  <img src="/logo.jpg" alt="LAWTOPPERS Logo" className="w-12 h-12 object-contain rounded-lg shadow-md transition-all duration-300 group-hover:shadow-indigo-500/30" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-indigo-300">
                  LAWTOPPERS
                </h3>
              </div>
              <div className="space-y-4 mb-8">
                {/* Bengali text with animation */}
                <p className="text-indigo-300 font-medium text-base relative overflow-hidden group">
                  <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-0">
                    {t('hero.subtitle')}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></span>
                </p>
                {/* English text with animation */}
                <p className="text-gray-300 text-sm leading-relaxed relative group">
                  <span className="inline-block transform transition-transform duration-500 group-hover:translate-x-1">
                    Join our community of aspiring legal professionals and excel
                    in your career.
                  </span>
                </p>
              </div>
              {/* Social Links with enhanced animations */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => <a key={index} href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-2 bg-slate-800 hover:bg-slate-700 hover:shadow-lg hover:shadow-indigo-900/20 relative overflow-hidden group" aria-label={link.name} style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                      {link.icon}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
                  </a>)}
              </div>
            </div>
            {/* Quick Links Column */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-1 border-b border-slate-700 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <FooterLink href="#" text={t('nav.home')} />
                <FooterLink href="#courses" text={t('nav.courses')} />
                <FooterLink href="#questions" text={t('nav.questions')} />
                <FooterLink href="#job" text={t('nav.job')} />
                <FooterLink href="#contact" text={t('contact.title')} />
              </ul>
            </div>
            {/* Support Column */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-1 border-b border-slate-700 inline-block">
                Support
              </h4>
              <ul className="space-y-3 text-sm">
                <FooterLink href="#" text="Help Center" icon={<HelpCircleIcon className="w-3.5 h-3.5" />} />
                <FooterLink href="#" text="Terms of Service" icon={<FileTextIcon className="w-3.5 h-3.5" />} />
                <FooterLink href="#" text="Privacy Policy" icon={<ShieldIcon className="w-3.5 h-3.5" />} />
                <FooterLink href="#" text="FAQs" icon={<HelpCircleIcon className="w-3.5 h-3.5" />} />
              </ul>
            </div>
            {/* Contact Information Column */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-1 border-b border-slate-700 inline-block">
                {t('contact.title')}
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start text-gray-300 group">
                  <MapPinIcon className="w-4 h-4 text-indigo-400 mt-0.5 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="transition-colors duration-300 group-hover:text-white">
                    123 Law Avenue, Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center text-gray-300 group">
                  <MailIcon className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <a href="mailto:info@lawtoppers.com" className="hover:text-indigo-300 transition-colors duration-300 relative">
                    <span>info@lawtoppers.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
                <li className="flex items-center text-gray-300 group">
                  <PhoneIcon className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <a href="tel:+8801234567890" className="hover:text-indigo-300 transition-colors duration-300 relative">
                    <span>+880 1234 567890</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Bar - reduced padding */}
      <div className="border-t border-slate-800 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="mb-3 md:mb-0">
              <p>
                © {currentYear} LAWTOPPERS. {t('footer.rights')}
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 relative group">
                <span>Terms</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 relative group">
                <span>Privacy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 relative group">
                <span>Cookies</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Back to top button with enhanced animation */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1" aria-label="Scroll to top">
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      </div>
    </footer>;
};
// Enhanced Footer Link with animations
const FooterLink: React.FC<{
  href: string;
  text: string;
  icon?: React.ReactNode;
}> = ({
  href,
  text,
  icon
}) => <li>
    <a href={href} className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
      {icon && <span className="text-indigo-400 mr-2 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>}
      <span className="relative">
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </li>;