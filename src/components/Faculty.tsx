
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-college-orange font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Leadership & Faculty
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our college is guided by experienced educators committed to academic excellence.
          </p>
        </div>

        <div className="mt-12">
          <Card className="mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 bg-gray-100 flex items-center justify-center p-6">
                <div className="h-32 w-32 rounded-full bg-college-orange/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-college-orange">BVR</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-college-maroon">Bezawada Venkateshwarrao Garu</h3>
                <p className="text-lg text-college-blue">M.Sc, B.Sc, B.Ed</p>
                <p className="text-sm text-gray-500 mb-4">Principal</p>
                <p className="text-gray-700">
                  With decades of experience in education, Bezawada Venkateshwarrao Garu founded Mahatma Gandhi College with a vision to provide quality education to the youth of Atreyapuram. His dedication to educational excellence and commitment to Gandhian values forms the cornerstone of our institution.
                </p>
              </CardContent>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 bg-gray-100 flex items-center justify-center p-6">
                <div className="h-32 w-32 rounded-full bg-college-blue/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-college-blue">PS</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-college-maroon">P.S RAJU Garu</h3>
                <p className="text-lg text-college-blue">MA., MA., MA., MEd., MPhil.</p>
                <p className="text-sm text-gray-500 mb-4">Secretary & Correspondent</p>
                <p className="text-gray-700">
                  As the Secretary & Correspondent, P.S RAJU Garu brings valuable leadership to our institution. With a focus on academic rigor and student development, he ensures that our college maintains high standards while nurturing an environment conducive to holistic growth.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center text-college-maroon mb-8">Faculty Expertise</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader className="bg-college-orange/10 pb-2">
                <h4 className="font-bold text-college-maroon">Science Department</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700">
                  Our Science faculty comprises experienced educators with advanced degrees in Physics, Chemistry, Mathematics, and Biology. They bring practical knowledge and research experience to the classroom.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="bg-college-orange/10 pb-2">
                <h4 className="font-bold text-college-maroon">Commerce Department</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700">
                  The Commerce department features industry professionals and academics who provide students with both theoretical knowledge and practical business insights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="bg-college-orange/10 pb-2">
                <h4 className="font-bold text-college-maroon">Humanities Department</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700">
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
