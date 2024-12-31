import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-12 text-center">
      <div className="container mx-auto px-4">
        <img 
          src="https://images.unsplash.com/photo-1622566359362-539a328180c3?auto=format&fit=crop&w=800&q=80" 
          alt="Cute Capybara" 
          className="w-64 h-64 mx-auto rounded-full border-8 border-primary mb-8 object-cover hero-image"
        />
        <h1 className="text-6xl font-bold text-primary mb-4">PabloPesos</h1>
        <p className="text-2xl text-gray-700 mb-8">The Chillest Memecoin in the Crypto Space! 🌿</p>
        <a 
          href="https://t.me/pablopesos" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-highlight text-white text-xl px-8 py-4 rounded-full hover:scale-110 transition-all duration-300"
        >
          <Rocket className="w-6 h-6" />
          Join the Capybara Club!
        </a>
      </div>
    </div>
  );
}
