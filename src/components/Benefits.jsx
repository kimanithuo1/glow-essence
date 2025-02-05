const benefits = [
    { title: "Natural Ingredients", description: "Our products are made with carefully selected natural ingredients." },
    { title: "Cruelty-Free", description: "We never test on animals and support ethical beauty practices." },
    { title: "Eco-Friendly Packaging", description: "Our packaging is recyclable and made from sustainable materials." },
    { title: "Suitable for All Skin Types", description: "Our formulas are gentle and effective for all skin types." },
  ]
  
  function Benefits() {
    return (
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Glow Essence?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-100 rounded-full p-4 inline-block mb-4">
                  <svg
                    className="w-8 h-8 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Benefits
  
  