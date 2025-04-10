
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const intermediateCourses = [
    { id: 1, name: 'MPC', description: 'Mathematics, Physics, Chemistry', details: 'Foundation for engineering and technical fields' },
    { id: 2, name: 'BiPC', description: 'Biology, Physics, Chemistry', details: 'Preparation for medical and biological sciences' },
    { id: 3, name: 'CEC', description: 'Commerce, Economics, Civics', details: 'Pathway to business and economics careers' },
    { id: 4, name: 'HEC', description: 'History, Economics, Civics', details: 'Foundation for humanities and social sciences' },
  ];
  
  const degreeCourses = [
    { id: 1, name: 'B.Sc', description: 'Bachelor of Science', details: 'Various specializations including Mathematics, Physics, Chemistry, and Biology' },
    { id: 2, name: 'B.Sc BZC', description: 'Botany, Zoology, Chemistry', details: 'Specialization in biological sciences and chemistry' },
    { id: 3, name: 'B.Com', description: 'Bachelor of Commerce', details: 'Comprehensive education in commerce, accounting, and business studies' },
    { id: 4, name: 'BCA', description: 'Bachelor of Computer Applications', details: 'Technical education focusing on computer applications and programming' },
    { id: 5, name: 'BA', description: 'Bachelor of Arts', details: 'Diverse curriculum in humanities, social sciences, and liberal arts' },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-college-orange font-semibold tracking-wide uppercase">Academic Programs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a variety of programs catering to diverse academic interests and career aspirations.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-college-maroon mb-6">Intermediate Courses</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {intermediateCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-college-orange/10 rounded-t-lg">
                  <CardTitle className="text-college-maroon">{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{course.details}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-college-green mr-1" />
                    <span>2 Year Program</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-college-maroon mb-6">Degree Courses</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {degreeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-college-blue/10 rounded-t-lg">
                  <CardTitle className="text-college-blue">{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{course.details}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-college-green mr-1" />
                    <span>3 Year Program</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-college-orange hover:bg-college-darkorange">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
