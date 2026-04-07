import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '919978759097';

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30 transition hover:scale-[1.03]"
    >
      <FaWhatsapp size={20} />
      WhatsApp
    </a>
  );
}
