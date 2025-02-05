function Newsletter() {
    return (
      <section className="py-16 bg-rose-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-white mb-8">Stay up to date with our latest products, offers, and skincare tips.</p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-rose-600 px-6 py-2 rounded-md font-semibold hover:bg-rose-100 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  
  