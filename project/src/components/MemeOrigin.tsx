export function MemeOrigin() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">The Original Meme</h2>
            <p className="text-lg text-gray-700 mb-4">
              Meet Pablo, the legendary capybara who took the internet by storm with his iconic 
              "helow, my namee is pablo" introduction. This simple yet charming meme captured hearts 
              worldwide with its innocent charm and adorable misspellings.
            </p>
            <p className="text-lg text-gray-700">
              We turned this wholesome meme into a token because Pablo represents everything we believe in: 
              friendliness, authenticity, and bringing smiles to people's faces! 🌿✨
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://i.ibb.co/6009kqD/pablo-meme.jpg"
              alt="Pablo Meme"
              className="w-1/2 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
