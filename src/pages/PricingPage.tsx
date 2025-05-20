
import Layout from "@/components/layout/Layout";
import PricingCard from "@/components/pricing/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicFeatures = [
  { title: "Up to 3 user accounts", included: true },
  { title: "Lead management", included: true },
  { title: "Basic document storage", included: true },
  { title: "Simple calendar scheduling", included: true },
  { title: "Email notifications", included: true },
  { title: "Mobile app access", included: true },
  { title: "Sales pipeline", included: true },
  { title: "Email campaigns (50/month)", included: true },
  { title: "Basic reporting", included: true },
  { title: "Standard support", included: true },
  { title: "Custom forms", included: false },
  { title: "Advanced analytics", included: false },
  { title: "API access", included: false },
  { title: "White labeling", included: false },
];

const professionalFeatures = [
  { title: "Up to 10 user accounts", included: true },
  { title: "Lead management", included: true },
  { title: "Advanced document storage", included: true },
  { title: "Team calendar scheduling", included: true },
  { title: "Email & SMS notifications", included: true },
  { title: "Mobile app access", included: true },
  { title: "Advanced sales pipeline", included: true },
  { title: "Email campaigns (200/month)", included: true },
  { title: "Advanced reporting", included: true },
  { title: "Priority support", included: true },
  { title: "Custom forms", included: true },
  { title: "Advanced analytics", included: true },
  { title: "API access", included: false },
  { title: "White labeling", included: false },
];

const enterpriseFeatures = [
  { title: "Unlimited user accounts", included: true },
  { title: "Lead management", included: true },
  { title: "Unlimited document storage", included: true },
  { title: "Team calendar with automation", included: true },
  { title: "Email, SMS & automated notifications", included: true },
  { title: "Mobile app with offline access", included: true },
  { title: "Custom sales pipeline", included: true },
  { title: "Email campaigns (unlimited)", included: true },
  { title: "Custom reporting & dashboards", included: true },
  { title: "Dedicated account manager", included: true },
  { title: "Unlimited custom forms", included: true },
  { title: "Advanced analytics & forecasting", included: true },
  { title: "Full API access", included: true },
  { title: "White labeling options", included: true },
];

const PricingPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-servicepro-navy to-servicepro-navy/90 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Choose the plan that's right for your roofing business. All plans include a 5-day free trial.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="text-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Basic"
                  price={25}
                  description="Perfect for small contractors just getting started with CRM."
                  features={basicFeatures}
                  buttonVariant="outline"
                />
                <PricingCard
                  title="Professional"
                  price={50}
                  description="Ideal for growing roofing businesses with a small team."
                  features={professionalFeatures}
                  isPopular={true}
                  buttonVariant="secondary"
                />
                <PricingCard
                  title="Enterprise"
                  price={75}
                  description="For established businesses with multiple teams and complex needs."
                  features={enterpriseFeatures}
                />
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Basic"
                  price={20}
                  description="Perfect for small contractors just getting started with CRM."
                  features={basicFeatures}
                  buttonVariant="outline"
                />
                <PricingCard
                  title="Professional"
                  price={40}
                  description="Ideal for growing roofing businesses with a small team."
                  features={professionalFeatures}
                  isPopular={true}
                  buttonVariant="secondary"
                />
                <PricingCard
                  title="Enterprise"
                  price={60}
                  description="For established businesses with multiple teams and complex needs."
                  features={enterpriseFeatures}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Have questions about our pricing? Find answers below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-medium text-lg mb-2">How does the 5-day free trial work?</h3>
                <p className="text-gray-600">
                  You get full access to all features for 5 days. No credit card required, and you can cancel anytime during the trial period.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, including Visa, Mastercard, and American Express. We also support ACH transfers for annual plans.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No, there are no setup fees or hidden costs. The price you see is what you pay.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">What kind of support is included?</h3>
                <p className="text-gray-600">
                  All plans include email support. Professional plans receive priority response times, while Enterprise plans get a dedicated account manager.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Can I get a custom plan for my business?</h3>
                <p className="text-gray-600">
                  Yes, for larger businesses with unique needs, we offer custom plans. Contact our sales team to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
