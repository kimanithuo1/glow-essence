const faqs = [
    {
      question: "Are your products suitable for sensitive skin?",
      answer:
        "Yes, our products are formulated to be gentle and suitable for all skin types, including sensitive skin. However, we always recommend patch testing new products.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer samples?",
      answer:
        "Yes, we offer sample sizes of most of our products. You can add them to your cart when making a purchase or request them separately.",
    },
    {
      question: "Are your products vegan?",
      answer: "Most of our products are vegan. Each product page clearly states whether the product is vegan or not.",
    },
  ]
  
  function FAQ() {
    return (
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FAQ
  
  