import SEO from '../components/SEO';
import SectionIntro from '../components/SectionIntro';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const mapUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps?q=Ahmedabad&output=embed';

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Yashvi Nexus for real estate consultancy, business consulting, investment advisory, and property solutions."
        path="/contact"
      />

      <section className="py-24">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Contact"
            title="Let’s discuss your business, investment, or property requirement."
            description="This contact page is designed to capture serious inquiries while keeping the experience clean, premium, and easy to use."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="glass-card rounded-[32px] p-8">
                <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <p><span className="font-semibold text-white">Email:</span> hello@yashvinexus.com</p>
                  <p><span className="font-semibold text-white">Phone:</span> +91 99787 59097</p>
                  <p><span className="font-semibold text-white">Location:</span> Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="360"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yashvi Nexus Location Map"
                  className="w-full"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
