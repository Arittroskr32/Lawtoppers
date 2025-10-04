import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, GlobeIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
export const ContactSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate submission success
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  const socialLinks = [{
    name: 'Facebook',
    icon: <FacebookIcon className="w-5 h-5" />,
    color: '#1877F2',
    hoverColor: '#0e66d0'
  }, {
    name: 'Twitter',
    icon: <TwitterIcon className="w-5 h-5" />,
    color: '#1DA1F2',
    hoverColor: '#0c85d0'
  }, {
    name: 'LinkedIn',
    icon: <LinkedinIcon className="w-5 h-5" />,
    color: '#0A66C2',
    hoverColor: '#084e95'
  }, {
    name: 'Instagram',
    icon: <InstagramIcon className="w-5 h-5" />,
    color: '#E4405F',
    hoverColor: '#d1294b'
  }, {
    name: 'YouTube',
    icon: <YoutubeIcon className="w-5 h-5" />,
    color: '#FF0000',
    hoverColor: '#d90000'
  }];
  return <section id="contact" className="py-16 bg-white dark:bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            {t('contact.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} h-full flex flex-col justify-between`}>
            <div className="space-y-3 mb-5">
              <div className="flex items-start space-x-4 hover-border-animation p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 group hover:-translate-y-1 transform">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Law Avenue, Dhaka, Bangladesh
                  </p>
                  <span className="border-left"></span>
                  <span className="border-right"></span>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover-border-animation p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 group hover:-translate-y-1 transform">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +880 1234 567890
                  </p>
                  <span className="border-left"></span>
                  <span className="border-right"></span>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover-border-animation p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 group hover:-translate-y-1 transform">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    info@lawtoppers.com
                  </p>
                  <span className="border-left"></span>
                  <span className="border-right"></span>
                </div>
              </div>
            </div>
            {/* Social Links - Redesigned with professional look, left-aligned with medium spacing */}
            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Connect With Us
              </h3>
              {/* Updated social media icons - square with rounded corners */}
              <div className="flex justify-start items-center gap-4 mb-8">
                {socialLinks.map((link, index) => <a key={index} href="#" className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg relative overflow-hidden" aria-label={link.name} style={{
                backgroundColor: link.color,
                transitionDelay: `${index * 50}ms`
              }}>
                    <div className="text-white">{link.icon}</div>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </a>)}
              </div>
              {/* Newsletter Signup with improved design */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <GlobeIcon className="w-5 h-5 mr-2 text-indigo-500 animate-spin-slow" />
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Get the latest updates, news and special offers sent directly
                  to your inbox.
                </p>
                <div className="relative">
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100" />
                  <button className="absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center group">
                    <span className="hidden md:inline mr-1 relative z-10">
                      Subscribe
                    </span>
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-lg"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} h-full`}>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 border border-transparent h-full">
              <span className="border-left"></span>
              <span className="border-right"></span>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Send Us a Message
              </h3>
              {submitted ? <div className="flex flex-col items-center justify-center py-8 animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
                    <CheckCircleIcon className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Your message has been sent successfully. We'll get back to
                    you soon!
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {t('contact.name')}
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100 group-hover:border-indigo-300 dark:group-hover:border-indigo-700" />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100 group-hover:border-indigo-300 dark:group-hover:border-indigo-700" />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {t('contact.email')}
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100 group-hover:border-indigo-300 dark:group-hover:border-indigo-700" />
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {t('contact.message')}
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 dark:text-gray-100 group-hover:border-indigo-300 dark:group-hover:border-indigo-700"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                      <span className="relative z-10">{t('contact.send')}</span>
                      <SendIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                    </button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};