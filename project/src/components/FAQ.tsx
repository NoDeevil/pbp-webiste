import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "What is Pablo Pesos ($PBP), and what makes it unique?",
      answer: "Pablo Pesos is a memecoin with a mission to bring financial independence to its early investors. With a capybara as its iconic mascot, $PBP combines fun, community, and financial empowerment in the crypto space."
    },
    {
      question: "How can I buy $PBP?",
      answer: "Buying $PBP is simple! Follow our step-by-step guide to set up your wallet, fund it, and purchase $PBP on our launch platform. Details can be found in the \"How to Buy\" section."
    },
    {
      question: "What's the goal of $PBP?",
      answer: "PBP aims to create financial opportunities for early investors while fostering a community that thrives on decentralization and shared success."
    },
    {
      question: "Is $PBP safe to invest in?",
      answer: "While all investments carry risks, $PBP is built with transparency and community trust at its core. Be sure to do your own research before investing."
    },
    {
      question: "Who is behind Pablo Pesos?",
      answer: "Pablo Pesos was created by @41asus, a passionate developer from Germany with a history of innovative digital projects. The goal is to blend fun and functionality to create something meaningful for the crypto community."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl 
                         transform transition-all duration-300 hover:scale-105 
                         hover:bg-white/90 hover:shadow-2xl cursor-pointer"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
