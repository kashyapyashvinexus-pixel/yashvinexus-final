import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { properties } from '../data/properties';

export default function PropertyDetailPage() {
  const { slug } = useParams();

  const property = useMemo(() => properties.find((item) => item.slug === slug), [slug]);

  if (!property) {
    return (
      <section className="py-24">
        <div className="container-shell">
          <h1 className="text-3xl font-semibold text-white">Property not found</h1>
          <Link to="/properties" className="mt-5 inline-flex text-amber-300">Back to properties</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={property.title}
        description={property.description}
        path={`/properties/${property.slug}`}
        image={property.image}
      />

      <section className="py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <img src={property.image} alt={property.title} className="h-[520px] w-full rounded-[32px] object-cover" />
            </div>
            <div className="glass-card rounded-[32px] p-8">
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
                {property.category}
              </span>
              <h1 className="mt-5 text-4xl font-semibold text-white">{property.title}</h1>
              <p className="mt-4 text-base leading-8 text-slate-300">{property.description}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p><span className="font-semibold text-white">Location:</span> {property.location}</p>
                <p><span className="font-semibold text-white">Price:</span> {property.priceLabel}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white">Key Highlights</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {property.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
