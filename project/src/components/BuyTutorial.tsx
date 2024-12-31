import { Wallet, CreditCard, Store, Coins } from 'lucide-react';

export function BuyTutorial() {
  const steps = [
    {
      title: "Create a Wallet",
      description: "We recommend using Phantom Wallet for the best experience. Download and set up your wallet.",
      icon: Wallet
    },
    {
      title: "Fund Your Wallet",
      description: "Add SOL (Solana) to your Phantom Wallet. You can purchase SOL from major exchanges like Binance, Coinbase, or Kraken, then transfer it to your wallet.",
      icon: CreditCard
    },
    {
      title: "Visit the Marketplace",
      description: "Once $PBP is launched, head to pump.fun or later Raydium to buy Pablo Pesos. These platforms will allow you to swap SOL for $PBP easily.",
      icon: Store
    },
    {
      title: "Swap and Secure",
      description: "Use your Phantom Wallet to connect to the marketplace, select $PBP, and swap your SOL. After the purchase, your $PBP will appear in your wallet.",
      icon: Coins
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">How to Buy $PBP</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="feature-card text-center">
            <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
