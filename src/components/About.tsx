
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Calendar, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold tracking-wide uppercase">About Us</h2>
            <Sparkles className="h-6 w-6 text-purple-500 ml-2" />
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
            Excellence in Education Since 1983
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Mahatma Gandhi Degree & Junior College has been a beacon of quality education for over four decades.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="prose prose-lg max-w-none">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Founded in 1983, Mahatma Gandhi Degree & Junior College has established itself as a premier educational institution in Atreyapuram. Under the visionary leadership of Bezawada Venkateshwararao Garu (BVR) M.Sc, B.Sc, B.Ed, and the dedicated guidance of our principal, the college has consistently maintained high academic standards.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Our educational philosophy is rooted in the principles of Mahatma Gandhi, emphasizing not just academic excellence but also character building and social responsibility. We believe in nurturing students to become well-rounded individuals who contribute meaningfully to society.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Over the years, our alumni have excelled in various fields, bringing pride to their alma mater. The college continues to evolve and adapt to changing educational needs while maintaining its core values and traditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
                <img 
                  src="/lovable-uploads/c3cd9f3e-6fe2-495e-9b03-1a19fa59b4f9.png" 
                  alt="Students in classroom" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden bg-gradient-to-br from-orange-400 to-pink-500 border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold text-center">Established</h3>
              <p className="text-3xl font-bold text-center">1983</p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold text-center">Programs</h3>
              <p className="text-3xl font-bold text-center">7+</p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold text-center">Faculty</h3>
              <p className="text-3xl font-bold text-center">50+</p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold text-center">Success Rate</h3>
              <p className="text-3xl font-bold text-center">95%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
