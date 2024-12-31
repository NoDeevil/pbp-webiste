import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  color: string;
  title: string;
  value: string;
}

export function StatCard({ icon: Icon, color, title, value }: StatCardProps) {
  return (
    <div className="stat-card">
      <Icon className={`w-12 h-12 ${color} mb-4`} />
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-xl text-gray-700">{value}</p>
    </div>
  );
}
