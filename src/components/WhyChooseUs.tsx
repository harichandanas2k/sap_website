
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster Implementation",
    description: "Our proven methodologies reduce implementation time by up to 40%, getting you operational faster.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Optimized solutions that reduce total cost of ownership while maximizing ROI on your SAP investment.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users2,
    title: "Expert Team",
    description: "Certified consultants with deep industry knowledge and extensive SAP implementation experience.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Solutions designed to scale with your business and support long-term growth objectives.",
    color: "from-orange-500 to-red-500"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our SAP Services?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We deliver exceptional value through our commitment to excellence, 
            innovation, and client success in every SAP project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-3 bg-gradient-to-r ${benefit.color} rounded-full w-16 h-16 flex items-center justify-center`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
