import React from 'react';
function Hero() {
  return (
    <section className=" h-screen flex items-center">
      <img
        src="https://images.unsplash.com/photo-1588080270689-73eead74fa18?q=80&w=2070&auto=format&fit=crop"
        alt="Beautiful woman with glowing skin"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:ml-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Reveal Your Natural Radiance
        </h1>
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

