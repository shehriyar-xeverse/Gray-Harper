import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Clock, Info } from 'lucide-react';
import { SuccessModal } from './SuccessModal';

interface ContactViewProps {
  prefilledSubject?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ prefilledSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject || '',
    message: '',
    guestCount: '',
    eventDate: '',
    venue: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [senderName, setSenderName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate elite network request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSenderName(formData.name);
      setShowSuccess(true);
      // reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        guestCount: '',
        eventDate: '',
        venue: '',
      });
    }, 1200);
  };

  return (
    <div className="pt-24 select-text">
      {/* HEADER SECTION */}
      <section className="bg-black py-16 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Atelier Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            Inquire & Connect
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Ready to design your romantic moody botanical experience? Complete our studio intake form to consult personally with Andrea Harper and our senior designers.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTENT STRUCTURE */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* COLUMN 1: INTUITIVE INTAKE FORM (GLASSMORPHIC CARDS) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-zinc-905/30 backdrop-blur-md border border-zinc-900 shadow-xl shadow-purple-950/5 relative overflow-hidden select-text">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-905/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6 text-xs text-pink-500 font-mono uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Consultation Intake Sheet</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                      Your Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Samantha Vance"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-800 text-zinc-100 placeholder-zinc-650 rounded-lg p-3 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. samantha.vance@gmail.com"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-800 text-zinc-100 placeholder-zinc-650 rounded-lg p-3 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                      Event / Subject Curation
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Wedding Floral Planning - Crane Cottage"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-800 text-zinc-100 placeholder-zinc-650 rounded-lg p-3 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eventDate" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                        Target Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-805 text-zinc-100 rounded-lg p-3 text-sm focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="guestCount" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 150 guests"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-805 text-zinc-100 placeholder-zinc-650 rounded-lg p-3 text-sm font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                      Tell us your vision <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your wedding/event, colors, venue choice, or overall style inspiration..."
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 hover:border-zinc-800 text-zinc-100 placeholder-zinc-650 rounded-lg p-3 text-sm transition-colors focus:outline-none resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Inquiry Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800 text-white font-semibold text-xs tracking-widest uppercase cursor-pointer transition-all flex items-center justify-center gap-2 relative overflow-hidden group shadow-lg shadow-purple-950/20"
                  >
                    <span>{isSubmitting ? 'Transmitting Inbound...' : 'Transmit Inquiry'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5 text-pink-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PRIMARY STUDIO CONTACTS SIDEBAR */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Studio Coordinates */}
            <div className="p-8 rounded-xl bg-zinc-900/10 border border-zinc-900 flex flex-col gap-6 select-text">
              <h3 className="font-serif text-xl text-zinc-100 tracking-tight">Atelier Coordinates</h3>
              
              <div className="w-8 h-[1px] bg-pink-500/40" />

              <div className="space-y-5">
                {/* Physical Location */}
                <div className="flex items-start gap-4 text-sm">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-pink-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono font-semibold block">HEADQUARTERS</span>
                    <span className="text-zinc-200 block font-light mt-1">Savannah, Georgia, US</span>
                    <span className="text-xs text-zinc-500 font-mono block mt-0.5">Serving St. Simons, Sea Island, & Journeys</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 text-sm">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-pink-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono font-semibold block">INQUIRIES</span>
                    <a href="mailto:info@grayharper.com" className="text-zinc-200 block font-light mt-1 hover:text-pink-500 transition-colors">info@grayharper.com</a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 text-sm">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-pink-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono font-semibold block">STUDIO TELEPHONE</span>
                    <a href="tel:+19124412098" className="text-zinc-200 block font-light mt-1 hover:text-pink-500 transition-colors">+1 (912) 441-2098</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation disclaimer alert block */}
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/5 text-xs text-zinc-400 leading-relaxed space-y-3">
              <div className="flex items-center gap-1.5 text-purple-400 font-semibold font-mono">
                <Info className="w-4 h-4" />
                <span>CONSULTATION NOTE</span>
              </div>
              <p className="font-light">
                We accept only a highly curated calendar of events annually to ensure that every single cascade, table structure, and individual petal receives Andrea’s absolute focus and custom engineering.
              </p>
              <p className="font-light">
                Private digital or on-studio consultations are scheduled exclusively by appointment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SUCCESS ROMANTIC MODAL DIALOG */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        senderName={senderName}
      />
    </div>
  );
};
export default ContactView;
