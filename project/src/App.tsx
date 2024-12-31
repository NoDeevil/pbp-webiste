import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Coins, Home, User2, FileText, Bell } from 'lucide-react';
import { NavButton } from './components/NavButton';
import { HomePage } from './pages/Home';
import { Creator } from './pages/Creator';
import { Docs } from './pages/Docs';
import { Updates } from './pages/Updates';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="floating-bg" />
        
        {/* Navigation */}
        <nav className="bg-white/70 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-primary">$PBP</span>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="text-xl font-bold text-primary">@41asus</div>
              </div>
              
              <div className="flex gap-4">
                <NavButton icon={Home} to="/" color="bg-primary text-white">home</NavButton>
                <NavButton icon={User2} to="/creator" color="bg-secondary text-white">creator</NavButton>
                <NavButton icon={FileText} to="/docs" color="bg-accent text-white">docs</NavButton>
                <NavButton icon={Bell} to="/updates" color="bg-highlight text-white">updates</NavButton>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </div>
    </Router>
  );
}
