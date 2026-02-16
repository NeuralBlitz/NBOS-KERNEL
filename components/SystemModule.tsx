import React from 'react';
import { CapabilityCategory } from '../types';

interface Props {
  category: CapabilityCategory;
}

export const SystemModule: React.FC<Props> = ({ category }) => {
  const Icon = category.icon;
  
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl hover:bg-slate-900/80 transition-all hover:border-cyan-800 group h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded bg-slate-950 border border-slate-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors text-slate-400">
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-slate-200">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.items.map((item, idx) => (
          <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
            <span className="text-cyan-900 mt-1.5">•</span>
            <span className="group-hover:text-slate-300 transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};