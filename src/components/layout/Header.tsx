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
            <Link to="/" className="flex items-center space-x-2 group">
              <Headphones className="w-8 h-8 text-chrome-light group-hover:text-chrome-main transition-colors" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Studio Stockfield
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link px-3 py-2 hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.skool.com/the-sound-society"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Subscribe
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
            <div className="md:hidden absolute top-full left-0 w-full glass-panel shadow-glass mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all first:rounded-t-xl last:rounded-b-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.skool.com/the-sound-society"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-6 my-4 button-primary text-center"
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
