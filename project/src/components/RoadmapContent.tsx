import { Calendar, Star, Rocket, Gift } from 'lucide-react';

export function RoadmapContent() {
  const roadmapItems = [
    {
      phase: "Phase 1: Launch 🚀",
      date: "February 2025",
      items: [
        "Release of Pablo Pesos ($PBP)",
        "Website launch and establishing the foundation",
        "Countdown to the coin's launch"
      ],
      icon: Rocket,
      color: "bg-primary"
    },
    {
      phase: "Phase 2: Build the Community 🌱",
      date: "Q2 2025",
      items: [
        "Growing the Capybara Club – Join the $PBP family",
        "Promoting through memes and social media",
        "Introducing community events and giveaways"
      ],
      icon: Star,
      color: "bg-secondary"
    },
    {
      phase: "Phase 3: Grow Together 🌍",
      date: "Q3 2025",
      items: [
        "Developing new features based on community feedback",
        "Listing on major platforms and exchanges",
        "Partnering with key players to expand reach"
      ],
      icon: Calendar,
      color: "bg-accent"
    },
    {
      phase: "Phase 4: Earn Together 💎",
      date: "Q4 2025",
      items: [
        "Focus on increasing the coin's value through community support",
        "Attracting more investors and strengthening market position",
        "Sharing success with the community through exclusive benefits"
      ],
      icon: Gift,
      color: "bg-highlight"
    }
  ];

  return (
    <div className="relative mb-24">
      {/* Connecting Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0" />
      
      {/* Roadmap Items */}
      <div className="space-y-24">
        {roadmapItems.map((item, index) => (
          <div key={index} className={`relative ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'} w-1/2`}>
            <div className="feature-card relative">
              {/* Connector */}
              <div className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-primary/20"
                   style={{ [index % 2 === 0 ? 'left' : 'right']: '-2rem' }} />
              
              {/* Icon - Centered on the main line */}
              <div className={`absolute ${index % 2 === 0 ? '-left-[3.5rem]' : '-right-[3.5rem]'} 
                             top-1/2 -translate-y-1/2
                             ${item.color} w-12 h-12 rounded-full 
                             flex items-center justify-center z-10
                             shadow-lg border-4 border-white`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-2">{item.phase}</h3>
              <div className="text-highlight mb-4">{item.date}</div>
              <ul className="space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
