import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const [whatsAppNumber, setWhatsAppNumber] = useState('');

  // Simulate API call
  useEffect(() => {
    // Replace with actual fetch
    setTimeout(() => {
      setWhatsAppNumber('+919669231006');
    }, 500);
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    whatsAppNumber
  )}&text=${encodeURIComponent(
    "Hello, I’m reaching out to Karyasiddhi Co-working Space for more information. Could you please provide details about availability and other relevant information?"
  )}`;

  return (
    <div
      className={`fixed right-6 transition-all duration-[1200ms] ease-out ${
        visible
          ? 'bottom-20 sm:bottom-6 opacity-100 animate-fall-from-top z-50 block'
          : '-top-20 opacity-0 animate-rise-to-top z-0 hidden'
      }`}
    >
      <div className="relative group w-12 h-12">
        <div className="absolute inset-0 bg-green-500 rounded-xl animate-ripple" />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}