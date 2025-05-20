
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Users, Calendar, PieChart, Send, BarChart, MessageSquare, Settings, FileCheck, CloudUpload, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Lead Management",
    description: "Capture, organize, and nurture leads throughout their journey. Track all interactions and never miss a follow-up opportunity.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Document Management",
    description: "Store, organize, and quickly access estimates, contracts, inspection forms, and other critical documents in one central location.",
    icon: FileText,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Job Scheduling",
    description: "Efficiently manage your team's calendar with drag-and-drop scheduling. Send automatic reminders to reduce no-shows.",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Sales Pipeline",
    description: "Visualize your entire sales process with customizable pipeline stages. Identify bottlenecks and optimize your sales strategy.",
    icon: BarChart,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Email Campaigns",
    description: "Create and send targeted email campaigns to nurture leads and maintain relationships with past customers.",
    icon: Send,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Performance Analytics",
    description: "Generate detailed reports on sales, team performance, and business growth metrics to make data-driven decisions.",
    icon: PieChart,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Client Communication",
    description: "Keep all client conversations in one place with integrated messaging. Maintain a complete history of all communications.",
    icon: MessageSquare,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Custom Forms",
    description: "Create custom digital forms for estimates, inspections, and contracts that your team can fill out on any device.",
    icon: FileCheck,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Cloud Storage",
    description: "Securely store all your project photos, documents, and files in the cloud, accessible from anywhere.",
    icon: CloudUpload,
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    title: "User Permissions",
    description: "Control access to sensitive information with customizable user roles and detailed permission settings.",
    icon: Shield,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Business Analytics",
    description: "Track your most profitable services, customer acquisition costs, and other key performance indicators.",
    icon: BarChart3,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Integration Capabilities",
    description: "Connect with your favorite tools for accounting, marketing, and project management for seamless workflow.",
    icon: Settings,
    color: "bg-neutral-100 text-neutral-600",
  },
];

const FeaturesPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-servicepro-navy to-servicepro-navy/90 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features Designed for Roofing Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Our comprehensive suite of tools helps you manage every aspect of your roofing business, from lead capture to project completion and beyond.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className={`rounded-full ${feature.color} p-3 inline-flex items-center justify-center w-12 h-12 mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your roofing business?</h2>
            <Button 
              size="lg" 
              className="bg-servicepro-orange hover:bg-servicepro-orange/90 text-lg"
              asChild
            >
              <Link to="/signup">Start Your 5-Day Free Trial</Link>
            </Button>
            <p className="mt-4 text-sm text-gray-500">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;
