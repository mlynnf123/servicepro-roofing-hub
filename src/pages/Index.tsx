
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BentoGrid />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
