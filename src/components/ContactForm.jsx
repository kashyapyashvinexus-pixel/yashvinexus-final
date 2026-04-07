import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ type: '', message: '' });

    try {
      const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL || 'hello@yashvinexus.com';
      const subject = encodeURIComponent(form.subject || `New inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Requirement: ${form.subject || 'N/A'}

Message:
${form.message}`
      );

      window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;

      setFeedback({
        type: 'success',
        message:
          'Your email app is opening with the inquiry details. Send the email to complete your submission.'
      });
      setForm(initialState);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: 'Could not open your email app. Please email us directly or use WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-[32px] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/50"
            placeholder="Your full name"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/50"
            placeholder="you@company.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-2 block text-sm font-medium text-slate-200">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/50"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-2 block text-sm font-medium text-slate-200">Company / Requirement</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/50"
            placeholder="Investment, property, business strategy..."
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/50"
            placeholder="Tell us what you need and how we can help."
          />
        </div>
      </div>

      {feedback.message && (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
              : 'border-rose-400/30 bg-rose-400/10 text-rose-200'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Opening Email...' : 'Send Inquiry'}
      </button>

      <p className="mt-4 text-sm text-slate-400">
        No server needed. This form opens your default email app with all details filled in.
      </p>
    </form>
  );
}
