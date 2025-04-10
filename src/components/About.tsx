
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-college-orange font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Education Since 1983
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Mahatma Gandhi Degree & Junior College has been a beacon of quality education for over four decades.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 1983, Mahatma Gandhi Degree & Junior College has established itself as a premier educational institution in Atreyapuram. Under the visionary leadership of Bezawada Venkateshwararao (BVR) M.Sc, B.Sc, B.Ed, and the dedicated guidance of our principal, the college has consistently maintained high academic standards.
                </p>
                <p className="mt-4">
                  Our educational philosophy is rooted in the principles of Mahatma Gandhi, emphasizing not just academic excellence but also character building and social responsibility. We believe in nurturing students to become well-rounded individuals who contribute meaningfully to society.
                </p>
                <p className="mt-4">
                  Over the years, our alumni have excelled in various fields, bringing pride to their alma mater. The college continues to evolve and adapt to changing educational needs while maintaining its core values and traditions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/c3cd9f3e-6fe2-495e-9b03-1a19fa59b4f9.png" 
                alt="Students in classroom" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-t-4 border-t-college-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-10 w-10 text-college-orange" />
              </div>
              <h3 className="text-lg font-medium text-center">Established</h3>
              <p className="text-2xl font-bold text-center text-college-maroon">1983</p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-college-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-10 w-10 text-college-orange" />
              </div>
              <h3 className="text-lg font-medium text-center">Programs</h3>
              <p className="text-2xl font-bold text-center text-college-maroon">7+</p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-college-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-college-orange" />
              </div>
              <h3 className="text-lg font-medium text-center">Faculty</h3>
              <p className="text-2xl font-bold text-center text-college-maroon">50+</p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-college-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-college-orange" />
              </div>
              <h3 className="text-lg font-medium text-center">Success Rate</h3>
              <p className="text-2xl font-bold text-center text-college-maroon">95%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
