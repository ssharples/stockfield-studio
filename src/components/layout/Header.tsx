import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Headphones } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Listen', href: '#audio-comparison' },
    { name: 'About', href: '#about' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="floating-header">
      <nav className="glass-panel shadow-glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <img 
                src="https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/stockfield%20studio%20logo%202.png?t=2025-01-16T13%3A38%3A32.364Z"
                alt="Stockfield Studio Logo"
                className="h-12 w-auto animate-spin-slow transition-opacity group-hover:opacity-90"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link px-3 py-2 hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.skool.com/the-sound-society"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Unlimited Mixing
              </a>
            </div>

            {/* Mobile Navigation */}
            <button
              className="md:hidden text-white hover:text-chrome-light transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden fixed top-20 left-0 w-full glass-panel backdrop-blur-lg bg-white/5 shadow-glass z-50 py-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition-all border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.skool.com/the-sound-society"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-6 my-4 px-6 py-3 button-primary text-center rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
