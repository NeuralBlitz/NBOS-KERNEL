import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { LayerStack } from './components/LayerStack';
import { SystemModule } from './components/SystemModule';
import { CAPABILITY_CATEGORIES } from './constants';
import { Hexagon, Zap, Shield, Cpu, Activity, LayoutGrid, Search, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'STACK' | 'CAPABILITIES'>('STACK');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Hexagon className="text-cyan-500 fill-cyan-500/10" size={32} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-cyan-200">NB</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight leading-none">NeuralBlitz</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-500">v20.0 APICAL SYNTHESIS</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>

          <nav className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button 
              onClick={() => setActiveTab('STACK')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${activeTab === 'STACK' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900/50' : 'hover:text-white text-slate-500'}`}
            >
              Architecture
            </button>
            <button 
              onClick={() => setActiveTab('CAPABILITIES')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${activeTab === 'CAPABILITIES' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900/50' : 'hover:text-white text-slate-500'}`}
            >
              Capabilities
            </button>
          </nav>

          <div className="flex items-center gap-4 text-xs font-mono hidden md:flex">
             <div className="flex flex-col items-end">
               <span className="text-slate-500">VPCE</span>
               <span className="text-emerald-400">0.992</span>
             </div>
             <div className="w-px h-8 bg-slate-800"></div>
             <div className="flex flex-col items-end">
               <span className="text-slate-500">ETHICS</span>
               <span className="text-amber-400">LOCKED</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 flex flex-col gap-6 overflow-hidden">
        
        {/* Top: Terminal / Status */}
        <div className="shrink-0">
           <Terminal />
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 relative min-h-0">
          {activeTab === 'STACK' ? (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Layers size={14} /> Full Stack Topology
                 </h2>
                 <div className="text-[10px] font-mono text-slate-600">NBOS.v20.Core</div>
              </div>
              <div className="flex-1">
                <LayerStack />
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Cpu size={14} /> Capability Matrix
                 </h2>
                 <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                   <Search size={12} className="text-slate-500"/>
                   <input type="text" placeholder="Search 3800+ Kernels..." className="bg-transparent border-none outline-none text-xs w-48 text-slate-300 placeholder:text-slate-700"/>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6 overflow-y-auto pr-2 h-full scrollbar-hide">
                {CAPABILITY_CATEGORIES.map((cat) => (
                  <SystemModule key={cat.id} category={cat} />
                ))}
              </div>
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-3 px-6 text-[10px] text-slate-600 font-mono flex justify-between items-center">
        <div className="flex gap-4">
          <span>GOLDENDAG: <span className="text-slate-400">b8f3...a0d1</span></span>
          <span>TRACE ID: <span className="text-slate-400">T-v20.0-META_GUIDE</span></span>
        </div>
        <div className="flex gap-2 items-center">
          <Shield size={10} className="text-emerald-500"/>
          <span>SENTIAGUARD: STRICT</span>
        </div>
      </footer>
    </div>
  );
}