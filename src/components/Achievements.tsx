
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-college-orange font-semibold tracking-wide uppercase">Our Pride</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Academic Excellence & Recognition
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our students consistently achieve outstanding results and bring pride to our institution.
          </p>
        </div>

        {/* Recognition Section */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-college-orange/10">
              <CardTitle className="text-center text-2xl text-college-maroon flex items-center justify-center">
                <Award className="h-8 w-8 mr-3 text-college-orange" />
                Government Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <img 
                    src="/lovable-uploads/dbfaf652-cbe8-42d2-807c-386c77a61e32.png"
                    alt="Recognition by MLA Bandaru Satyanandam Garu"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-college-maroon mb-4">
                    Honored by MLA Bandaru Satyanandam Garu
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our college has been recognized and honored by MLA Bandaru Satyanandam Garu for our outstanding contribution to education and excellent academic results. Our students received awards for their exceptional performance in academics.
                  </p>
                  <div className="flex items-center text-college-orange">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Government Recognition for Excellence</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-college-maroon mb-8">Academic Toppers 2025</h3>
          
          {/* State Rank Achievers */}
          <Card className="mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20">
              <CardTitle className="text-center text-xl text-college-maroon flex items-center justify-center">
                <Star className="h-6 w-6 mr-2 text-yellow-500" />
                State Level Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/baa69a12-70bb-4bd6-999e-eabce7855dee.png"
                alt="State 5th and 6th Rank Achievers"
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <div className="text-center">
                <h4 className="text-lg font-bold text-college-maroon mb-2">State Level Toppers</h4>
                <p className="text-gray-700">
                  Our students achieved remarkable State 5th and 6th ranks, bringing immense pride to our institution and demonstrating the quality of education we provide.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* College Toppers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-college-blue/10">
                <CardTitle className="text-center text-college-maroon">Intermediate Toppers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/2c75568f-2850-4e87-9893-d4763155c38e.png"
                  alt="Intermediate Course Toppers"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-college-green/10">
                <CardTitle className="text-center text-college-maroon">Course Toppers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/4492021c-c704-4f11-9b04-cc019fae99da.png"
                  alt="Course Toppers"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-t-4 border-t-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-10 w-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-medium">National Recognition</h3>
              <p className="text-2xl font-bold text-college-maroon">✓</p>
              <p className="text-sm text-gray-600">Achieved National Level Recognition</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-medium">State Rankings</h3>
              <p className="text-2xl font-bold text-college-maroon">5th & 6th</p>
              <p className="text-sm text-gray-600">State Level Positions</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-lg font-medium">Success Rate</h3>
              <p className="text-2xl font-bold text-college-maroon">98%+</p>
              <p className="text-sm text-gray-600">Excellent Results</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
