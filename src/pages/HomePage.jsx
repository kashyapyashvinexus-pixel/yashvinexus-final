import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from 'react-icons/hi';
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
  'Relationship-led, trust-first consultation model',
];

const heroStats = [
  { value: '10+', label: 'Years of advisory-led focus', icon: HiOutlineChartBar },
  { value: 'B2B', label: 'Corporate-first positioning', icon: HiOutlineOfficeBuilding },
  { value: '100%', label: 'Trust-driven consultation', icon: HiOutlineShieldCheck },
];

const differentiators = [
  {
    title: 'Executive-Level Experience',
    copy: 'A cleaner, premium-first journey designed to reassure serious business decision-makers from the first scroll.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Clarity-Driven Consulting',
    copy: 'Every interaction is positioned around confidence, direction, and conversion — not clutter.',
    icon: HiOutlineChartBar,
  },
  {
    title: 'Relationship-Focused Advisory',
    copy: 'Built to feel like a strategic partner, not just a generic service provider.',
    icon: HiOutlineShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Premium B2B Consulting & Property Advisory"
        description="Yashvi Nexus helps businesses and investors with real estate consultancy, business consulting, investment advisory, and end-to-end property solutions."
        path="/"
      />

      <section className="relative overflow-hidden pt-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-[320px] w-[320px] rounded-full bg-amber-300/12 blur-3xl" />
          <div className="absolute right-[-5%] top-[18%] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[260px] w-[65%] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container-shell relative grid min-h-[calc(100vh-84px)] items-center gap-16 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200"
            >
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Premium B2B Advisory
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
            >
              Turning complex property and business decisions into{' '}
              <span className="gold-text">clear strategic growth.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Yashvi Nexus partners with businesses, investors, and decision-makers who
              need premium consulting, real estate intelligence, and trust-driven
              advisory support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(245,158,11,0.18)] transition duration-300 hover:-translate-y-1"
              >
                Book a Consultation
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Explore Services
                <HiOutlineArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/20 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="mt-0.5 text-amber-300" size={20} />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {heroStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass-card rounded-[28px] border border-white/10 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-white">{item.value}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-amber-300/20 via-blue-400/10 to-transparent blur-3xl" />

            <div className="glass-card grid-pattern relative overflow-hidden rounded-[36px] p-5">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80"
                alt="Premium corporate property advisory"
                className="h-[560px] w-full rounded-[28px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute bottom-8 left-8 max-w-sm rounded-[28px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                  Trust. Strategy. Value.
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Built for serious decision-makers.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Consulting experiences designed to convert attention into confidence
                  and confidence into business action.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute right-8 top-8 rounded-[24px] border border-white/10 bg-slate-950/65 px-5 py-4 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Premium positioning
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Lead-focused website experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionIntro
              eyebrow="Services"
              title="Advisory services built for business confidence."
              description="Every service is positioned to help Yashvi Nexus convert more qualified leads while presenting a stronger premium brand image."
            />
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionIntro
              eyebrow="About Yashvi Nexus"
              title="A premium consulting presence that builds trust before the first call."
              description="The website structure is designed to feel credible, modern, and conversion-oriented—so decision-makers feel reassured from their very first interaction."
            />

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
              <p>
                We help companies navigate real estate, investment, and strategic
                growth decisions with a more thoughtful, executive-level experience.
              </p>
              <p>
                Every interaction is shaped around clarity, relationship value, and
                confidence—so clients see not just service offerings, but an advisory
                partner.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition duration-300 hover:gap-3"
            >
              Learn more about us <HiOutlineArrowRight />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              ['10+', 'Years of combined advisory focus'],
              ['100%', 'Trust-first consultation approach'],
              ['B2B', 'Corporate-focused brand positioning'],
              ['End-to-end', 'Support from discovery to decision'],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-300/20"
              >
                <p className="text-4xl font-semibold text-white">{value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="container-shell mt-8 grid gap-6 lg:grid-cols-3"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="glass-card rounded-[28px] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionIntro
              eyebrow="Featured Properties"
              title="Premium listings and investment-ready opportunities."
              description="A grid that showcases properties in a clean, premium way while guiding visitors deeper into the sales funnel."
            />
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {properties.map((property) => (
              <motion.div key={property.id} variants={fadeUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-22">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionIntro
              eyebrow="Testimonials"
              title="The kind of credibility corporate clients want to see."
              description="Trust signals are placed with premium spacing and polished styling so the brand feels proven, not just promotional."
            />
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeUp}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 pt-10">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="glass-card relative overflow-hidden rounded-[36px] p-8 sm:p-12"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                  Ready to move forward?
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Let’s build the right path for your business, property, or investment goals.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Use this website to create a strong first impression, generate premium
                  leads, and position Yashvi Nexus as a credible market partner.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-1"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
