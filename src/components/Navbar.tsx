
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-college-maroon">MGDC</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">Home</Link>
            <Link to="#about" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">About</Link>
            <Link to="#courses" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">Courses</Link>
            <Link to="#faculty" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">Faculty</Link>
            <Link to="#facilities" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">Facilities</Link>
            <Link to="#contact" className="px-3 py-2 text-college-dark hover:text-college-orange transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-college-orange focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#courses" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </a>
          <a 
            href="#faculty" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
            onClick={() => setIsOpen(false)}
          >
            Faculty
          </a>
          <a 
            href="#facilities" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
            onClick={() => setIsOpen(false)}
          >
            Facilities
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-college-dark hover:text-college-orange"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
