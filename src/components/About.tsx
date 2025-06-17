
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Globe, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading SAP Consulting Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in SAP consulting, we've helped hundreds of 
              organizations across various industries achieve their digital transformation goals. 
              Our certified experts deliver innovative solutions that drive business growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Certified SAP Gold Partner</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">500+ Successful Implementations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Industry-Specific Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">24/7 Global Support</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
            >
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Award-winning solutions and recognized expertise</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl text-center">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global</h3>
              <p className="text-gray-600">Worldwide presence with local expertise</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology and methodologies</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl text-center">
              <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven</h3>
              <p className="text-gray-600">Track record of successful deliveries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
