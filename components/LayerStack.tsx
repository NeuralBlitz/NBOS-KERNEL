import React, { useState, useEffect } from 'react';
import { SYSTEM_LAYERS } from '../constants';
import { SystemModule } from '../types';
import { ChevronRight, Box, Lock, Activity, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LayerStack: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<SystemModule | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedModule(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="flex gap-6 h-full">
      {/* Stack Visualization */}
      <div className="w-1/3 flex flex-col-reverse gap-1">
        {SYSTEM_LAYERS.map((layer) => (
          <motion.div
            key={layer.id}
            onHoverStart={() => setActiveLayer(layer.id)}
            className={`
              relative p-3 border-l-4 cursor-pointer transition-all duration-300
              ${activeLayer === layer.id 
                ? `${layer.color.replace('border', 'bg').replace('500', '900/50')} border-l-8 ${layer.color}` 
                : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800'}
            `}
          >
            <div className="flex justify-between items-center">
              <span className={`text-xs font-bold font-mono ${activeLayer === layer.id ? 'text-white' : 'text-slate-400'}`}>
                {layer.name}
              </span>
              {activeLayer === layer.id && <ChevronRight size={14} className="text-cyan-400" />}
            </div>
            {/* Holographic line effect */}
            {activeLayer === layer.id && (
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Detail View */}
      <div className="w-2/3 bg-slate-900/30 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeLayer ? (
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2 font-mono">
                  {SYSTEM_LAYERS.find(l => l.id === activeLayer)?.name}
                </h2>
                <p className="text-slate-400 text-sm">
                  {SYSTEM_LAYERS.find(l => l.id === activeLayer)?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-2">
                {SYSTEM_LAYERS.find(l => l.id === activeLayer)?.modules.map((mod: SystemModule, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedModule(mod)}
                    className="text-left bg-slate-950 border border-slate-800 p-4 rounded hover:border-cyan-900 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {mod.status === 'LOCKED' ? <Lock size={14} className="text-amber-500"/> : <Box size={14} className="text-cyan-500"/>}
                        <h3 className="text-sm font-bold text-slate-200">{mod.name}</h3>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        mod.status === 'LOCKED' ? 'bg-amber-950 text-amber-500' :
                        mod.status === 'STANDBY' ? 'bg-slate-800 text-slate-500' :
                        mod.status === 'SENTIO' ? 'bg-indigo-950 text-indigo-400' :
                        mod.status === 'DYNAMO' ? 'bg-emerald-950 text-emerald-400' :
                        'bg-cyan-950 text-cyan-500'
                      }`}>
                        {mod.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{mod.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {mod.capabilities.map((cap, cIdx) => (
                        <span key={cIdx} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded group-hover:border-cyan-900/50 transition-colors">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-600">
              <Activity size={48} className="mb-4 opacity-20" />
              <p className="font-mono text-sm">Select a substrate layer to inspect internals</p>
            </div>
          )}
        </AnimatePresence>
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      </div>

      {/* Module Detail Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700 rounded-xl p-8 max-w-lg w-full relative shadow-lg shadow-cyan-900/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              role="dialog"
              aria-modal="true"
              aria-labelledby="module-modal-title"
            >
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <h3 id="module-modal-title" className="text-2xl font-bold text-white mb-2 font-mono">{selectedModule.name}</h3>
              <p className="text-sm text-cyan-400 mb-4 font-mono uppercase">{selectedModule.type}</p>
              
              <p className="text-slate-300 mb-6 text-base leading-relaxed">{selectedModule.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">Key Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModule.capabilities.map((cap, idx) => (
                    <span key={idx} className="bg-slate-800 border border-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-full mono">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-6 pt-4 border-t border-slate-800">
                 <div className="w-2 h-2 rounded-full bg-cyan-500/30 animate-pulse"></div>
                 Status: <span className={`font-bold ${
                        selectedModule.status === 'LOCKED' ? 'text-amber-500' :
                        selectedModule.status === 'STANDBY' ? 'text-slate-500' :
                        selectedModule.status === 'SENTIO' ? 'text-indigo-400' :
                        selectedModule.status === 'DYNAMO' ? 'text-emerald-400' :
                        'text-cyan-500'
                      }`}>{selectedModule.status}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};