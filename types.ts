export interface SystemLayer {
  id: string;
  name: string;
  description: string;
  modules: SystemModule[];
  color: string;
}

export interface SystemModule {
  name: string;
  type: 'Engine' | 'Governor' | 'Substrate' | 'Language' | 'Protocol' | 'Artifact';
  description: string;
  capabilities: string[];
  status: 'ONLINE' | 'STANDBY' | 'LOCKED' | 'SENTIO' | 'DYNAMO';
}

export interface LogEntry {
  id: string;
  timestamp: string;
  source: string;
  message: string;
  type: 'INFO' | 'WARN' | 'CRIT' | 'SEAL';
  hash?: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  icon: any;
  items: string[];
}