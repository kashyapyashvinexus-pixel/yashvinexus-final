import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Yashvi Nexus services including real estate consultancy, business consulting, investment advisory, and property solutions."
        path="/services"
      />

      <section className="py-24">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Services"
            title="Built for B2B lead generation, strategic trust, and long-term client value."
            description="Each service section is written and designed to feel executive, credible, and conversion-friendly."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
