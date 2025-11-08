import { useEffect } from 'react';

export default function Booking() {
  useEffect(() => {
    // Inject Cal.com embed once on mount
    const scriptId = 'cal-embed-script-20min';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://app.cal.com/embed/embed.js';
      s.async = true;
      document.head.appendChild(s);
      s.onload = () => {
        if (window.Cal) {
          window.Cal('init', '20min', { origin: 'https://app.cal.com' });
          window.Cal.ns['20min']('inline', {
            elementOrSelector: '#my-cal-inline-20min',
            config: { layout: 'month_view' },
            calLink: 'velodent-ogbkfv/20min',
          });
          window.Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        }
      };
    }
  }, []);

  return (
    <section id="booking" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Book a 20‑minute demo</h2>
        <div className="rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-2">
          <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-20min"></div>
        </div>
      </div>
    </section>
  );
}
