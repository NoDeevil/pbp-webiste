import { Calendar, Star, Rocket, Gift } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { RoadmapQuote } from '../components/RoadmapQuote';
import { RoadmapContent } from '../components/RoadmapContent';

export function Docs() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary text-center mb-8">Roadmap</h1>
        <RoadmapQuote />
        <RoadmapContent />
        <FAQ />
      </div>
    </div>
  );
}
