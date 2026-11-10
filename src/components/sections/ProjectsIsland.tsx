import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Smartphone, Globe } from 'lucide-react';

import aiLmsImg from '@/assets/project-ai-lms.webp';
import ecommerceImg from '@/assets/project-ecommerce.webp';
import dappImg from '@/assets/project-dapp.webp';
import taskManagerImg from '@/assets/project-task-manager.webp';
import corporateAppImg from '@/assets/project-corporate-app.webp';
import financeImg from '@/assets/project-finance.webp';

interface Project {
  id: string;
  title: string;
  category: 'AI & Intelligence' | 'Web Platforms' | 'Mobile & Web3';
  description: string;
  architectureHighlight: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  badge?: string;
}

const getImageSrc = (img: any): string => {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object' && img.src) return img.src;
  return '';
};

const projectsData: Project[] = [
  {
    id: 'qualifai',
    title: 'QualifAI — Autonomous Click-to-WhatsApp Sales & Qualification Engine',
    category: 'AI & Intelligence',
    description: 'Enterprise Click-to-WhatsApp (CTWA) conversion engine converting paid Meta ad traffic into qualified pipeline 24/7. Features context-aware ad attribution, intelligent message burst pacing, autonomous multi-turn qualification, and instant live agent co-pilot takeover.',
    architectureHighlight: 'Meta Cloud API + Multi-agent LLM reasoning + Ad Campaign Attribution + Real-Time WebSockets',
    tags: ['Meta Cloud API', 'Click-to-WhatsApp', 'AI Agents', 'Ad Attribution', 'LLMs', 'FastAPI'],
    image: getImageSrc(aiLmsImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: 'https://qualifai.io',
    badge: 'Live SaaS',
  },
  {
    id: 'genie-cloud',
    title: 'Genie Cloud — The Zero-Friction Cloud ERP with Native AI',
    category: 'Web Platforms',
    description: 'Enterprise-grade Cloud ERP engineered with dedicated physical database-per-tenant isolation (zero shared tables). Automates complex industrial weighbridge scale tickets, rock crushing yields, multimodal invoice OCR table parsing, deterministic 3-way PO matching, and sub-second Shopify multi-store inventory sync.',
    architectureHighlight: 'Physical Database-Per-Tenant Isolation + Native Genie AI Reasoning Engine + Edge Cloud Distributed Nodes',
    tags: ['Physical DB Isolation', 'Native AI', 'Cloud ERP', 'Multimodal OCR', 'Weighbridge IoT', '3-Way Match', 'Shopify Sync', 'PostgreSQL'],
    image: getImageSrc(corporateAppImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: 'https://getgeniecloud.com',
    badge: 'Live Enterprise ERP',
  },
  {
    id: 'finance-intel',
    title: 'Financial Forecasting & Asset Intelligence',
    category: 'AI & Intelligence',
    description: 'Institutional-grade market telemetry dashboard with automated algorithmic trend detection, risk modeling, and sub-second chart rendering.',
    architectureHighlight: 'React 19 + Recharts + D3.js + FastAPI statistical worker',
    tags: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Financial Modeling'],
    image: getImageSrc(financeImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'High-Throughput Headless E-Commerce',
    category: 'Web Platforms',
    description: 'Enterprise commerce platform featuring instant edge hydration, atomic inventory reconciliation, and global multi-currency Stripe checkout.',
    architectureHighlight: 'Next.js SSR + Stripe Webhooks + Sanity CMS + Edge Caching',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
    image: getImageSrc(ecommerceImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: '#',
  },
  {
    id: 'defi-dapp',
    title: 'DeFi Mobile Multi-Chain Wallet',
    category: 'Mobile & Web3',
    description: 'Non-custodial cryptocurrency management and decentralized exchange suite with gas estimation algorithms and biometrically secured keychains.',
    architectureHighlight: 'React Native + Solidity Smart Contracts + Web3.js + OpenZeppelin',
    tags: ['React Native', 'Solidity', 'Web3.js', 'Ethereum', 'Tailwind'],
    image: getImageSrc(dappImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: '#',
  },
  {
    id: 'task-mesh',
    title: 'Real-Time Collaboration & Task Mesh',
    category: 'Web Platforms',
    description: 'Low-latency collaborative workflow tool featuring real-time presence indicators, operational transformation state sync, and fine-grained RBAC.',
    architectureHighlight: 'Node.js event loops + Redis Pub/Sub + WebSockets + React',
    tags: ['React', 'Node.js', 'Socket.io', 'Redis', 'PostgreSQL'],
    image: getImageSrc(taskManagerImg),
    githubUrl: 'https://github.com/Base29',
    liveUrl: '#',
  },
];

const categories = ['All Projects', 'AI & Intelligence', 'Web Platforms', 'Mobile & Web3'] as const;

export const ProjectsIsland: React.FC = () => {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]>('All Projects');

  const filteredProjects = activeTab === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-3">
              <span>ARCHITECTURE & PROVEN WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Featured systems & projects.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3">
              Selected production applications demonstrating full-stack engineering, distributed systems, and modern AI capability.
            </p>
          </div>

          {/* GitHub Link */}
          <div>
            <a
              href="https://github.com/Base29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium glass-panel text-foreground hover:bg-secondary transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-border/40">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                }`}
              >
                {cat === 'AI & Intelligence' && <Sparkles className="w-3.5 h-3.5" />}
                {cat === 'Web Platforms' && <Globe className="w-3.5 h-3.5" />}
                {cat === 'Mobile & Web3' && <Smartphone className="w-3.5 h-3.5" />}
                {cat === 'All Projects' && <Layers className="w-3.5 h-3.5" />}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-background/20 text-background' : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {cat === 'All Projects' ? projectsData.length : projectsData.filter((p) => p.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';

            return (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden glass-panel border border-border/70 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-muted/60">
                    {hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full cursor-pointer"
                        title={`Visit ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 pointer-events-none"></div>

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold glass-pill text-foreground border border-border/60">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {hasLiveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:underline"
                        >
                          <span>{project.title}</span>
                          <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/40 text-[11px] font-mono text-foreground/80 mb-4">
                      <span className="text-primary font-bold">Arch: </span>
                      {project.architectureHighlight}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-secondary/80 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-border/30">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source / Spec</span>
                  </a>

                  {hasLiveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all shadow-sm"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:underline"
                    >
                      <span>Architecture Inquiry</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProjectsIsland;
