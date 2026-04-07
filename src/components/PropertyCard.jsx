import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function PropertyCard({ property }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
            {property.category}
          </span>
          <span className="text-sm text-slate-400">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{property.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{property.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-semibold text-white">{property.priceLabel}</p>
          <Link
            to={`/properties/${property.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300"
          >
            View details <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
