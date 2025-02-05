const ingredients = [
  { name: "Hyaluronic Acid", description: "Hydrates and plumps the skin" },
  { name: "Vitamin C", description: "Brightens and evens skin tone" },
  { name: "Retinol", description: "Reduces fine lines and wrinkles" },
  { name: "Niacinamide", description: "Minimizes pores and improves skin texture" },
  { name: "Aloe Vera", description: "Soothes and calms irritated skin" },
  { name: "Jojoba Oil", description: "Moisturizes without clogging pores" },
  { name: "Green Tea Extract", description: "Provides antioxidant protection" },
  { name: "Ceramides", description: "Strengthens the skin barrier" },
]

function Ingredients() {
  return (
    <section id="ingredients" className="py-16 bg-rose-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Natural Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ingredients

