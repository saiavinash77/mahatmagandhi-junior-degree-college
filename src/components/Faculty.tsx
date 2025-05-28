
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Sparkles } from 'lucide-react';

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-emerald-500 mr-2" />
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <Users className="h-6 w-6 text-emerald-500 ml-2" />
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Leadership & Faculty
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our college is guided by experienced educators committed to academic excellence.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:shrink-0 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center p-8">
                <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white drop-shadow-lg">BVR</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Bezawada Venkateshwarrao Garu</h3>
                <p className="text-lg text-blue-600 font-semibold">M.Sc, B.Sc, B.Ed</p>
                <p className="text-sm text-gray-500 mb-4 font-medium">Principal</p>
                <p className="text-gray-700 leading-relaxed">
                  With decades of experience in education, Bezawada Venkateshwarrao Garu founded Mahatma Gandhi College with a vision to provide quality education to the youth of Atreyapuram. His dedication to educational excellence and commitment to Gandhian values forms the cornerstone of our institution.
                </p>
              </CardContent>
            </div>
          </Card>
          
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:shrink-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-8">
                <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white drop-shadow-lg">PSR</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">P.S RAJU Garu</h3>
                <p className="text-lg text-blue-600 font-semibold">MA., MA., MA., MEd., MPhil.</p>
                <p className="text-sm text-gray-500 mb-4 font-medium">Secretary & Correspondent</p>
                <p className="text-gray-700 leading-relaxed">
                  As the Secretary & Correspondent, P.S RAJU Garu brings valuable leadership to our institution. With a focus on academic rigor and student development, he ensures that our college maintains high standards while nurturing an environment conducive to holistic growth.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-5 w-5 text-emerald-500 mr-2" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Faculty Expertise</h3>
            <Sparkles className="h-5 w-5 text-emerald-500 ml-2" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-orange-400 to-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-2">
                <CardTitle className="font-bold text-white">Science Department</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-white">
                <p className="text-white/90 leading-relaxed">
                  Our Science faculty comprises experienced educators with advanced degrees in Physics, Chemistry, Mathematics, and Biology. They bring practical knowledge and research experience to the classroom.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-2">
                <CardTitle className="font-bold text-white">Commerce Department</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-white">
                <p className="text-white/90 leading-relaxed">
                  The Commerce department features industry professionals and academics who provide students with both theoretical knowledge and practical business insights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-2">
                <CardTitle className="font-bold text-white">Humanities Department</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-white">
                <p className="text-white/90 leading-relaxed">
                  Our Humanities faculty includes scholars of History, Economics, Political Science, and Languages who inspire critical thinking and cultural appreciation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
