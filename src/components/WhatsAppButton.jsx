import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { waUrl } from "../data/site.js";

// Floating "chat with us" button, shown on every page.
export default function WhatsAppButton() {
  const href = waUrl();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with August Occasions on WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform group-hover:scale-105">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60 motion-reduce:animate-none" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
