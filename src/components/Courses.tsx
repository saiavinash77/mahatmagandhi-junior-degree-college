
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const intermediateCourses = [
    { id: 1, name: 'MPC', description: 'Mathematics, Physics, Chemistry', details: 'Foundation for engineering and technical fields', color: 'from-blue-400 to-purple-500' },
    { id: 2, name: 'BiPC', description: 'Biology, Physics, Chemistry', details: 'Preparation for medical and biological sciences', color: 'from-green-400 to-blue-500' },
    { id: 3, name: 'CEC', description: 'Commerce, Economics, Civics', details: 'Pathway to business and economics careers', color: 'from-yellow-400 to-orange-500' },
    { id: 4, name: 'HEC', description: 'History, Economics, Civics', details: 'Foundation for humanities and social sciences', color: 'from-pink-400 to-red-500' },
  ];
  
  const degreeCourses = [
    { id: 1, name: 'B.Sc', description: 'Bachelor of Science', details: 'Various specializations including Mathematics, Physics, Chemistry, and Biology', color: 'from-indigo-400 to-purple-600' },
    { id: 2, name: 'B.Sc BZC', description: 'Botany, Zoology, Chemistry', details: 'Specialization in biological sciences and chemistry', color: 'from-emerald-400 to-teal-600' },
    { id: 3, name: 'B.Com', description: 'Bachelor of Commerce', details: 'Comprehensive education in commerce, accounting, and business studies', color: 'from-amber-400 to-orange-600' },
    { id: 4, name: 'BCA', description: 'Bachelor of Computer Applications', details: 'Technical education focusing on computer applications and programming', color: 'from-cyan-400 to-blue-600' },
    { id: 5, name: 'BA', description: 'Bachelor of Arts', details: 'Diverse curriculum in humanities, social sciences, and liberal arts', color: 'from-rose-400 to-pink-600' },
  ];

  return (
    <section id="courses" className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold tracking-wide uppercase">Academic Programs</h2>
            <GraduationCap className="h-6 w-6 text-indigo-500 ml-2" />
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
            Our Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We offer a variety of programs catering to diverse academic interests and career aspirations.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Intermediate Courses</h3>
            <Sparkles className="h-5 w-5 text-purple-500 ml-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {intermediateCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader className={`bg-gradient-to-r ${course.color} text-white`}>
                  <CardTitle className="text-white text-xl">{course.name}</CardTitle>
                  <CardDescription className="text-white/90">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700">{course.details}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>2 Year Program</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-5 w-5 text-indigo-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Degree Courses</h3>
            <Sparkles className="h-5 w-5 text-indigo-500 ml-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {degreeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader className={`bg-gradient-to-r ${course.color} text-white`}>
                  <CardTitle className="text-white text-xl">{course.name}</CardTitle>
                  <CardDescription className="text-white/90">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700">{course.details}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>3 Year Program</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
