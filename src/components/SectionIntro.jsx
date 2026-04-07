import { motion } from 'framer-motion';

export default function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy">{description}</p>
    </motion.div>
  );
}
