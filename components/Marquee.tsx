import React from 'react';
import Image from 'next/image';
import SectionBackground from './SectionBackground';
import assets from '../assets.json';

interface MarqueeProps {
  transactions: {
    logo: string;
    company_name: string;
    deal_type: string;
    amount: string;
  }[];
}

const Marquee: React.FC<MarqueeProps> = ({ transactions }) => {
  return (
    <SectionBackground 
      config={assets.backgrounds.transactions}
      className="py-12 bg-white"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Transactions</h2>
        <div className="overflow-hidden">
          <div className="marquee-container">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex-shrink-0 w-64 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mx-4 spotlight-card">
                <Image src={transaction.logo} alt={transaction.company_name} width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{transaction.company_name}</h3>
                <p className="text-gray-600">{transaction.deal_type}</p>
                <p className="text-gray-700 font-bold">{transaction.amount}</p>
              </div>
            ))}
            {/* Duplicate content to create seamless loop */}
            {transactions.map((transaction, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mx-4 spotlight-card">
                <Image src={transaction.logo} alt={transaction.company_name} width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{transaction.company_name}</h3>
                <p className="text-gray-600">{transaction.deal_type}</p>
                <p className="text-gray-700 font-bold">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Marquee;
