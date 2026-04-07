export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-3xl p-7">
      <p className="text-base leading-8 text-slate-200">“{testimonial.quote}”</p>
      <div className="mt-6">
        <h4 className="font-semibold text-white">{testimonial.name}</h4>
        <p className="text-sm text-slate-400">{testimonial.role}</p>
      </div>
    </div>
  );
}
