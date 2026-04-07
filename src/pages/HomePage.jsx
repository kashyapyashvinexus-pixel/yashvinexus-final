import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi';
import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';
import ServiceCard from '../components/ServiceCard';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';
import { services } from '../data/services';
import { properties } from '../data/properties';
import { testimonials } from '../data/testimonials';

const trustPoints = [
  'Strategic advisory for growth-focused businesses',
  'Premium property and investment guidance',
  'Relationship-led, trust-first consultation model'
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Premium B2B Consulting & Property Advisory"
        description="Yashvi Nexus helps businesses and investors with real estate consultancy, business consulting, investment advisory, and end-to-end property solutions."
        path="/"
      />

      <section className="relative overflow-hidden">
        <div className="container-shell grid min-h-[calc(100vh-80px)] items-center gap-16 py-18 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300"
            >
              Premium B2B Advisory
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              Turning complex property and business decisions into <span className="gold-text">clear strategic growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Yashvi Nexus partners with businesses, investors, and decision-makers who need premium consulting, real estate intelligence, and trust-driven advisory support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-2xl shadow-amber-600/10">
                Book a Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white">
                Explore Services <HiOutlineArrowRight />
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <HiOutlineCheckCircle className="mt-0.5 text-amber-300" size={20} />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-amber-300/15 via-blue-400/10 to-transparent blur-3xl" />
            <div className="glass-card grid-pattern relative overflow-hidden rounded-[36px] p-5">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80"
                alt="Premium corporate property advisory"
                className="h-[520px] w-full rounded-[28px] object-cover"
              />
              <div className="absolute bottom-10 left-10 max-w-sm rounded-[28px] border border-white/10 bg-slate-950/75 p-6 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Trust. Strategy. Value.</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Built for serious decision-makers.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Consulting experiences designed to convert attention into confidence and confidence into business action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Services"
            title="Advisory services built for business confidence."
            description="Every service is positioned to help Yashvi Nexus convert more qualified leads while presenting a stronger premium brand image."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionIntro
              eyebrow="About Yashvi Nexus"
              title="A premium consulting presence that builds trust before the first call."
              description="The website structure is designed to feel credible, modern, and conversion-oriented—so decision-makers feel reassured from their very first interaction."
            />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
              <p>
                We help companies navigate real estate, investment, and strategic growth decisions with a more thoughtful, executive-level experience.
              </p>
              <p>
                Every interaction is shaped around clarity, relationship value, and confidence—so clients see not just service offerings, but an advisory partner.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
              Learn more about us <HiOutlineArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ['10+', 'Years of combined advisory focus'],
              ['100%', 'Trust-first consultation approach'],
              ['B2B', 'Corporate-focused brand positioning'],
              ['End-to-end', 'Support from discovery to decision']
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-3xl p-7">
                <p className="text-4xl font-semibold text-white">{value}</p>
                <p className="mt-3 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Featured Properties"
            title="Premium listings and investment-ready opportunities."
            description="A grid that showcases properties in a clean, premium way while guiding visitors deeper into the sales funnel."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Testimonials"
            title="The kind of credibility corporate clients want to see."
            description="Trust signals are placed with premium spacing and polished styling so the brand feels proven, not just promotional."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-10">
        <div className="container-shell">
          <div className="glass-card rounded-[36px] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Ready to move forward?</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Let’s build the right path for your business, property, or investment goals.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Use this website to create a strong first impression, generate premium leads, and position Yashvi Nexus as a credible market partner.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-semibold text-slate-950">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
