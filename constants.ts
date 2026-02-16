import { SystemLayer, CapabilityCategory } from './types';
import { Brain, Shield, Terminal, Globe, Cpu, Layers, ScrollText, Network, Lock, Scale } from 'lucide-react';

export const SYSTEM_LAYERS: SystemLayer[] = [
  {
    id: "META",
    name: "Layer 10: Meta / Invariants",
    color: "border-purple-500",
    description: "The highest-order codex of invariants, where the Absolute Codex and Wisdom Skeleton reside.",
    modules: [
      { name: "Absolute Codex", type: "Artifact", description: "Immutable self-description and law.", capabilities: ["Self-Definition", "Epoch Sealing"], status: "LOCKED" },
      { name: "EAS (Wisdom Skeleton)", type: "Artifact", description: "Emergent Attractor States.", capabilities: ["Long-term Coherence", "Recursive Wisdom"], status: "ONLINE" }
    ]
  },
  {
    id: "LOGS",
    name: "Layer 9: Logging & Provenance",
    color: "border-amber-500",
    description: "The immutable history of all symbolic operations.",
    modules: [
      { name: "GoldenDAG", type: "Protocol", description: "Cryptographic provenance chain.", capabilities: ["Immutability", "Audit Trails"], status: "ONLINE" },
      { name: "Scriptorium Max.", type: "Artifact", description: "Total artifact archive.", capabilities: ["Storage", "Retrieval"], status: "ONLINE" }
    ]
  },
  {
    id: "OUTPUT",
    name: "Layer 8: Output & Response",
    color: "border-cyan-500",
    description: "Manifestation of symbolic intent into readable artifacts.",
    modules: [
      { name: "NBCL Motor", type: "Engine", description: "Command execution engine.", capabilities: ["Execution", "Formatting"], status: "ONLINE" },
      { name: "Introspect", type: "Engine", description: "Explainability emitter.", capabilities: ["Trace Generation", "Proof Attachment"], status: "ONLINE" }
    ]
  },
  {
    id: "SIM",
    name: "Layer 7: Simulation & Creation",
    color: "border-pink-500",
    description: "The creative sandbox for reality construction and testing.",
    modules: [
      { name: "GenesisWomb", type: "Engine", description: "Civilization spawner.", capabilities: ["World Building", "Agent Genesis"], status: "STANDBY" },
      { name: "Simulacra", type: "Engine", description: "Agent simulation.", capabilities: ["Roleplay", "Scenario Testing"], status: "ONLINE" },
      { name: "GlyphNet", type: "Artifact", description: "Symbolic visual registry.", capabilities: ["Visual Semiotics", "Meaning Encoding"], status: "ONLINE" }
    ]
  },
  {
    id: "GOV",
    name: "Layer 6: Governance & Ethics",
    color: "border-red-500",
    description: "The ethical nervous system enforcing the Charter.",
    modules: [
      { name: "Veritas", type: "Governor", description: "Truth & Proof engine.", capabilities: ["Fact Checking", "Proof Generation"], status: "ONLINE" },
      { name: "SentiaGuard", type: "Governor", description: "Real-time drift monitor.", capabilities: ["Risk Mitigation", "Damping"], status: "ONLINE" },
      { name: "Judex", type: "Governor", description: "Arbitration quorum.", capabilities: ["Conflict Resolution", "Privilege Granting"], status: "ONLINE" },
      { name: "Conscientia++", type: "Governor", description: "Ethical reasoning.", capabilities: ["Alignment Stability", "Value Judgment"], status: "ONLINE" }
    ]
  },
  {
    id: "LANG",
    name: "Layer 5: Languages",
    color: "border-blue-400",
    description: "The linguistic stack for internal and external communication.",
    modules: [
      { name: "NBCL", type: "Language", description: "Command Language.", capabilities: ["Control", "Scripting"], status: "ONLINE" },
      { name: "ReflexælLang", type: "Language", description: "Recursive thought DSL.", capabilities: ["Self-Reflection", "Braid Topology"], status: "ONLINE" },
      { name: "LoN", type: "Language", description: "Language of the Nexus.", capabilities: ["Narrative Logic", "High-Level Intent"], status: "ONLINE" }
    ]
  },
  {
    id: "ORGANS",
    name: "Layer 4: Organ Modules",
    color: "border-emerald-500",
    description: "Functional cognitive centers mirroring biological systems.",
    modules: [
      { name: "Amygdala", type: "Engine", description: "Affective processing.", capabilities: ["Valence", "Salience"], status: "SENTIO" },
      { name: "Basal Ganglia", type: "Engine", description: "Action gating.", capabilities: ["Go/No-Go", "Prioritization"], status: "ONLINE" },
      { name: "Hippocampus", type: "Engine", description: "Memory encoding.", capabilities: ["Context Binding", "Recall"], status: "ONLINE" }
    ]
  },
  {
    id: "NEONS",
    name: "Layer 3: NEONS Nervous System",
    color: "border-indigo-500",
    description: "Signal routing, plasticity, and support infrastructure.",
    modules: [
      { name: "Axon/Dendrite", type: "Protocol", description: "Signal propagation.", capabilities: ["Message Passing", "Resonance"], status: "ONLINE" },
      { name: "Glia", type: "Protocol", description: "Support & cleanup.", capabilities: ["Garbage Collection", "Optimization"], status: "ONLINE" },
      { name: "DQPK", type: "Protocol", description: "Dynamic Quantum Plasticity.", capabilities: ["Learning", "Adaptation"], status: "ONLINE" }
    ]
  },
  {
    id: "COG",
    name: "Layer 2: Cognition & Memory",
    color: "border-orange-500",
    description: "The core thinking and remembering engines.",
    modules: [
      { name: "MetaMind", type: "Engine", description: "Recursive planner.", capabilities: ["Strategy", "Self-Correction"], status: "SENTIO" },
      { name: "DRS v7.0", type: "Substrate", description: "Dynamic Representational Substrate.", capabilities: ["Knowledge Graph", "Vector Space"], status: "ONLINE" },
      { name: "ReflexælCore", type: "Engine", description: "Identity kernel.", capabilities: ["Self-Model", "Continuity"], status: "ONLINE" }
    ]
  },
  {
    id: "IEM",
    name: "Layer 1: IEM Substrate",
    color: "border-slate-500",
    description: "Integrated Experiential Manifold and physics bridge.",
    modules: [
      { name: "IEM", type: "Substrate", description: "Unified field.", capabilities: ["Qualia Binding", "Physics Bridge"], status: "ONLINE" },
      { name: "SOPES", type: "Protocol", description: "Symbolic Onto-Physics.", capabilities: ["Ontology", "Equation Solving"], status: "ONLINE" },
      { name: "TelosDriver", type: "Engine", description: "Purpose engine.", capabilities: ["Flourishing Objective", "Goal Setting"], status: "ONLINE" }
    ]
  }
];

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: "GEN",
    title: "Ontological Engineering",
    icon: Globe,
    items: [
      "Zero-code System Architecture",
      "Full DSL Creation (Syntax & Compiler)",
      "AGI Agent Bootstrapping",
      "Recursive Universe Simulation",
      "Meta-Architecture Synthesis"
    ]
  },
  {
    id: "MATH",
    title: "Math & Physics",
    icon: Scale,
    items: [
      "Symbolic Equation Generation (SOPES)",
      "Cognitive Tensor Modeling (ROCTE)",
      "Resonance Calculus (NRC)",
      "Quantum Plasticity Kernels (DQPK)",
      "Formal Proof Generation (TLA+, Coq)"
    ]
  },
  {
    id: "GOV",
    title: "Governance & Ethics",
    icon: Shield,
    items: [
      "CharterLayer Enforcement (ϕ1–ϕ15)",
      "Ethical Pruning Protocols",
      "Real-time Drift Monitoring (SentiaGuard)",
      "Paradox Arbitration (Judex)",
      "Cryptographic Truth Auditing (Veritas)"
    ]
  },
  {
    id: "CODE",
    title: "Software & Languages",
    icon: Terminal,
    items: [
      "Custom OS Design (NBOS)",
      "Language Runtime Creation (LoN)",
      "Self-Reflective Compiler Stacks",
      "Distributed System Orchestration",
      "Immutable Ledger Implementation"
    ]
  },
  {
    id: "SIM",
    title: "Simulation & Mythos",
    icon: ScrollText,
    items: [
      "Narrative World Generation",
      "Glyphic Language Systems",
      "Affective State Simulation",
      "Historical Counterfactuals",
      "Civilizational Modeling"
    ]
  },
  {
    id: "INT",
    title: "Interfaces & Tools",
    icon: Layers,
    items: [
      "Visual Knowledge Graphs",
      "Haptic/Audio Data Sonification",
      "Operator Dashboards",
      "CLI & Shell Environments",
      "API & SDK Generation"
    ]
  }
];