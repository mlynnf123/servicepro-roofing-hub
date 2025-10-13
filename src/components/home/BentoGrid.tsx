
import { FileText, Users, Calendar, PieChart, Send, BarChart, Phone, Clock, DollarSign } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-servicepro-navy mb-6 leading-tight">
            Everything You Need to Scale Your Roofing Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built specifically for roofing contractors, our platform combines powerful CRM features with industry-specific tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large feature card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-servicepro-navy to-servicepro-navy/90 p-8 rounded-3xl text-white shadow-2xl border border-servicepro-navy/20 hover:shadow-[0_25px_60px_-12px_rgba(10,35,66,0.4)] hover:-translate-y-3 transition-all duration-700 ease-out">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="bg-servicepro-orange/20 p-3 rounded-2xl w-fit mb-6 shadow-lg border border-servicepro-orange/30">
                  <Users className="h-8 w-8 text-servicepro-orange" />
                </div>
                <h3 className="text-3xl font-light mb-4 leading-tight">Complete Lead Management</h3>
                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                  Track leads from first contact to project completion. Automated follow-ups, lead scoring, and conversion tracking help you close more deals.
                </p>
              </div>
            </div>
          </div>

          {/* Document management */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <FileText className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Smart Documents</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate estimates, contracts, and invoices with just a few clicks.
            </p>
          </div>

          {/* Scheduling */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <Calendar className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Smart Scheduling</h3>
            <p className="text-gray-600 leading-relaxed">
              Optimize routes and manage your team's schedule efficiently.
            </p>
          </div>

          {/* Communication hub */}
          <div className="lg:col-span-2 bg-gradient-to-r from-servicepro-orange to-servicepro-orange/90 p-8 rounded-3xl text-white shadow-2xl border border-servicepro-orange/20 hover:shadow-[0_25px_60px_-12px_rgba(242,100,25,0.4)] hover:-translate-y-3 transition-all duration-700 ease-out">
            <div className="bg-white/20 p-3 rounded-2xl w-fit mb-6 shadow-lg border border-white/30">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-light mb-4">Automated Communication</h3>
            <p className="text-orange-100 text-lg leading-relaxed">
              Send personalized follow-ups, appointment reminders, and project updates automatically.
            </p>
          </div>

          {/* Phone integration */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <Phone className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Call Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Record and analyze all customer calls with automatic logging.
            </p>
          </div>

          {/* Time tracking */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <Clock className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Time Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track job progress and labor costs in real-time.
            </p>
          </div>

          {/* Analytics dashboard */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-servicepro-orange/10 p-3 rounded-2xl shadow-md border border-servicepro-orange/20">
                <PieChart className="h-6 w-6 text-servicepro-orange" />
              </div>
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Performance Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your business metrics with detailed reports and insights.
            </p>
          </div>

          {/* Revenue tracking */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <DollarSign className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Revenue Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor payments, invoices, and cash flow in real-time.
            </p>
          </div>

          {/* Pipeline management */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:border-servicepro-orange/30">
            <div className="bg-servicepro-orange/10 p-3 rounded-2xl w-fit mb-6 shadow-md border border-servicepro-orange/20">
              <BarChart className="h-6 w-6 text-servicepro-orange" />
            </div>
            <h3 className="text-xl font-light mb-3 text-servicepro-navy">Sales Pipeline</h3>
            <p className="text-gray-600 leading-relaxed">
              Visualize and manage your sales process from lead to close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
