// @ts-nocheck

export default function FreightRateExpertsLandingPage() {
  const services = [
    {
      title: "LTL Freight Rate Analysis",
      text: "We review your current pricing, lane mix, and shipment profile to uncover savings opportunities and negotiation leverage.",
    },
    {
      title: "Carrier Bid Support",
      text: "We help you go back to carriers with clear, data-backed findings so you can improve rates, terms, and service outcomes.",
    },
    {
      title: "No Savings, No Fee",
      text: "If we do not find real savings, you do not pay. If we do, we share in the value created.",
    },
  ];

  const steps = [
    "Intro call to understand your network, spend, and pain points",
    "Secure review of your freight data and current pricing",
    "Analysis of rates, accessorials, and opportunity areas",
    "Clear recommendations you can take back to your carriers",
  ];

  const reasons = [
    "Freight spend keeps rising without clear visibility into pricing",
    "Internal teams lack time to audit tariffs and rate structures",
    "Savings opportunities are missed without a focused external review",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <img
            src="/logo.png"
            alt="Freight Rate Experts Logo"
            className="h-24 md:h-28 w-auto object-contain"
          />

          <a
            href="mailto:freightrateexperts@gmail.com"
            className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              LTL Freight Cost Reduction
            </div>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Find hidden savings in your current freight pricing.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Freight Rate Experts helps companies uncover savings opportunities
              in LTL pricing and negotiate better outcomes with carriers without
              adding internal resources.
            </p>

            <div className="mt-4 text-slate-400">
              Backed by 35+ years of combined LTL pricing and carrier
              negotiation experience.
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:freightrateexperts@gmail.com?subject=Freight%20Rate%20Review"
                className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                Start a Rate Review
              </a>

              <a
                href="#how-it-works"
                className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Why companies hire us
            </div>

            <div className="space-y-4">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
              <p className="mt-3 text-slate-300">
                A practical approach for shippers who want real freight savings
                without adding headcount.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                How it works
              </h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Simple, confidential, and focused on results.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-slate-950">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-slate-200">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold">Low-risk starting point</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Start with a short conversation. We will determine if a review
                makes sense and what data is needed to evaluate savings
                potential.
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Value proposition
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  If we do not save you money, you do not pay.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 p-8 md:flex md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to see if your freight rates can improve?
                </h2>
                <p className="mt-3 text-slate-200">
                  Start with a conversation to determine if a review makes
                  sense.
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                <a
                  href="mailto:freightrateexperts@gmail.com?subject=Freight%20Rate%20Experts%20Inquiry"
                  className="inline-flex rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Freight Rate Experts</div>
          <div>freightrateexperts@gmail.com</div>
        </div>
      </footer>
    </div>
  );
}