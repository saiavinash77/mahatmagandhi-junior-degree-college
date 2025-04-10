
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Mahatma Gandhi Degree & Junior College</h2>
            <p className="text-gray-300">
              Established in 1983, we are committed to providing quality education that nurtures the intellectual, social, and moral development of our students.
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-300">
              <p>Near Bus Stand, Atreyapuram</p>
              <p>Opposite to Venkateswaraswamy Temple</p>
              <p className="mt-3">Phone: +91 98668 29897</p>
              <p>Email: info@mgdcollege.edu.in</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">© {new Date().getFullYear()} Mahatma Gandhi Degree & Junior College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
