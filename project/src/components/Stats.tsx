import { Coins, Users, Calendar } from 'lucide-react';
import { StatCard } from './StatCard';

export function Stats() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <StatCard
          icon={Coins}
          color="text-secondary"
          title="Initial Price"
          value="$0.000001 USD"
        />
        <StatCard
          icon={Users}
          color="text-accent"
          title="Total Supply"
          value="1,000,000,000,000 PBP"
        />
        <div className="relative">
          <div className="absolute -top-8 -right-4 z-10">
            <div className="bg-red-500 text-white px-4 py-1 rounded-full transform rotate-12 animate-pulse shadow-lg">
              Mark your calendars!
            </div>
          </div>
          <StatCard
            icon={Calendar}
            color="text-highlight"
            title="Launch Date"
            value="February 1st, 2025"
          />
        </div>
      </div>
    </div>
  );
}
