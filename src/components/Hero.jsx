function Hero() {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1631346543932-ce110c10dbec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJlYXV0aWZ1bCUyMGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:ml-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Reveal Your Natural Radiance</h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-xl">
          Discover the power of nature with our premium skincare and haircare products
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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

