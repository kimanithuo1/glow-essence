const products = [
  {
    name: "Radiance Serum",
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg",
    price: "$49.99",
    description: "Boost your skin's natural glow with our powerful Radiance Serum.",
  },
  {
    name: "Hydrating Moisturizer",
    image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg",
    price: "$39.99",
    description: "Keep your skin hydrated all day long with our nourishing moisturizer.",
  },
  {
    name: "Nourishing Hair Mask",
    image: "https://images.unsplash.com/photo-1588080270689-73eead74fa18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$29.99",
    description: "Revitalize your hair with our deep-conditioning hair mask.",
  },
  {
    name: "Gentle Cleansing Foam",
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg",
    price: "$24.99",
    description: "Cleanse your skin without stripping its natural oils.",
  },
]

function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600 font-bold">{product.price}</span>
                  <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

