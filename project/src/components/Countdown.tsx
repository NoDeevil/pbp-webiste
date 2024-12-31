import { useState, useEffect } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date('2025-02-01T00:00:00Z');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Launch Countdown! 🚀</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl font-bold text-highlight mb-2">{value}</div>
              <div className="text-gray-600 capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
