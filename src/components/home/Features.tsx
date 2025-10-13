
import { FileText, Users, Calendar, PieChart, Send, BarChart, Workflow, Package, MessageSquare, Settings, Star, DollarSign } from "lucide-react";

const features = [
  {
    title: "Dashboard & Analytics",
    description: "Real-time business intelligence with key metrics including revenue, leads, conversion rates, and project performance. Make data-driven decisions with visual charts and actionable insights.",
    icon: BarChart,
  },
  {
    title: "Lead Management",
    description: "Capture, track, and convert leads with a visual pipeline board. Monitor lead sources, manage follow-ups, and never miss an opportunity.",
    icon: Users,
  },
  {
    title: "Project Management",
    description: "Manage roofing projects from start to finish. Track active jobs, access completed project history, and use templates to standardize workflows.",
    icon: Calendar,
  },
  {
    title: "Job Costing & Profitability",
    description: "Track labor, materials, and expenses in real-time. Monitor budgets, analyze profit margins, and understand the true cost of every job.",
    icon: DollarSign,
  },
  {
    title: "Scheduling & Calendar",
    description: "Coordinate your team with visual scheduling. Manage appointments, track crew availability, and keep everyone on the same page.",
    icon: Calendar,
  },
  {
    title: "Documents & Paperwork",
    description: "Create professional estimates, invoices, contracts, and proposals—all in one place. Generate, send, and track all your business documents.",
    icon: FileText,
  },
  {
    title: "Reviews & Reputation Management",
    description: "Automate review requests, monitor customer feedback, and respond with templates. Build your online reputation automatically.",
    icon: Star,
  },
  {
    title: "Workflow Automation",
    description: "Build custom workflows with a visual drag-and-drop builder. Automate repetitive tasks like follow-ups, notifications, and status updates.",
    icon: Workflow,
  },
  {
    title: "Product & Service Catalog",
    description: "Maintain a central catalog of your products, services, and pricing. Use it across estimates, invoices, and proposals for consistency.",
    icon: Package,
  },
  {
    title: "Messaging Hub",
    description: "Unified inbox for email and SMS. Send messages, create templates, run campaigns, and keep all customer communications in one place.",
    icon: MessageSquare,
  },
  {
    title: "Team & Settings",
    description: "Manage team members, set permissions, configure integrations, handle billing, and customize your company branding—all from one dashboard.",
    icon: Settings,
  },
  {
    title: "Marketing Campaign Builder",
    description: "Send personalized emails and follow-ups automatically. Create targeted campaigns to nurture leads and maintain relationships with past customers.",
    icon: Send,
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
