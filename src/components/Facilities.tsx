
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Flask, Users, Library, Monitor, Trophy } from 'lucide-react';

const Facilities = () => {
  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-college-orange font-semibold tracking-wide uppercase">Campus Infrastructure</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Facilities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide modern amenities to enhance the learning experience of our students.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/121a3913-ed93-4a63-a6fc-c89707368631.png" 
                alt="Science Laboratory" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-college-orange text-white">
                    <Flask className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Well-Equipped Laboratories</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our college features modern laboratories for Physics, Chemistry, Biology, and Computer Science, providing hands-on learning opportunities for students.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-college-orange text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Spacious Classrooms</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Bright, airy classrooms equipped with modern teaching aids create an optimal learning environment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-college-orange text-white">
                    <Library className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Library</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our extensive library houses thousands of books, journals, and reference materials across various disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-college-blue" />
                Computer Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                State-of-the-art computer laboratory with high-speed internet and the latest software for computer applications training.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-college-blue" />
                Seminar Hall
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Dedicated seminar hall for academic presentations, guest lectures, and student activities.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-college-blue" />
                Sports Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Sports grounds and equipment for various indoor and outdoor games to promote physical fitness and team spirit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
