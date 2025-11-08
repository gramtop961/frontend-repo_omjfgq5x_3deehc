import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-black/60 mb-3">AI for Dental Clinics</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-4">
            AI automation for dental clinics with 2x ROI guarantee
          </h1>
          <p className="text-black/70 mb-6">
            Velodent handles receptionist duties, follow-ups, insurance verification, payments, booking, and more —
            all in a premium, modern experience your patients will love.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 text-white hover:opacity-90 transition"
            >
              Book Now
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-black hover:bg-black hover:text-white transition"
            >
              View Calendar
            </a>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl border border-black/10 overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
