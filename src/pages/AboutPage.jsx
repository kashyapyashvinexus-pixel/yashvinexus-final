import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Yashvi Nexus, our mission, vision, and the trust-led approach behind our consulting and property advisory services."
        path="/about"
      />

      <section className="py-24">
        <div className="container-shell">
          <SectionIntro
            eyebrow="About"
            title="Built to deliver clarity, trust, and premium advisory value."
            description="Yashvi Nexus is positioned as a modern B2B consulting brand for clients who expect polished communication, strategic insight, and practical results."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="glass-card rounded-[32px] p-8 lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Company Intro</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We work with businesses, investors, and property-focused decision-makers to simplify high-value decisions through a more professional, premium client experience.
              </p>
            </div>

            <div className="glass-card rounded-[32px] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Vision</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                To become a trusted name in premium B2B advisory by combining strategic insight, market understanding, and relationship-led guidance.
              </p>
            </div>

            <div className="glass-card rounded-[32px] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Mission</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                To help clients make smarter business and property decisions with transparency, confidence, and long-term value in mind.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Strategic Thinking',
                text: 'We align recommendations with business outcomes, not just transactions.'
              },
              {
                title: 'Trust-Based Process',
                text: 'Every touchpoint is built to reduce friction and increase confidence.'
              },
              {
                title: 'Premium Delivery',
                text: 'Our communication, presentation, and process are designed for serious clients.'
              }
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-[32px] p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
