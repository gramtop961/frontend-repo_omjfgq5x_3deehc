import { useState } from 'react';
import { CheckCircle, BarChart3, Bot, ShieldCheck, Calendar, CreditCard, PhoneCall, Sparkles, Quote } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Built for modern dental practices</h2>
          <p className="text-black/70 mb-4">Velodent unifies AI receptionist, follow-ups, insurance verification, payments, and scheduling so your team can focus on patient care — not admin.</p>
          <ul className="space-y-2 text-black/80">
            {[
              '2X ROI guarantee',
              'Full front desk automation',
              'Automated reminders and follow-ups',
              'Lead capture and no‑show reduction',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Bot, title: 'AI Receptionist' },
              { icon: Calendar, title: 'Scheduling' },
              { icon: ShieldCheck, title: 'Insurance' },
              { icon: CreditCard, title: 'Payments' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="p-4 rounded-xl border border-black/10 hover:shadow-sm transition bg-white">
                <Icon className="w-6 h-6 mb-2" />
                <p className="font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    { icon: Bot, title: 'AI receptionist', desc: 'Answers, routes, books, and follows up 24/7.' },
    { icon: PhoneCall, title: 'Follow-ups & reminders', desc: 'Reduce no-shows with smart SMS/voice reminders.' },
    { icon: Calendar, title: 'Booking & rescheduling', desc: 'Seamless scheduling, rescheduling, and cancellations.' },
    { icon: ShieldCheck, title: 'Insurance verification', desc: 'Verify coverage automatically before appointments.' },
    { icon: CreditCard, title: 'Payments', desc: 'Collect co-pays, send links, and reconcile automatically.' },
    { icon: BarChart3, title: 'Analytics', desc: 'Pipeline, conversion, utilization, and ROI.' },
    { icon: Sparkles, title: 'Treatment schedules', desc: 'E.g., braces tightening reminders and cycles.' },
    { icon: PhoneCall, title: 'Lead generation', desc: 'Capture from ads and trigger call reminders.' },
  ];
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-black/10 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition">
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  const cases = [
    {
      id: 'case-alpha',
      name: 'Willow Dental Group',
      summary: 'Cut no-shows by 41% and filled hygiene gaps with automated follow-ups.'
    },
    {
      id: 'case-beta',
      name: 'BrightSmile Ortho',
      summary: 'Automation recovered $38k in lost production from cancellations.'
    },
    {
      id: 'case-gamma',
      name: 'Cedar Family Dental',
      summary: 'First-call resolution up 62% with AI receptionist.'
    }
  ];
  return (
    <section id="case-studies" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="block group p-6 rounded-2xl border border-black/10 bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition">
              <h3 className="font-medium mb-2">{c.name}</h3>
              <p className="text-sm text-black/70">{c.summary}</p>
            </a>
          ))}
        </div>
        {cases.map((c) => (
          <div key={c.id} id={c.id} className="mt-10 p-6 rounded-2xl border border-black/10 bg-white">
            <h3 className="text-xl font-semibold mb-2">{c.name}</h3>
            <p className="text-black/70 mb-4">{c.summary}</p>
            <ul className="list-disc pl-5 text-black/80 space-y-1">
              <li>Client overview</li>
              <li>Problem and challenge</li>
              <li>AI solution and workflow</li>
              <li>Metrics and results</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    { name: 'Dr. Patel, DDS', text: 'We cut voicemails by 70% in the first month. Patients love the instant replies.' },
    { name: 'Samantha, Office Manager', text: 'No-show rate dropped from 18% to 9%. The follow-up cadence is a lifesaver.' },
    { name: 'Dr. Nguyen, Orthodontist', text: 'Insurance pre-checks before visits saved our team hours every week.' },
  ];
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="p-6 rounded-2xl border border-black/10 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.04)]">
              <Quote className="w-6 h-6 mb-3" />
              <p className="text-black/80 mb-3">“{q.text}”</p>
              <p className="text-sm text-black/60">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const data = [
    { q: 'How does the 2X ROI guarantee work?', a: 'If Velodent does not generate at least 2X ROI within the agreed period, we make it right — including credits or additional services until achieved.' },
    { q: 'Can it handle insurance verification?', a: 'Yes. We integrate verification flows so coverage is checked before appointments and anomalies are flagged.' },
    { q: 'Will it reduce no-shows?', a: 'Automated reminders by SMS/voice and smart rescheduling reduce gaps and fill empty slots proactively.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">FAQ</h2>
        <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {data.map((item, idx) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-black/5"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-black/60">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-4 text-black/70">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Ready to see Velodent?</h2>
          <p className="text-black/70">Book a quick 20‑minute walkthrough and ROI planning session.</p>
        </div>
        <a
          href="https://cal.com/velodent-ogbkfv/20min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 text-white hover:opacity-90 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Dashboard</h2>
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 rounded-2xl border border-black/10 p-6 bg-white">
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Monthly Bookings', value: '482' },
                { label: 'Show Rate', value: '91%' },
                { label: 'Recovered Revenue', value: '$38,200' },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-black/10 bg-white">
                  <p className="text-sm text-black/60">{m.label}</p>
                  <p className="text-xl font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
            <div className="h-60 rounded-xl border border-black/10 bg-gradient-to-br from-white to-white relative overflow-hidden">
              <div className="absolute inset-4 border border-dashed border-black/10 rounded-xl flex items-center justify-center text-black/40">Sample Conversion Chart</div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <h3 className="font-medium mb-3">Client Sign‑in</h3>
            <form className="space-y-3">
              <input type="email" placeholder="Email" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              <input type="password" placeholder="Password" className="w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              <button type="button" className="w-full rounded-md bg-black text-white px-3 py-2 hover:opacity-90">Sign in</button>
            </form>
            <p className="text-xs text-black/50 mt-3">This is a demo preview.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MainSections() {
  return (
    <>
      <About />
      <Services />
      <DashboardPreview />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
