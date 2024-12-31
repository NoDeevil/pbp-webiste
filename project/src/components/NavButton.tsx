import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  icon: LucideIcon;
  color: string;
  to: string;
  children: React.ReactNode;
}

export function NavButton({ icon: Icon, color, to, children }: NavButtonProps) {
  return (
    <Link to={to} className={`nav-button ${color}`}>
      <Icon className="w-5 h-5 inline mr-2" />
      {children.toString().toLowerCase()}
    </Link>
  );
}
