import { Heart, Coffee, Sun } from 'lucide-react';

export function MeetPablo() {
  const facts = [
    {
      icon: Heart,
      title: "Chillest Crypto Mascot",
      description: "Pablo spends his days relaxing in hot springs, teaching crypto traders to stay calm"
    },
    {
      icon: Coffee,
      title: "Certified Vibes Master",
      description: "Known for bringing good vibes to the crypto community since 2024"
    },
    {
      icon: Sun,
      title: "Meme Legend",
      description: "From viral sensation to crypto revolution, Pablo's journey is just beginning"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Meet Pablo 🌿</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/50 hover:scale-105 transition-all duration-300">
              <fact.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold text-primary mb-2">{fact.title}</h3>
              <p className="text-gray-700">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
