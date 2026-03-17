import React from 'react';
import { Leaf, Plane, ShieldCheck, TrendingUp } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-all group">
    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
      <Icon className="text-emerald-600 dark:text-emerald-400" size={24} />
    </div>
    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const InfoPanel = () => {
  return (
    <aside className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Explore Electric Vehicles</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <InfoCard 
        icon={Leaf}
        title="Zero Emissions"
        description="EVs produce no tailpipe emissions, helping to reduce air pollution in India's major cities and combat climate change."
      />

      <InfoCard 
        icon={TrendingUp}
        title="Infrastructure Growth"
        description="India is rapidly expanding its EV charging network, with thousands of new stations being installed across national highways."
      />

      <InfoCard 
        icon={ShieldCheck}
        title="Government Initiatives"
        description="FAME-II and state-level policies provide subsidies and incentives making EV ownership more affordable for everyone."
      />

      <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
        <h4 className="font-bold mb-2">Did You Know?</h4>
        <p className="text-xs opacity-90 leading-relaxed">
          The Indian government aims for 30% EV penetration by 2030, significantly reducing the country's oil import bill.
        </p>
      </div>
    </aside>
  );
};

export default InfoPanel;
