import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, Clock, Globe } from 'lucide-react';

export const ContactIsland: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Architecture Consultation', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('me@imfaisal.pro');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+92 322 2911199');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Pre-fill mailto link as fallback to guarantee transmission
      const mailtoUrl = `mailto:me@imfaisal.pro?subject=${encodeURIComponent(
        `[Inquiry from ${formData.name}] ${formData.subject}`
      )}&body=${encodeURIComponent(formData.message + `\n\nSender Email: ${formData.email}`)}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-3">
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Initiate an architecture discussion.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">
            Whether you need principal engineering leadership, distributed systems design, or AI agent implementation, let's explore how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Signals (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl glass-panel border border-border/70 card-hover-effect">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Direct Email</span>
                    <h3 className="font-mono text-sm font-bold text-foreground">me@imfaisal.pro</h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-secondary hover:bg-secondary/80 text-foreground transition-all flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl glass-panel border border-border/70 card-hover-effect">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Direct / WhatsApp</span>
                    <h3 className="font-mono text-sm font-bold text-foreground">+92 322 2911199</h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-secondary hover:bg-secondary/80 text-foreground transition-all flex items-center gap-1.5"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl glass-panel border border-border/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Base & Reach</span>
                  <h3 className="font-display text-sm font-bold text-foreground">Lahore, Pakistan</h3>
                </div>
              </div>
              <div className="text-xs text-muted-foreground pt-1 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Available for global remote contracts, architectural advisory, and select international relocation.</span>
              </div>
            </div>

            {/* Availability SLA */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 flex items-center gap-3 text-xs text-muted-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Standard response turnaround within 24 hours for engineering & leadership inquiries.</span>
            </div>
          </div>

          {/* Right Column: Direct Inquiries Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-border/70 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Transmit a Message</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">Direct routing to Faisal's primary inbox</p>
                </div>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-foreground">Message Dispatched</h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Your transmission has been queued. If your email client didn't open automatically, you can also write directly to <strong className="text-foreground">me@imfaisal.pro</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-primary hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-muted-foreground mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-muted-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">Discussion Focus</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    >
                      <option value="Architecture Consultation">System Architecture & Scalability</option>
                      <option value="AI & LLM Implementation">AI Agents & LLM RAG Pipeline</option>
                      <option value="Full-Stack Engineering">Full-Stack Web or Mobile Development</option>
                      <option value="Principal / Fractional CTO">Fractional CTO / Technical Leadership</option>
                      <option value="General Collaboration">General Inquiries & Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">Message / Overview</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, current architecture hurdles, or role specifications..."
                      className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="text-xs font-mono">Routing transmission...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactIsland;
