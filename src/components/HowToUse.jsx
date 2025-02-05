const steps = [
    { title: "Cleanse", description: "Start with our Gentle Cleansing Foam to remove impurities." },
    { title: "Tone", description: "Apply our Balancing Toner to prep your skin." },
    { title: "Treat", description: "Use our Radiance Serum to target specific skin concerns." },
    { title: "Moisturize", description: "Finish with our Hydrating Moisturizer to lock in hydration." },
  ]
  
  function HowToUse() {
    return (
      <section id="how-to-use" className="py-16 bg-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Use Our Products</h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-rose-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default HowToUse
  
  