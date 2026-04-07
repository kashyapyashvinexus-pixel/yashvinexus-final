import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card rounded-3xl p-7"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}
