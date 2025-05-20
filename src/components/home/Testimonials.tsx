
const testimonials = [
  {
    quote: "ServicePro has transformed how we handle customer data. Our team can now access customer information from anywhere, which has been a game-changer for our business.",
    author: "Michael Johnson",
    position: "Owner, Johnson Roofing",
    company: "Johnson Roofing",
  },
  {
    quote: "The email campaign feature has helped us stay connected with our customers. We've seen a 40% increase in repeat business since using ServicePro.",
    author: "Sarah Williams",
    position: "Operations Manager",
    company: "Summit Roofing Solutions",
  },
  {
    quote: "Being able to track our sales pipeline has given us much more clarity on our business. We've improved our close rate by 25% in just three months.",
    author: "David Rodriguez",
    position: "Sales Director",
    company: "Elite Roofing Services",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-servicepro-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted by Roofing Professionals</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our customers have to say about how ServicePro has helped them grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <div className="mb-4 text-servicepro-orange">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
