
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Cloud, Database, Users, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "SAP Implementation",
    description: "Complete end-to-end SAP implementation services tailored to your business needs and industry requirements.",
  },
  {
    icon: Cloud,
    title: "SAP S/4HANA Migration",
    description: "Seamless migration to SAP S/4HANA with minimal disruption to your business operations.",
  },
  {
    icon: Database,
    title: "SAP Integration",
    description: "Expert integration services to connect SAP with your existing systems and third-party applications.",
  },
  {
    icon: Users,
    title: "SAP Training & Support",
    description: "Comprehensive training programs and 24/7 support to ensure your team maximizes SAP potential.",
  },
  {
    icon: BarChart3,
    title: "SAP Analytics",
    description: "Advanced analytics and reporting solutions to transform your data into actionable business insights.",
  },
  {
    icon: Shield,
    title: "SAP Security",
    description: "Robust security implementations and compliance management to protect your critical business data.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our SAP Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive SAP services designed to optimize your business processes 
            and drive digital transformation across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
