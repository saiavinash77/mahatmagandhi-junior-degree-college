
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 font-semibold tracking-wide uppercase">Our Pride</h2>
            <Trophy className="h-6 w-6 text-yellow-500 ml-2" />
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent sm:text-4xl">
            Academic Excellence & Recognition
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our students consistently achieve outstanding results and bring pride to our institution.
          </p>
        </div>

        {/* Recognition Section */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500">
              <CardTitle className="text-center text-2xl text-white flex items-center justify-center">
                <Award className="h-8 w-8 mr-3 text-white drop-shadow-lg" />
                Government Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-orange-500/20"></div>
                    <img 
                      src="/lovable-uploads/dbfaf652-cbe8-42d2-807c-386c77a61e32.png"
                      alt="Recognition by MLA Bandaru Satyanandam Garu"
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                    Honored by MLA Bandaru Satyanandam Garu
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our college has been recognized and honored by MLA Bandaru Satyanandam Garu for our outstanding contribution to education and excellent academic results. Our students received awards for their exceptional performance in academics.
                  </p>
                  <div className="flex items-center text-orange-600">
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
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Academic Toppers 2025</h3>
            <Sparkles className="h-5 w-5 text-yellow-500 ml-2" />
          </div>
          
          {/* State Rank Achievers */}
          <Card className="mb-8 overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              <CardTitle className="text-center text-xl text-white flex items-center justify-center">
                <Star className="h-6 w-6 mr-2 text-white drop-shadow-lg" />
                State Level Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative overflow-hidden rounded-xl shadow-xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-orange-500/20"></div>
                <img 
                  src="/lovable-uploads/baa69a12-70bb-4bd6-999e-eabce7855dee.png"
                  alt="State 5th and 6th Rank Achievers"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">State Level Toppers</h4>
                <p className="text-gray-700">
                  Our students achieved remarkable State 5th and 6th ranks, bringing immense pride to our institution and demonstrating the quality of education we provide.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* College Toppers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-400 to-purple-500">
                <CardTitle className="text-center text-white">Intermediate Toppers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                  <img 
                    src="/lovable-uploads/2c75568f-2850-4e87-9893-d4763155c38e.png"
                    alt="Intermediate Course Toppers"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-400 to-emerald-500">
                <CardTitle className="text-center text-white">Course Toppers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20"></div>
                  <img 
                    src="/lovable-uploads/4492021c-c704-4f11-9b04-cc019fae99da.png"
                    alt="Course Toppers"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold">National Recognition</h3>
              <p className="text-3xl font-bold">✓</p>
              <p className="text-sm text-white/90">Achieved National Level Recognition</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-orange-400 to-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold">State Rankings</h3>
              <p className="text-3xl font-bold">5th & 6th</p>
              <p className="text-sm text-white/90">State Level Positions</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="pt-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg font-bold">Success Rate</h3>
              <p className="text-3xl font-bold">98%+</p>
              <p className="text-sm text-white/90">Excellent Results</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
