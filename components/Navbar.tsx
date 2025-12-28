
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '병원소개', href: '#about' },
    { name: '진료안내', href: '#services' },
    { name: '의료진', href: '#doctors' },
    { name: '커뮤니티', href: '#blog' },
    { name: '오시는길', href: '#emergency' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="4" width="4" height="16" fill="white" />
              <rect x="4" y="10" width="16" height="4" fill="white" />
            </svg>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            구리 센트럴병원
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center transition-all">
            진료 예약하기 <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-slate-900' : 'text-white'} p-2`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white py-3 rounded-lg font-bold">진료 예약하기</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
