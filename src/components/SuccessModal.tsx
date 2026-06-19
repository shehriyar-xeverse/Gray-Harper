import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  senderName: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, senderName }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-zinc-950 border border-zinc-900 rounded-2xl p-8 text-center shadow-2xl shadow-purple-950/20"
        >
          {/* Glowing central circle */}
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
            <Check className="w-8 h-8 text-white" />
          </div>

          <span className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-widest text-pink-500 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inquiry Received</span>
          </span>

          <h3 className="font-serif text-2xl text-zinc-100 tracking-tight mb-3">
            Thank you, {senderName || 'friend'}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
            Your inquiry has successfully reached our Savannah studio. Andrea and our team of senior designers will review your event details with the utmost care. We will get back to you within 24–48 business hours to schedule your private design consultation.
          </p>

          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-medium text-white hover-color-shimmer border border-zinc-800 transition-all cursor-pointer"
          >
            <span>Close Window</span>
            <ArrowRight className="w-4 h-4 text-pink-400" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default SuccessModal;
