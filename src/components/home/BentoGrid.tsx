
import { FileText, Users, Calendar, PieChart, Send, BarChart, Phone, Clock, DollarSign } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Everything You Need to Scale Your Roofing Business</h2>
          <p className="text-xl text-servicepro-gray max-w-3xl mx-auto">
            Built specifically for roofing contractors, our platform combines powerful CRM features with industry-specific tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large feature card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-servicepro-navy to-servicepro-navy/80 p-8 rounded-2xl text-white card-hover">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Users className="h-12 w-12 mb-6 text-servicepro-orange" />
                <h3 className="text-2xl font-bold mb-4">Complete Lead Management</h3>
                <p className="text-gray-200 mb-6">
                  Track leads from first contact to project completion. Automated follow-ups, lead scoring, and conversion tracking help you close more deals.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-2">This Month</div>
                <div className="text-3xl font-bold">247 leads</div>
                <div className="text-sm text-green-400">+23% from last month</div>
              </div>
            </div>
          </div>

          {/* Document management */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <FileText className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Smart Documents</h3>
            <p className="text-gray-600 text-sm">
              Generate estimates, contracts, and invoices with just a few clicks.
            </p>
          </div>

          {/* Scheduling */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <Calendar className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Smart Scheduling</h3>
            <p className="text-gray-600 text-sm">
              Optimize routes and manage your team's schedule efficiently.
            </p>
          </div>

          {/* Communication hub */}
          <div className="lg:col-span-2 bg-gradient-to-r from-servicepro-orange to-servicepro-orange/80 p-6 rounded-2xl text-white card-hover">
            <Send className="h-10 w-10 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Automated Communication</h3>
            <p className="text-orange-100 mb-4">
              Send personalized follow-ups, appointment reminders, and project updates automatically.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Email campaigns
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                SMS notifications
              </div>
            </div>
          </div>

          {/* Phone integration */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <Phone className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Call Tracking</h3>
            <p className="text-gray-600 text-sm">
              Record and analyze all customer calls with automatic logging.
            </p>
          </div>

          {/* Time tracking */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <Clock className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Time Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track job progress and labor costs in real-time.
            </p>
          </div>

          {/* Analytics dashboard */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <div className="flex items-center justify-between mb-4">
              <PieChart className="h-8 w-8 text-servicepro-orange" />
              <div className="text-right">
                <div className="text-2xl font-bold text-servicepro-navy">$127k</div>
                <div className="text-sm text-gray-500">Revenue this quarter</div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Performance Analytics</h3>
            <p className="text-gray-600 text-sm mb-4">
              Track your business metrics with detailed reports and insights.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-lg font-bold text-servicepro-navy">94%</div>
                <div className="text-gray-500">Lead response rate</div>
              </div>
              <div>
                <div className="text-lg font-bold text-servicepro-navy">67%</div>
                <div className="text-gray-500">Conversion rate</div>
              </div>
              <div>
                <div className="text-lg font-bold text-servicepro-navy">4.8★</div>
                <div className="text-gray-500">Customer rating</div>
              </div>
            </div>
          </div>

          {/* Revenue tracking */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <DollarSign className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Revenue Tracking</h3>
            <p className="text-gray-600 text-sm">
              Monitor payments, invoices, and cash flow in real-time.
            </p>
          </div>

          {/* Pipeline management */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 card-hover">
            <BarChart className="h-8 w-8 text-servicepro-orange mb-4" />
            <h3 className="text-lg font-bold mb-2">Sales Pipeline</h3>
            <p className="text-gray-600 text-sm">
              Visualize and manage your sales process from lead to close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
