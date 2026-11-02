export function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.7a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.1h-3.4v12.4a2.5 2.5 0 1 1-2.5-2.5c.3 0 .5 0 .8.1V9.1a6 6 0 0 0-.8-.1 5.9 5.9 0 1 0 5.9 5.9V8.6a8.8 8.8 0 0 0 5.1 1.6V6.9c-.6 0-1.2-.1-1.8-.2Z" />
    </svg>
  );
}

export const socialIcon = (label) => ({ Instagram: InstagramIcon, TikTok: TikTokIcon }[label]);
