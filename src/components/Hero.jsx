function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <img
        src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg"
        alt="Beautiful woman with glowing skin"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Reveal Your Natural Radiance</h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Discover the power of nature with our premium skincare and haircare products
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition">
            Shop Skincare
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-rose-600 transition">
            Shop Haircare
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

