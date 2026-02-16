import React, { useState, useEffect, useRef } from 'react';
import { LogEntry } from '../types';
import { Terminal as TerminalIcon, ShieldCheck, Activity } from 'lucide-react';

const BOOT_SEQUENCE = [
  { msg: "Initializing NBOS v20.0 — Apical Synthesis...", type: "INFO" },
  { msg: "Loading Core Hamiltonians (ROCTE, SOPES, NRC)... OK", type: "INFO" },
  { msg: "Binding DRS-F Epistemic Field... OK", type: "INFO" },
  { msg: "Activating Governance Mesh (SentiaGuard, Veritas)... OK", type: "INFO" },
  { msg: "Charter v5.3 Locked (ϕ1–ϕ15, Ω)... OK", type: "SEAL" },
  { msg: "IEM Substrate Online. Telos Driver Active.", type: "INFO" },
  { msg: "NBUS Unified Substrate Fully Online.", type: "INFO" }
];

export const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 0;
    BOOT_SEQUENCE.forEach((item, index) => {
      delay += Math.random() * 500 + 200;
      setTimeout(() => {
        const entry: LogEntry = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString().split('T')[1].slice(0, -1),
          source: "NBOS_KERNEL",
          message: item.msg,
          type: item.type as any,
          hash: Math.random().toString(16).substr(2, 12).toUpperCase()
        };
        setLogs(prev => [...prev, entry]);
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex flex-col h-[300px] shadow-2xl shadow-cyan-900/10">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-400">
          <TerminalIcon size={16} />
          <span className="text-xs font-mono font-bold">NBCL CONSOLE</span>
        </div>
        <div className="flex gap-4 text-xs font-mono">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck size={12} /> SECURE
          </span>
          <span className="flex items-center gap-1 text-cyan-400">
            <Activity size={12} /> ONLINE
          </span>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1 scrollbar-hide"
      >
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
            <span className={`shrink-0 ${
              log.type === 'CRIT' ? 'text-red-500' : 
              log.type === 'WARN' ? 'text-amber-500' : 
              log.type === 'SEAL' ? 'text-amber-300' : 'text-cyan-600'
            }`}>
              {log.source}:
            </span>
            <span className={log.type === 'SEAL' ? 'text-amber-100 font-bold' : 'text-slate-300'}>
              {log.message}
            </span>
            {log.hash && <span className="ml-auto text-slate-700 hidden sm:inline">#{log.hash}</span>}
          </div>
        ))}
        <div className="animate-pulse text-cyan-500">_</div>
      </div>
    </div>
  );
};