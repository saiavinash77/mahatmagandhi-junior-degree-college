
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-600 via-blue-700 to-indigo-800 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.4),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-8 w-8 text-blue-300 animate-pulse mr-2" />
                <span className="text-blue-200 font-semibold">Excellence Since 1983</span>
                <Sparkles className="h-8 w-8 text-blue-300 animate-pulse ml-2" />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                <span className="block animate-fade-in">Mahatma Gandhi</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 animate-fade-in">
                  Degree & Junior College
                </span>
              </h1>
              <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 drop-shadow-md">
                Established in 1983, nurturing young minds for a brighter future through quality education and values inspired by Mahatma Gandhi's principles.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
                  Explore Courses 
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-700/20"></div>
          <img
            className="h-full w-full object-cover rounded-l-3xl shadow-2xl"
            src="/lovable-uploads/688d0d39-973d-44b2-95da-ed63a789eb4b.png"
            alt="Mahatma Gandhi College Campus"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
