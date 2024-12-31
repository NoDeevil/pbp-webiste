import { Coins, Users, Calendar } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Features } from '../components/Features';
import { Countdown } from '../components/Countdown';
import { BuyTutorial } from '../components/BuyTutorial';
import { MemeOrigin } from '../components/MemeOrigin';
import { MeetPablo } from '../components/MeetPablo';
import { ContractAddress } from '../components/ContractAddress';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';

export function HomePage() {
  return (
    <>
      <Hero />
      <Countdown />
      <ContractAddress />
      <Stats />
      <MemeOrigin />
      <MeetPablo />
      <BuyTutorial />
      <Features />
    </>
  );
}
