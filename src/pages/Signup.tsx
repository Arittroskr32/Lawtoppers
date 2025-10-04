import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon, CheckCircleIcon, AlertCircleIcon, ArrowRightIcon, ShieldCheckIcon, AwardIcon, BookOpenIcon, ScaleIcon } from 'lucide-react';
const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const {
    signup
  } = useAuth();
  const {
    theme
  } = useTheme();
  const navigate = useNavigate();
  // Simple password strength calculator
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    let strength = 0;
    // Length check
    if (password.length >= 8) strength += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    // Contains number
    if (/[0-9]/.test(password)) strength += 1;
    // Contains special character
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  }, [password]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!email.trim() || !password.trim() || !name.trim()) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const success = await signup(email, password, name);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError('An error occurred during signup');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSocialSignup = (provider: string) => {
    setIsLoading(true);
    // In a real implementation, this would redirect to OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      setError(`${provider} signup is not implemented in this demo. Please use the form below.`);
    }, 1000);
  };
  // Get color for password strength indicator
  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500 dark:bg-red-600';
    if (passwordStrength <= 3) return 'bg-yellow-500 dark:bg-yellow-600';
    return 'bg-green-500 dark:bg-green-600';
  };
  // Get text for password strength
  const getStrengthText = () => {
    if (!password) return '';
    if (passwordStrength <= 1) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };
  return <div className="h-screen w-screen overflow-hidden flex flex-row bg-white dark:bg-slate-900">
      {/* Left Column - Branding & Info */}
      <div className="w-5/12 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 flex items-center justify-center">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(10)].map((_, i) => <div key={i} className="absolute rounded-full bg-white" style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2
          }} />)}
          </div>
          <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1000 200">
            <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,200 L0,200 Z" fill="white" />
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-md px-6 py-6 text-white">
          <div className="flex items-center mb-5">
            <img src="/logo.jpg" alt="LAWTOPPERS Logo" className="w-12 h-12 object-contain rounded-lg shadow-lg mr-3" />
            <h1 className="text-2xl font-bold tracking-tight">LAWTOPPERS</h1>
          </div>
          <h2 className="text-2xl font-bold mb-3">Begin Your Legal Journey</h2>
          <p className="text-base text-white/80 mb-5">
            Create your account and unlock premium legal education resources.
          </p>
          {/* Benefits list */}
          <div className="space-y-3 mb-5">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-1.5 bg-white/20 rounded-lg mr-2">
                <AwardIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Premium Materials</h3>
                <p className="text-sm text-white/70">
                  Access exclusive study guides and exams
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 p-1.5 bg-white/20 rounded-lg mr-2">
                <ScaleIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Personalized Learning</h3>
                <p className="text-sm text-white/70">
                  Custom study plans for your goals
                </p>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-white/10 rounded-lg p-2.5 text-center backdrop-blur-sm">
              <p className="text-xl font-bold">15K+</p>
              <p className="text-sm text-white/70">Students</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2.5 text-center backdrop-blur-sm">
              <p className="text-xl font-bold">95%</p>
              <p className="text-sm text-white/70">Success</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2.5 text-center backdrop-blur-sm">
              <p className="text-xl font-bold">50+</p>
              <p className="text-sm text-white/70">Mentors</p>
            </div>
          </div>
          {/* Testimonial */}
          <div className="bg-white/10 rounded-lg p-3.5 backdrop-blur-sm">
            <p className="italic text-sm mb-2">
              "The structured curriculum at LAWTOPPERS gave me the edge I needed
              to succeed in my legal exams."
            </p>
            <div className="flex items-center">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Student" className="w-9 h-9 rounded-full mr-2 border-2 border-white/50" />
              <div>
                <p className="text-sm font-semibold">Rajiv Mehta</p>
                <p className="text-xs text-white/70">BJS Qualifier, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column - Signup Form */}
      <div className="w-7/12 flex items-center justify-center p-5 bg-gray-50 dark:bg-slate-900">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Your Account
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Join LAWTOPPERS and start your success journey
            </p>
          </div>
          {error && <div className="mb-3 p-2.5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm flex items-center animate-fadeIn">
              <AlertCircleIcon className="w-5 h-5 mr-2 flex-shrink-0 text-red-500" />
              <span>{error}</span>
            </div>}
          {isSuccess && <div className="mb-3 p-2.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm flex items-center animate-fadeIn">
              <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
              <span>Account created successfully! Redirecting...</span>
            </div>}
          {/* Social Signup Buttons - horizontal */}
          <div className="flex space-x-3 mb-4">
            <button type="button" onClick={() => handleSocialSignup('Google')} disabled={isLoading || isSuccess} className="flex-1 flex items-center justify-center px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              Google
            </button>
            <button type="button" onClick={() => handleSocialSignup('LinkedIn')} disabled={isLoading || isSuccess} className="flex-1 flex items-center justify-center px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
              </svg>
              LinkedIn
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
              or
            </span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className={`transition-all duration-300 ${focusedField === 'name' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'name' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  <UserIcon className="h-5 w-5" />
                </div>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="John Doe" className={`pl-10 w-full py-2.5 px-3.5 bg-white dark:bg-slate-800 border ${focusedField === 'name' ? 'border-indigo-500 dark:border-indigo-400 ring-1 ring-indigo-500/20 dark:ring-indigo-400/20' : 'border-gray-300 dark:border-slate-700'} rounded-lg focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-base`} required />
              </div>
            </div>
            <div className={`transition-all duration-300 ${focusedField === 'email' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'email' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  <MailIcon className="h-5 w-5" />
                </div>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="your@email.com" className={`pl-10 w-full py-2.5 px-3.5 bg-white dark:bg-slate-800 border ${focusedField === 'email' ? 'border-indigo-500 dark:border-indigo-400 ring-1 ring-indigo-500/20 dark:ring-indigo-400/20' : 'border-gray-300 dark:border-slate-700'} rounded-lg focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-base`} required />
              </div>
            </div>
            <div className={`transition-all duration-300 ${focusedField === 'password' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'password' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  <LockIcon className="h-5 w-5" />
                </div>
                <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)} placeholder="••••••••" className={`pl-10 w-full py-2.5 px-3.5 bg-white dark:bg-slate-800 border ${focusedField === 'password' ? 'border-indigo-500 dark:border-indigo-400 ring-1 ring-indigo-500/20 dark:ring-indigo-400/20' : 'border-gray-300 dark:border-slate-700'} rounded-lg focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-base`} required />
                <button type="button" className={`absolute inset-y-0 right-0 pr-3.5 flex items-center transition-all duration-300 ${focusedField === 'password' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              {/* Password strength indicator */}
              {password && <div className="mt-1.5">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Strength:
                    </div>
                    <div className={`text-sm font-medium ${passwordStrength <= 1 ? 'text-red-500 dark:text-red-400' : passwordStrength <= 3 ? 'text-yellow-500 dark:text-yellow-400' : 'text-green-500 dark:text-green-400'}`}>
                      {getStrengthText()}
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full ${getStrengthColor()} transition-all duration-300`} style={{
                  width: `${passwordStrength / 5 * 100}%`
                }}></div>
                  </div>
                </div>}
            </div>
            <div className={`transition-all duration-300 ${focusedField === 'confirmPassword' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'confirmPassword' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  <LockIcon className="h-5 w-5" />
                </div>
                <input id="confirmPassword" type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onFocus={() => setFocusedField('confirmPassword')} onBlur={() => setFocusedField(null)} placeholder="••••••••" className={`pl-10 w-full py-2.5 px-3.5 bg-white dark:bg-slate-800 border ${focusedField === 'confirmPassword' ? 'border-indigo-500 dark:border-indigo-400 ring-1 ring-indigo-500/20 dark:ring-indigo-400/20' : 'border-gray-300 dark:border-slate-700'} rounded-lg focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-base`} required />
              </div>
              {confirmPassword && password !== confirmPassword && <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  Passwords do not match
                </p>}
            </div>
            <div className="flex items-center mt-2">
              <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button type="submit" disabled={isLoading || isSuccess} className={`w-full mt-3 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center text-base ${isLoading || isSuccess ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isLoading ? <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : isSuccess ? <CheckCircleIcon className="mr-2 h-5 w-5" /> : <ArrowRightIcon className="mr-2 h-5 w-5" />}
              {isLoading ? 'Creating...' : isSuccess ? 'Success!' : 'Create Account'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                Sign in
              </a>
            </p>
          </div>
          {/* Security badge */}
          <div className="flex items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400">
            <ShieldCheckIcon className="w-4 h-4 mr-1" />
            Your data is securely encrypted
          </div>
        </div>
      </div>
    </div>;
};
export default Signup;