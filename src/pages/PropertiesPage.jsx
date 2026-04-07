import { useMemo, useState } from 'react';
import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const categories = ['All', ...new Set(properties.map((item) => item.category))];

export default function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProperties = useMemo(() => {
    if (activeCategory === 'All') return properties;
    return properties.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Projects & Properties"
        description="Browse curated projects and properties from Yashvi Nexus with a premium layout and conversion-friendly detail pages."
        path="/properties"
      />

      <section className="py-24">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Properties"
            title="Curated spaces and investment opportunities."
            description="This grid layout is built to present properties with premium visual hierarchy and simple category filters."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-amber-400 text-slate-950'
                    : 'border border-white/10 bg-white/5 text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
