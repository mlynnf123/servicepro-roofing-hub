
import { FileText, Users, Calendar, PieChart, Send, BarChart } from "lucide-react";

const features = [
  {
    title: "Lead Management",
    description: "Organize and track potential clients from first contact to close",
    icon: Users,
  },
  {
    title: "Document Management",
    description: "Store and access estimates, contracts and inspection forms",
    icon: FileText,
  },
  {
    title: "Job Scheduling",
    description: "Easily schedule and manage appointments and project timelines",
    icon: Calendar,
  },
  {
    title: "Sales Pipeline",
    description: "Track deals through your sales process with visual pipeline",
    icon: BarChart,
  },
  {
    title: "Client Communication",
    description: "Send personalized emails and follow-ups automatically",
    icon: Send,
  },
  {
    title: "Performance Reports",
    description: "Track business metrics and team performance with custom reports",
    icon: PieChart,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Designed for Roofing Contractors</h2>
          <p className="text-xl text-servicepro-gray max-w-3xl mx-auto">
            Our specialized features help you manage every aspect of your roofing business, from lead generation to project completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100"
            >
              <div className="rounded-full bg-servicepro-navy/10 p-3 inline-block mb-4">
                <feature.icon className="h-6 w-6 text-servicepro-navy" />
              </div>
              <h3 className="text-xl font-light mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
