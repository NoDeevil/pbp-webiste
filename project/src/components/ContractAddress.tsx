import { Lock } from 'lucide-react';

export function ContractAddress() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border-2 border-primary/20
                    hover:bg-white/60 transition-all duration-500 group">
        <div className="flex items-center justify-center gap-4">
          <Lock className="w-8 h-8 text-primary/60 group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-primary/60">Contract Address</h3>
        </div>
        <p className="text-center text-gray-600 mt-4 group-hover:scale-105 transition-transform duration-300">
          The contract address will be revealed on launch day - February 1st, 2025
        </p>
      </div>
    </div>
  );
}
